---
title: AD Authenticated Enumeration
layout: notes
---

# AS-REP Roasting

AS-REP roasting dumps user accounts which have Kerberos pre-authentication disabled. These users must have the `(UF_DONT_REQUIRE_PREAUTH)` flag set. There are two main phases to AS-REP roasting.

##  Enumeration

- [Rubeus](https://github.com/GhostPack/Rubeus): Windows only, tool designed for Kerberos security testing and enumeration. Automatically identifies vulnerable accounts and retrieves their encrypted AS-REP hashes.
- [Impacket GetNPUsers.py](https://github.com/fortra/impacket): Linux or Windows, used to enumerate accounts in non-Windows environments, to test for pre-auth, you must apply a userlist: `GetNPUsers.py [DOMAIN]/ -dc-ip [TARGET] -usersfile [USERLIST] -format hashcat -outputfile hashes.txt -no-pass`.

## Exploitation

- [Hashcat](https://hashcat.net/hashcat/): password cracking tool that can be used with `-m 18200` to crack AS-REP hashes.

## Mitigations

- Ensure Kerberos pre-authentication is enabled for all users
- Ensure strong passwords
- Monitor anomalous AS-REP requests

# Manual Enumeration

- `whoami /all`: detailed page containing account SID, group membership, account privileges.
- `systeminfo`: detailed computer information from OS version to installed hotfixes.
- `set`: variables showing lots of info from users home directory to domain.
- `net user /domain`: show list of users on the domain
- `net user <user> /domain`: show details about a specific domain user
- `net group /domain`: show details about domain accounts in the group
- `net group <Group Name> /domain`: show members or computer accounts which exist in a group
- `quser`: see logged on users on a remote machine
- `tasklist /v`: currently running tasks
- `net session`: SMB sessions (needs admin)
- `wmic service get Name,StartName`: show service information (needs admin)
- `sc query state= all`: show services running on a system
- `reg query HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Winlogon /v <keyword>`: search for default usernames/passwords configured for autologon
- `reg query HKLM /f "password" /t REG_SZ /s`: search registry for passwords

# Bloodhound Enumeration

Bloodhound was released in 2016 and is one of the most potent tools for AD enumerations. Bloodhound employs a two stage approach:

- Enumeration: attackers deploy a collector like SharpHound or Bloodhound-Python to gather AD structure information, even if detected, attackers now have this data offline.
- Targeted Attack: using the collected data, attackers identify efficient paths to their goals so they can re-enter the environment and move quickly.

<br/>Modern BloodHound includes AzureHound, new attack path detections and advanced analysis algorithms.

# SharpHound & BloodHound-Python

SharpHound is the official BloodHound data collector, written in C#, it collects:

- Group memberships
- Session data
- ACLs
- Domain Trusts
- Privileged relationships
    
<br/>SharpHound comes in three forms:

1. SharpHound.exe: Windows executable for enumeration on Windows joined machines. Recommended method.
2. AzureHound.ps1: PowerShell script focused on Azure Entra ID environments.
3. SharpHound.ps1: Previously a PowerShell variant for stealth operations, no longer supported.
4. BloodHound.py is the Python collector for Linux based systems. BloodHound does not officially support the Python script.

## Using BloodHound.py

The basic syntax for this is:

```bash
bloodhound-python -u [USER] -p [PASSWORD] -d [DOMAIN] -ns [IP] -c All --zip
```

<br/>When conducting operations, the `--ExlcudeDCs` flag can be used to avoid querying domain controllers, `DCOnly` can be used to limit interactions. Collectors should always be run from devices with antivirus exclusions or non-domain joined machines.

# Enumeration with PowerShell
## ActiveDirectory Module

This module is available on DCs by default, on workstations, you need to download Remote Server Administration Tools for Windows. To import the module for use, use `Import-Module ActiveDirectory`. Enumeration commands:

- `Get-ADUser -Filter *`: Show all AD users
- `Get-ADUser -Identity <username> -Properties *`: Show all properties of a chosen user
- `Get-ADGroup -Filter *`: Show all AD groups
- `Get-ADGroupMember -Identity <group>`: Show all members of a chosen group
- `Get-ADComputer -Filter *`: Show all AD computers
- `Get-ADDefaultDomainPasswordPolicy`: Show password policy in domain

# [PowerView](https://github.com/PowerShellMafia/PowerSploit)

PowerView is part of the PowerSploit framework and can be used for various tasks. This can be imported with `Import-Module .\PowerView.ps1`. Enumeration commands:

- `Get-DomainUser`: Dump all domain users
- `Get-DomainGroup`: Dump all domain groups
- `Get-DomainComputer`: Dump all domain computers
