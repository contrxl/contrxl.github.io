---
title: Defensive Security Introduction
layout: notes
---

Defensive security is concerned with two main tasks:

1. Preventing intrusions from occurring
2. Detecting intrusions which do occur and responding properly

Some tasks related to defensive security include:

- User cyber security awareness: training users about cyber security helps protect against attacks.
- Documenting and managing assets: we need to know systems and devices which must be protected.
- Updating and patching systems: ensuring computers, servers and network devices are correctly updated and patched against any known vulnerability.
- Setting up preventative security devices: firewall and IPS are critical components.
- Setting up logging and monitoring devices: proper logging and monitoring are essential for detecting malicious activity and intrusions.

# Areas of Defensive Security
## Security Operations Center (SOC)

A SOC is a team of cyber security professionals who monitor the network and systems, the main areas of interest for a SOC are:

- Vulnerabilities: when a vulnerability is discovered, it is essential to fix it by installing a proper update or patch. Remediating vulnerabilities is vital to a SOC but is not always assigned to them.
- Policy violations: security policy is a set of rules to protect the network and systems.
- Unauthorised activity: SOC must detect and block any potential unauthorised activity.
- Network intrusions: when an intrusion occurs, it must be detected ASAP to avoid futher damage.

## Threat Intelligence

Purpose is to achieve a threat informed defence, different companies have different adversaries. Intelligence needs data, data is collected from local sources like network logs or public sources like forums. Data processing then arranges this into a format suitable for analysis.

# Digital Forensics and Incident Response (DFIR)
## Digital Forensics

Focus is to analyse evidence of an attack and its perpetrators. Digital forensics focuses on:

- File System: analysing a forensics image of a system's storage will reveal lots of information.
- System Memory: if attacker runs their program without saving it to disk, taking a copy of the system memory is the best way to analyse its contents.
- System Logs: each client and server computer maintains different log files about what is happening, some traces will always remain here.
- Network Logs: logs of network packets can help answer questions about an attack.

## Incident Response

The four major phases of incident response are:

1. Preparation: requires a ready and trained team to handle incidents.
2. Detection and Analysis: team has necessary resources to detect any incident, essential to analyse any detected incident to learn its severity.
3. Containment, Eradication and Recovery: it is crucial to ensure an incident does not affect other systems, eliminate the cause and recover any affected systems.
4. Post-Incident Activity: after successful recovery, a report is produced and lessons learned are shared.

# Malware Analysis

There are many types of malware:

- Virus: attaches itself to a program and is designed to spread from one computer to another.
- Trojan: program which shows a desirable function but hides a malicious one underneath.
- Ransomware: encrypts the victims files, making them unreadable.

Malware analysis aims to learn about these programs via various methods:

1. Static Analysis: inspect malicious program without running it - usually requires solid knowledge of assembly language.
2. Dynamic Analysis: running the malware in a controlled environment and monitoring its activities.