---
title: SOC Fundamentals
layout: notes
---

# Purpose and Components

Main focus is to keep detection & response intact. Continuous monitoring is required to detect and respond to any security incident.

## Detection

- Detect vulnerabilities: any weakness an attacker can exploit must be discovered and patched. Strictly speaking not the SOC's responsibility but unfixed vulnerabilities affect the entire company.
- Detect unauthorised activity: crucial to detect any unsanctioned activity before it causes any damage.
- Detect policy violations: any violations of company policies must be investigated.
- Detect intrusions: refers to unauthorised access to systems and networks.

## Response

- Support with incident response: once an incident is detected steps must be taken to respond to it.
- There are three pillars to a SOC: People, Process and Technology.

# People

People are always important in a SOC. The SOC team has the following roles and responsibilities:

- SOC Analyst (L1): anything detected passes through these analysts first, they are first responders to any detection. They perform basic triage and report detections.
- SOC Analyst (L2): help L1 analysts dive deeper into investigations.
- SOC Analyst (L3): experienced professionals who look proactively for threat indicators.
- Security Engineer: deploy and configure security solutions to ensure their smooth operation.
- Detection Engineer: security rules are built behind solutions, sometimes a detection engineer is an independent role.
- SOC Manager: manages process the team follows and stays in contact with the CISO to provide updates.

# Process

Alert triage is the basis of SOC and is all about the 5 W's:

- Who
- What
- Where
- When
- Why

<br/>For example: malware is detected on host: george-pc.

<table>
  <tr>
    <th>5 Ws</th>
    <th>Answers</th>
  </tr>
  <tr>
    <td>What</td>
    <td>A malicious file was detected</td>
  </tr>
  <tr>
    <td>When</td>
    <td>Detected on June 4th 2025</td>
  </tr>
  <tr>
    <td>Where</td>
    <td>Detected on host george-pc</td>
  </tr>
  <tr>
    <td>Who</td>
    <td>Detected for user george</td>
  </tr>
  <tr>
    <td>Why</td>
    <td>File was downloaded by user from pirate software site</td>
  </tr>
</table>

Harmful alerts need to be escalated to higher-level analysts for resolution, reports should include all 5 Ws and contain analysis.

# Technology

- SIEM: Security Information and Event Management, collects logs from various log sources. Detection rules are used to identify suspicious activity. Modern tools provide behaviour analytics and threat intelligence.
- EDR: Endpoint Detection and Response provides the SOC with real-time and historical visibility of the device's activity.
- Firewall: network security device acting as a barrier between internal and external networks.
