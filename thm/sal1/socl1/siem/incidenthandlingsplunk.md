---
title: Incident Handling with Splunk
layout: notes
---

# Incident Handling Life Cycle

1. Preparation: covers readiness of an organisation against attack. Means documenting requirements, defining policies and incorporating.
2. Detection and Analysis: covers everything related to detecting an incident and then analysing it. Includes receiving alerts from security controls like SIEM/EDR. Also covers hunting for threats within the organisation.
3. Containment, Eradication and Recovery: covers actions needed to prevent the incident from spreading and securing the network.
4. Post-Incident Activity/Lessons Learned: identify loopholes in security posture and improve so that it cannot happen again.

# Common Log Sources

- `wineventlog`: Windows Event Logs
- `winRegistry`: Logs related to registry modifications
- `xmlWinEventLog`: Sysmon event logs
- `fortigate_utm`: Fortinet firewall logs
- `iis`: IIS web server logs
- `Nessus:scan`: Results from Nessus vulnerability scanner
- `Suricata`: contains details of the alerts from Suricata IDS
- `stream`:http: HTTP traffic
- `stream`:DNS: DNS traffic
- `stream`:icmp: ICMP traffic
