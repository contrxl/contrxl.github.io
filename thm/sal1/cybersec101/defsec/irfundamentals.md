---
title: Incident Response Fundamentals
layout: notes
---

# Types of Incidents

- Malware Infection: malware can damage a system, network or application. Most incidents are associated with malware infections.
- Security Breaches: when an unauthorised user gets access to confidential data.
- Data Leaks: confidential information is exposed to unauthorised entities - can be caused by human error.
- Insider Attacks: incidents like disgruntled employees trying to infect a network on their last day.
- DoS: incidents where a network/system/app is flooded with false requests.

# Incident Response Process

<table>
  <tr>
    <th>Phase</th>
    <th>Explanation</th>
    <th>Example</th>
  </tr>
  <tr>
    <td>Preparation</td>
    <td>First phase, includes building resources to handle an incident like a response team, response plan and security solutions.</td>
    <td>Conducting awareness training for employees.</td>
  </tr>
  <tr>
    <td>Identification</td>
    <td>Looking for abnormal behaviour that could indicate an incident.</td>
    <td>Security team notices a huge amount of info being sent from a host.</td>
  </tr>
  <tr>
    <td>Containment</td>
    <td>Contain an incident to minimise impact of an attack.</td>
    <td>Security team isolates a host from the network.</td>
  </tr>
  <tr>
    <td>Eradication</td>
    <td>Remove the threat from the attacked environment.</td>
    <td>Deep malware scan used to remove malicious software.</td>
  </tr>
  <tr>
    <td>Recovery</td>
    <td>Recover affected systems from backup or rebuild them.</td>
    <td>Compromised host is reconfigured.</td>
  </tr>
  <tr>
    <td>Lessons Learned</td>
    <td>Gaps in process identified and documented.</td>
    <td>Conducting a post incident review meeting.</td>
  </tr>
</table>

# Incident Response Techniques

- SIEM: collects import logs in a centralised location.
- AV: detects known malicious programs by regularly scanning your system.
- EDR: protects against advanced threats, can contain and eradicate threats.
    
<br/>Instructions called playbooks should be followed for comprehensive incident response, an example of a playbook would be:

1. Notify stakeholders of incident
2. Determine if email was malicious via analysis
3. Look for attachments with email and analyse
4. Determine if attachments were opened
5. Isolate systems
6. Block sender