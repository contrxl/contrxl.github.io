---
title: Sysmon
layout: notes
---

# Config

Sysmon requires a config file to tell the binary how to analyse events. You can create your own or download a pre-existing config. An example of a high-quality config can be seen [here](https://github.com/SwiftOnSecurity/sysmon-config). The majority of rules in sysmon will exclude rather than include events to help filter out activity that is deemed normal in your environment. There are 29 different event IDs in sysmon, some of the most important are discussed here.

## Event ID 1: Process Creation

```xml
<RuleGroup name="" groupRelation="or">
	<ProcessCreate onmatch="exclude">
		<CommandLine condition="is">C:\Windows\system32\svchost.exe -k appmodel -p -s camsvc</CommandLine>
	</ProcessCreate>
</RuleGroup>
```

<br/>This code snippet specifies the event ID to pull from and to exclude the `svchost.exe` process from the logs. This event looks for any processes which are created.

## Event ID 3: Network Connection

```xml
<RuleGroup name="" groupRelation="or">
	<NetworkConnect onmatch="include">
		<Image condition="image">nmap.exe</image>
		<DestinationPort name="Alert,Metasploit" condition="is">4444</DestinationPort>
	</NetworkConnect>
</RuleGroup>
```

<br/>This code snippet identifies files sent over open port, specifically by `nmap.exe`. It also identifies open ports, specifically port 4444 used by Metasploit. This event looks for any event which occurs remotely.

## Event ID 7: Image Loaded

```xml
<RuleGroup name="" groupRelation="or">
	<ImageLoad onmatch="include">
		<ImageLoaded condition="contains">\Temp\</ImageLoaded>
	</ImageLoad>
</RuleGroup>
```

<br/>This code snippet looks for any DLLs loaded within the `\Temp\` directory. This should be used cautiously as it can generate a high system load. This event looks for DLLs loaded by processes.

## Event ID 8: Create Remote Thread

```xml
<RuleGroup name="" groupRelation="or">
	<CreateRemoteThread onmatch="include">
		<StartAddress name="Alert,Cobalt Strike" condition="end with">0B80</StartAddress>
		<SourceImage condition="contains">\</SourceImage>
	</CreateRemoteThread>
</RuleGroup>
```

<br/>This code snippet looks at the memory address for a specific ending condition which can indicate Cobalt Strike beacons. It also looks for any injected process which has no parent process. This event looks for any process injecting code into other processes.

## Event ID 11: File Created

```xml
<RuleGroup name="" groupRelation="or">
	<FileCreate onmatch="include">
		<TargetFilename name="Alert,Ransomware" condition="contains">HELP_TO_SAVE_FILES</TargetFilename>
	</FileCreate>
</RuleGroup>
```

<br/>This is an example of a ransomware event monitor. This event creates logs when files are created or overwritten on the endpoint.

## Event ID 12/13/14: Registry Event

```xml
<RuleGroup name="" groupRelation="or">
	<RegistryEvent onmatch="include">
		<TargetObject name="T1484" condition="contains">Windows\System\Scripts</TargetObject>
	</RegistryEvent>
</RuleGroup>
```

<br/>This looks for registry objects in the `Windows\System\Scripts` directory, which is commonly used by adversaries for persistence. This event looks for any changes or modifications to registry.

## Event ID 15: FileCreateStreamHash

```xml
<RuleGroup name="" groupRelation="or">
	<FileCreateStreamHash onmatch="include">
		<TargetFilename condition="end with">.hta</TargetFilename>
	</FileCreateStreamHash>
</RuleGroup>
```

<br/>This looks for files with the `.hta` extension which are in an alternate data stream. This event looks for any file created within an alternate data stream.

## Event ID 22: DNS Event

```xml
<RuleGroup name="" groupRelation="or">
	<DnsQuery onmatch="exclude">
		<QueryName condition="end with">.microsoft.com</QueryName>
	</DnsQuery>
</RuleGroup>
```

<br/>This excludes any DNS event with `.microsoft.com` query. This can be used to get rid of typical DNS noise in your environment. This event logs all DNS queries/events.

# Best Practices

- Exclude is always better than include, this prevents you from missing out on critical events.
- CLI gives the most control, using `Get-WinEvent` or `wevtutil.exe` is best.
- Know your environment before implementation.

# Hunting Metasploit

Metasploit and the Meterpreter shell can be tracked by looking for traffic originating from specific ports like 4444 and 5555. Common malware back connect ports can be seen here. A basic sysmon rule to check for this would look like:

```xml
<RuleGroup name="" groupRelation="or">
	<NetworkConnect onmatch="include">
		<DestinationPort condition="is">4444</DestinationPort>
		<DestinationPort condition="is">5555</DestinationPort>
	</NetworkConnect>
</RuleGroup>
```

<br/>`Get-WinEvent` can also be used to hunt for Metasploit via PowerShell using:

```powershell
Get-WinEvent -Path [PATH] -FilterXPath '*/System/EventID=3 and */EventData/Data[@Name="DestinationPort"] and */EventData/Data=4444'
```

# Hunting Mimikatz

Mimikatz is a well known tool commonly used for dumping LSASS. A simple method to check for Mimikatz is to look for files created with the name Mimikatz. A simple rule to do this is:

```xml
<RuleGroup name="" groupRelation="or">
	<FileCreate onmatch="include">
		<TargetFileName condition="contains">mimikatz</TargetFileName>
	</FileCreate>
</RuleGroup>
```

<br/>This is not commonly used to hunt for anomalies. Instead, we can hunt for abnormal LSASS behaviour using event IDs. If LSASS is ever accessed by a process other than `svchost.exe` it should be considered suspicious, a sysmon config to do this is:

```xml
<RuleGroup name="" groupRelation="or">
	<ProcessAccess onmatch="include">
		<TargetImage condition="image">lsass.exe</TargetImage>
	</ProcessAccess>
</RuleGroup>
```

<br/>This configuration can be altered to cut down the legitimate events coming from `svchost.exe` by modifying it as follows:

```xml
<RuleGroup name="" groupRelation="or">
	<ProcessAccess onmatch="exclude">
		<SourceImage condition="image">svchost.exe</SourceImage>
	</ProcessAccess>
	<ProcessAccess omatch="include">
		<TargetImage condition="image">lsass.exe</TargetImage>
	</ProcessAccess>
</RuleGroup>
```

<br/>`Get-WinEvent` can also be used to detect unusual LSASS behaviour with PowerShell:

```powershell
Get-WinEvent -Path [PATH] -FilterXPath '*/System/EventID=10 and */EventData/Data[@Name="TargetImage"] and */EventData/Data="C:\Windows\system32\lsass.exe"'
```

# Hunting Malware

A basic technique for hunting malware is to create a configuration file which detects suspicious open ports. For example, the snippet below is from the Ion-Storm configuration which will alert when ports like 1034 and 1604 are open whilst excluding common connections like OneDrive.

```xml
<RuleGroup name="" groupRelation="or">
	<NetworkConnect onmatch="include">
		<DestinationPort condition="is">1034</DestinationPort>
		<DestinationPort condition="is">1604</DestinationPort>
	</NetworkConnect>
	<NetworkConnect onmatch="exclude">
		<Image condition="image">OneDrive.exe</Image>
	</NetworkConnect>
</RuleGroup>
```

<br/>PowerShell can also be used to hunt for common back connect ports:

```powershell
Get-WinEvent -Path [PATH] -FilterXPath '*/System/EventID=3 and */EventData/Data[@Name="DestinationPort"] and */EventData/Data=[PORT]'
```

# Hunting Persistence

From the SwiftOnSecurity configuration file, we can see an example of detections for files being placed in `\Startup\` or `\Start Menu` directories.

```xml
<RuleGroup name="" groupRelation="or">
	<FileCreate onmatch="include">
		<TargetFilename name="T1023" condition="contains">\Start Menu</TargetFilename>
		<TargetFilename name="T1165" condition="contains">\Startup\</TargetFileName>
	</FileCreate>
</RuleGroup>
```

<br/>Another SwiftOnSecurity example for registry modification is:

```xml
<RuleGroup name="" groupRelation="or">
	<RegistryEvent onmatch="include">
		<TargetObject name="T1060,RunKey" conditon="contains">CurrentVersion\Run</TargetObject>
		<TargetObject name="T1484" condition="contains">Group Policy\Scripts</TargetObject>
		<TargetObject name="T1060" condition="contains">CurrentVersion\Windows\Run</TargetObject>
	</RegistryEvent>
</RuleGroup>
```

# Detecting Evasion Techniques

Detection of files hidden in ADS can be carried out using sysmon, an example again from the SwiftOnSecurity configuration which will hunt for files in Temp, Downloads and with `.hta` and `.bat` extensions:

```xml
<RuleGroup name="" groupRelation="or">
	<FileCreateStreamHash onmatch="include">
		<TargetFilename condition="contains">Downloads</TargetFilename>
		<TargetFilename conditon="contains">Temp\7z</TargetFilename>
		<TargetFilename condition="ends with">.hta</TargetFilename>
		<TargetFilename condition="ends with">.bat</TargetFilename>
	</FileCreateStreamhash>
</RuleGroup>
```

<br/>Adversaries also use remote threads to evade detection, these are created with the Windows API CreateRemoteThread and can be accessed with OpenThread and ResumeThread. Again, from SwiftOnSecurity:

```xml
<RuleGroup name="" groupRelation="or">
	<CreateRemoteThread onmatch="exclude">
		<SourceImage condition="is">C:\Windows\system32\svchost.exe</SourceImage>
		<TargetImage condition="is">C:\Program Files (x86)\Google\Chrome\Application\chrome.exe</TargetImage>
	</CreateRemoteThread>
</RuleGroup>
```