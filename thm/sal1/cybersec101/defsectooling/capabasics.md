---
title: CAPA Basics
layout: notes
---

Common Analysis Platform for Artifacts (CAPA) is a tool built by the FireEye Mandiant team. It is designed to identify capabilities present in files like Portable Executables (PE), ELF Binaries, .NET Modules, Shellcode and even sandbox reports.

# CAPA Results
## General Information

The first segment or block of CAPA results includes general information about the file, including:

- Cryptographic algorithms like MD5 and SHA1
- Analysis tells you how CAPA performed its analysis
- OS field reveals the OS for which the identified capabilities apply
- Arch field determines if the binary is in x86 architecture
- Path field shows where the file was located

## MITRE ATT&CK

CAPA uses the MITRE ATT&CK framework format for its output, some results may or may not contain techniques and sub-technique identifiers.

<table>
  <tr>
    <th>Format</th>
    <th>Sample</th>
  </tr>
  <tr>
    <td>ATT&CK Tactic::ATT&CK Technique::TechniqueID</td>
    <td>Defence Evasion::Obfuscated Files or Info::T1027</td>
  </tr>
  <tr>
    <td>ATT&CK Tactic::ATT&CK Technique::ATT&CK Sub-Technique::TechniqueID.Sub-techniqueID</td>
    <td>Defence Evasion::Obfuscated Files or Info::Indicator Removal from Tools T1027.005</td>
  </tr>
</table>
 	
## MAEC

Malware Attribute Enumeration and Characterisation is a specialised language designed to encode and communicate complex details concerning malware. CAPA commonly uses the values "Downloader" and "Launcher".
When CAPA tags a file with a "Launcher" value, it indicates the file demonstrates behaviour similar to:

- Dropping additional payloads
- Activating persistence mechanisms
- Connecting to C2 servers
- Executing specific functions
- When CAPA tags a file with a "Downloader" value, it indicates the file demonstrates behaviour similar to:
- Fetching additional payloads or resources
- Pulling in updates
- Executing secondary stages
- Retrieving configuration files

# Malware Behaviour Catalogue (MBC)

Serves as a catalogue of malware objectives & behaviours. MBC can link ATT&CK methods and log behaviours/code features discovered during analysis. MBC content can be represented in two formats:

<table>
  <tr>
    <th>Format</th>
    <th>Sample</th>
  </tr>
  <tr>
    <td>OBJECTIVE::Behaviour::Method[Identifier]</td>
    <td>ANTI-STATIC ANALYSIS::Executable Code Obfuscation::Argument Obfuscation[B0032.020]</td>
  </tr>
  <tr>
    <td>OBJECTIVE::Behaviour::[Identifier]</td>
    <td>COMMUNICATION::HTTP Communication::[C0002]</td>
  </tr>
</table>
 	
In the MBC, the objective is based on the ATT&CK tactics in the context of malware behaviour. There are also micro-objectives which are associated with micro-behaviours, these refer to actions exhibited by malicious software which is not necessarily malicious. The MBC behaviours contain behaviours and micro-behaviours with or without methods and identifiers. Finally, methods are similar to ATT&CK techniques and are tied to behaviours.

# Namespaces

Namespaces are represented in the below format:

<table>
  <tr>
    <th>Format</th>
    <th>Sample</th>
  </tr>
  <tr>
    <td>Capability(Rule Name)::TLN(Top-Level Namespace)/Namespace</td>
    <td>reference anti-VM strings::Anti-Analysis/anti-vm/vm-detection</td>
  </tr>
</table>
 	
Namespaces are used to group items with the same purpose.