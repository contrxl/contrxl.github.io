---
title: Windows Event Logs
layout: notes
---

# Elements of an Event Viewer Log

- System Logs: Records events associated with OS segments, this can include info about hardware changes, drivers, system changes and other activities.
- Security Logs: Records events related to logon/logoff activities, the system audit policy specifies the events.
- Application Logs: Records events related to applications installed on a system. The main pieces of information include errors, events and warnings.
- Directory Service Events: Directory changes and activities are recorded here, mainly on domain controllers.
- File Replication Service Events: Records events associated with Windows Servers during the sharing of Group Policies and logon scripts.
- DNS Event Logs: DNS servers use these to record domain events.
- Custom Logs: Events logged by apps requiring custom data storage.

<br/>Event logs can be classified into types:

<table>
  <tr>
    <th>Event Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>Error</td>
    <td>Significant problem like loss of data or function.</td>
  </tr>
  <tr>
    <td>Warning</td>
    <td>May indicate a future problem.</td>
  </tr>
  <tr>
    <td>Information</td>
    <td>Describes successful operation of an app, driver or service.</td>
  </tr>
  <tr>
    <td>Success Audit</td>
    <td>Records an audited security access attempt which is successful.</td>
  </tr>
  <tr>
    <td>Failure Audit</td>
    <td>Records an audited security access attempt which fails.</td>
  </tr>
</table>
 	
# wevtutil.exe

This allows you to retrieve info about event logs and publishers.

# Get-WinEvent

PowerShell cmdlet to get events from logs and event tracing log files on local and remote computers.

<table>
  <tr>
    <th>Command</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>Get-WinEvent -ListLog *</td>
    <td>Obtain all local event logs</td>
  </tr>
  <tr>
    <td>Get-WinEvent -ListProvider * </td>
    <td>Get all event log providers and associated logs</td>
  </tr>
  <tr>
    <td>Get-WinEvent -LogName Application | Where-Object {$_.ProviderName -Match 'WLMS'}</td>
    <td>Filter event log using Where-Object</td>
  </tr>
  <tr>
    <td>Get-WinEvent -FilterHashtable @{LogName='Application'ProviderName='WLMS'}</td>
    <td>More efficient method than Where-Object</td>
  </tr>
</table>
 		
# XPath Queries

XML Language in Full provides a standard syntax and semantics for addressing parts of an XML document. An example of an XPath query is:

```
*[System[(Level <= 3) and TimeCreated[timediff(@SystemTime) <= 86500000]]]
```

This query selects all events from the channel or log file where severity is less than or equal to three and the event occurred in the last 24hrs. You can construct XPath Queries with the help of Event Viewer by viewing an events "Details" tab in "XML View" mode.

# Useful Resources

- [Windows Logging Cheatsheet Win7 to Win 2012](https://static1.squarespace.com/static/552092d5e4b0661088167e5c/t/580595db9f745688bc7477f6/1476761074992/Windows+Logging+Cheat+Sheet_ver_Oct_2016.pdf)
- [Spotting the Adversary with Windows Event Log Monitoring](https://web.archive.org/web/20190115215749/https://apps.nsa.gov/iaarchive/customcf/openAttachment.cfm?FilePath=/iad/library/ia-guidance/security-configuration/applications/assets/public/upload/Spotting-the-Adversary-with-Windows-Event-Log-Monitoring.pdf&WpKes=aF6woL7fQp3dJiqyJL2LenrLxuHC7ztGtVNK3x)
- [MITRE ATT&CK](https://attack.mitre.org/)
- [Events to Monitor](https://learn.microsoft.com/en-us/windows-server/identity/ad-ds/plan/appendix-l--events-to-monitor)
- [About Logging Windows](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_logging_windows?view=powershell-7.5&viewFallbackFrom=powershell-7.1)
- [Greater Visibility Through PowerShell Logging](https://cloud.google.com/blog/topics/threat-intelligence/greater-visibility/)
- [Configure PowerShell Logging in Splunk](https://docs.splunk.com/Documentation/UBA/5.0.4/GetDataIn/AddPowerShell)