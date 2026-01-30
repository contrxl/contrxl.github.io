---
title: SysInternals
layout: notes
---

# Basics

Sysinternals can be downloaded as individual tools from [here](https://docs.microsoft.com/en-us/sysinternals/downloads/) or the entire suite can be obtained [here](https://docs.microsoft.com/en-us/sysinternals/downloads/sysinternals-suite). Once installed, the path to the folder can be added to your environment variables for ease of use by running `sysdm.cpl`, navigating to the "Advanced" tab, then "Environment Variables". In here, select "Path", then "Edit" and "New", finally, add the path which you installed sysinternals to.

# File and Disk Utilities
## Sigcheck

Shows file version number, timestamp info, digital signature details (including certificate chains). It also has an option to check a file status against VirusTotal. For example, `sigcheck -u -e C:\Windows\System32` can be used to check if any files are unsigned in the System32 folder. The `-u` option will check VT and the `-e` option will only scan executable images.

## Streams

Alternate Data Streams (ADS) is an attribute specific to Windows NTFS (New Technology File System). Every file has at least one stream (`$DATA`) and ADS allows a file to include more than one stream of data. ADS can be used by threat actors to hide data in an endpoint.

## SDelete

Secure Delete implements the DOD 5220.22-M sanitising protocol. It has been used by adversaries associated with MITRE techniques [T1485](https://attack.mitre.org/techniques/T1485/) and [T1070.004](https://attack.mitre.org/techniques/T1070/004/).

# Networking Utilities
## TCPView

Shows detailed listings of all TCP and UDP endpoints on the system. Windows also has build in resmon which provides this functionality.

# Process Utilities
## Autoruns

Shows what programs are configured to run during system bootup or login.

## ProcDump

Used to monitor an application for CPU spikes and generating crash dumps during those spikes.

## Process Explorer

Shows a list of currently active process and the names of owning accounts.

## ProcMon

Advanced monitoring tool that shows real-time file system, registry and process/thread activity. A guide to effective ProcMon use can be found [here](https://adamtheautomator.com/procmon/).

## PsExec

A lightweight telnet replacement that allows you to execute processes on other systems. PsExec is used by adversaries and is associated with [T1570](https://attack.mitre.org/techniques/T1570), [T1021.002](https://attack.mitre.org/techniques/T1021/002), [T1569.002](https://attack.mitre.org/techniques/T1569/002).

# Security Utilities
## Sysmon

Windows system service & driver that remains resident across reboots to monitor and log activity to the Windows event log.

# System Information
## WinObj

A 32-bit Windows NT program using the native Windows NT API to access and display information. This can be used to view Session 0/Session 1.

# Miscellaneous

## BgInfo

Displays information about a Windows computer on the desktop background.

## RegJump

Takes a registry path and makes RegEdit open to that path, it accepts keys in standard and abbreviated form.