---
title: Log Fundamentals
layout: notes
---

# Types of Logs

<table>
  <tr>
    <th>Type</th>
    <th>Usage</th>
    <th>Example</th>
  </tr>
  <tr>
    <td>System Log</td>
    <td>Used for troubleshooting issues, provide info on various OS activities</td>
    <td>System Start Up and Shutdown Events, Driver Loading Events, System Error Events, Hardware Events</td>
  </tr>
  <tr>
    <td>Security Log </td>
    <td>Provide information on security-related activities</td>
    <td>Authentication Events, Authorisation Events, Security Policy Changes Events, User Account Changes Events, Abnormal Activity Events</td>
  </tr>
  <tr>
    <td>Application Log</td>
    <td>Specific events related to the application, any interactive or non-interactive activity is logged</td>
    <td>User Interaction Events, Application Changes Events, Application Update Events, Application Error Events</td>
  </tr>
  <tr>
    <td>Audit Log</td>
    <td>Detailed info on system changes and user events. Helpful for compliance</td>
    <td>Data Access Events, System Change Events, User Activity Events, Policy Enforcement Events</td>
  </tr>
  <tr>
    <td>Network Log</td>
    <td>Info on networks incoming and outgoing traffic</td>
    <td>Incoming Network Traffic Event, Outgoing Network Traffic Event, Network Connection Logs, Network Firewall Logs</td>
  </tr>
  <tr>
    <td>Access Log</td>
    <td>Detailed info on access to resources of different types</td>
    <td>Webserver Access Logs, Database Access Logs, Application Access Logs, API Access Logs</td>
  </tr>
</table>

# Windows Event Logs

- Application: any info on applications is logged in this file, including errors, warnings, compatibility issues etc.
- System: the OS has different running operations, any info related to these is logged in the System log file.
- Security: logs all security related activities like user authentication, changes in accounts, policy changes etc.

<br/>Windows provides Event IDs to help identify logs, some important ones are:

<table>
  <tr>
    <th>Event ID</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>4624</td>
    <td>User account successfully logged in.</td>
  </tr>
  <tr>
    <td>4625</td>
    <td>User account failed login.</td>
  </tr>
  <tr>
    <td>4634</td>
    <td>User logged off.</td>
  </tr>
  <tr>
    <td>4720</td>
    <td>User account created.</td>
  </tr>
  <tr>
    <td>4724</td>
    <td>Attempt was made to reset password.</td>
  </tr>
  <tr>
    <td>4722</td>
    <td>User account enabled.</td>
  </tr>
  <tr>
    <td>4725</td>
    <td>User account disabled.</td>
  </tr>
  <tr>
    <td>4726</td>
    <td>User account deleted.</td>
  </tr>
</table>