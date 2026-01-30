---
title: Network Security and Network Data
layout: notes
---

# Network Security

Base network security controls are defined as:

- Physical: prevent unauthorised physical access to networking infrastructure
- Technical: prevent unauthorised access to network data
- Administrative: provide consistency in security operations like creating policies and processes
    
<br/>Each control level has two main approaches:

1. Access Control: set of controls to ensure authentication and authorisation
2. Threat Control: detect and prevent anomalous activities on network
    
<br/>Access control has various key elements:

- Firewall Protection: controls incoming and outgoing network traffic with predetermined security rules.
- Network Access Control: controls device suitability before they can access the network.
- Identity and Access Management: controls and manages the asset identities and user access to data systems.
- Load Balancing: controls resource usage to distribute tasks.
- Network Segmentation: creates and controls network ranges and segmentation to isolate users' access levels.
- Virtual Private Networks (VPN): creates and controls encrypted communication between devices.
- Zero Trust Model: configuring and implementing the access and permissions at a minimum level.

<br/>Threat control has various key elements:

- Intrusion Detection and Prevention: inspects traffic and creates alerts or resets the connection if a threat is detected.
- Data Loss Prevention: inspects traffic and blocks extraction of sensitive info.
- Endpoint Protection: protecting endpoints and appliances on the network by using a multi-layered approach.
- Cloud Security: protecting cloud/online-based system resources from threats and data leakage.
- Security Information and Event Management: technology that helps threat detection, compliance and incident management.
- Security Orchestration Automation and Response: helps coordinate and automate tasks between people
- Network Traffic Analysis & Network Detection and Response: inspecting network traffic or capture to identify anomalies and threats.
    
<br/>Typical network security management operation looks like:

<table>
  <tr>
    <th>Deployment</th>
    <th>Configuration</th>
    <th>Management</th>
    <th>Monitoring</th>
    <th>Maintenance</th>
  </tr>
  <tr>
    <td>Device and software installation, Initial configuration, Automation</td>
    <td>Feature Configuration, Initial network access configuration</td>
    <td>Security policy implementation, NAT and VPN implementation, Threat mitigation</td>
    <td>System monitoring, User activity monitoring, Threat monitoring, Log and traffic sample capturing</td>
    <td>Upgrades, Security updates, Rule adjustments, License management, Configuration updates</td>
  </tr>
</table>

Managed Security Services (MSS) are services which are provided by a third party to ensure security needs, some common MSS are:

- Network Penetration Testing
- Vulnerability Assessment
- Incident Response

# Traffic Analysis

This is intercepting, recording and analysing network data & communication patterns. Traffic analysis is part of multiple disciplines:

- Network Sniffing and Packet Analysis
- Network Monitoring
- Intrusion Detection and Prevention
- Network Forensics
- Threat Hunting

<br/>There are two primary techniques for traffic analysis:

1. Flow Analysis: Collecting data/evidence from networking devices. Aims to provide statistical results via data summary. An advantage is that it is easy to collect and analyse. A challenge is that it doesn't provide full packet details
2. Packet Analysis: Collecting all available network data, applying in-depth packet-level investigation. An advantage is that it provides full packet details. A challenge is that it requires time and skillset.