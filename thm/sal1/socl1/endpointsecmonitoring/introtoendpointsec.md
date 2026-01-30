---
title: Introduction to Endpoint Security
layout: notes
---

# Core Windows Processes

- `System`
- `System` -> `smss.exe`
- `csrss.exe`
- `wininit.exe`
- `wininit.exe` -> `services.exe`
- `wininit.exe` -> `services.exe` -> `svchost.exe`
- `lsass.exe`
- `winlogon.exe`
- `explorer.exe`

<br/>Processes with no depiction of a parent-child relationship should not normally have a parent process, except for `System`, which should only have `System Idle Process (0)` as its parent.

# Sysinternals

Sysinternals has over 70 tools in one of the following categories:

- File and Disk Utilities
- Networking Utilities
- Process Utilities
- Security Utilities
- System Information
- Misc

## TCPView

Will show detailed listings of all TCP and UDP endpoints running on system, every connection initiated by a process is listed by the tool.

## Process Explorer

Enables the inspection of running processes to see associated services, invoked network traffic, file handles, directories opened, DLLs and memory mapped files loaded.

# Windows Event Logs

Events in these log files are stored in a proprietary format with a `.evt` or `.evtx` extension. These are typically kept in `C:\Windows\System32\winevt\Logs`. These logs can be accessed using Event Viewer, `Wevtutil.exe` or `Get-WinEvent`.

# Sysmon

Used to monitor and log Windows events, provides further detail and granular control. Commonly used with a SIEM or other log parsing solutions. Sysmon includes 27 types of Event IDs.

# OSQuery

Open source tool created by Facebook, allows you to query an endpoint using SQL syntax.

# Wazuh

Open-source EDR solutions for all scales of environment.

# Event Correlation

Identifying relationships from multiple log sources. Involved identifying artifacts which coexist across various log sources and connecting these artifacts. With correlated information, you can connect the dots of each artifact from the two sources:

- Source and Destination IP
- Source and Destination Port
- Action Taken
- Protocol
- Process Name
- User Account
- Machine Name

# Baselining

The process of knowing what is expected to be normal, requires a vast amount of data-gathering to establish standard behaviour. Using this as a reference helps determine outlying behaviours.
