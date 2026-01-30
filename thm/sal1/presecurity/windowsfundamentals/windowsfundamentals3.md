---
title: Windows Fundamentals Part 3
layout: notes
---

# Windows Updates

A service provided by MS to provide security updates, feature enhancements and patches for the Windows OS. Updates are typically released on the second Tuesday of each month.

# Windows Security

There are four key protection areas in here:

1. Virus & threat protection
2. Firewall & network protection
3. App & browser control
4. Device security

<br/>These areas will have status icons on them from green to red, these icons indicate:

- Green: no recommended actions
- Yellow: safety recommendation to review
- Red: immediate attention needed

# Virus & Threat Protection

This is divided into two main parts: current threats and virus and threat protection settings.

## Current Threats

Provides various scan options:

- Quick scan: checks folders where threats are commonly found
- Full scan: checks all files and running programs, can take over an hour
- Custom scan: choose locations to scan
    
<br/>Also provides an overview of threat history:

- Last scan: shows last automatic scan time
- Quarantined threats: shows threats that have been removed from your system, will automatically be deleted over time
- Allowed threats: items identified as threats that were allowed to run

## Virus & Threat Protection Settings

Allows you to manage basic settings like:

- Real-Time Protection: locates and stops malware from running on your device
- Cloud-Delivered Protection: provides increased protection with access to latest data in the cloud
- Automatic Sample Submission: send sample files to MS to help protect others
- Controlled Folder Access: protect files, folders and memory from unauthorised changes
- Exclusions: won't scan items you have excluded
- Notifications: defender will send critical notifications about health and security of the device
    
<br/>This also contains settings for updates and ransomware protection.

# Firewall & Network Protection

There are three different firewall profiles here:

1. Domain: applies to networks where the host can authenticate to a domain controller
2. Private: user-assigned profile used to designate private or home networks
3. Public: used to designate public networks like WiFi at coffee shops.

# Volume Shadow Copy Service (VSS)

Coordinates the required actions to create a consistent shadow copy of the data to be backed up. If VSS is enabled, you can take the following actions from advanced system settings:

- Create restore point
- Perform system restore
- Configure restore settings
- Delete restore points
