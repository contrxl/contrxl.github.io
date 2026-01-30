---
title: Unified Kill Chain
layout: notes
---

The unified kill chain states that there are 18 phases to an attack:

1. Reconnaissance
2. Weaponization
3. Delivery
4. Social Engineering
5. Exploitation
6. Persistence
7. Defence Evasion
8. Command & Control
9. Pivoting
10. Discovery
11. Privilege Escalation
12. Execution
13. Credential Access
14. Lateral Movement
15. Collection
16. Exfiltration
17. Impact
18. Objectives

# Phase: In (Initial Foothold)

This series of phases accommodates for an attacker creating a form of persistence, the different phases of this section will be discussed below.

## Reconnaissance ([TA00043](https://attack.mitre.org/tactics/TA0043/))

Describes techniques an adversary employs to gather info related to their target, info gathered can include:

- Discovering systems and services running on the target.
- Finding contact lists or lists of employees that can be impersonated.
- Looking for potential credentials.
- Understanding network topology and other networked systems.

## Weaponization ([TA0001](https://attack.mitre.org/tactics/TA0001/))

The phase describes the attacker setting up necessary infrastructure for the attack.

## Social Engineering ([TA0001](https://attack.mitre.org/tactics/TA0001/))

This phase describes techniques that can be used to manipulate employees such as:

- Getting users to open malicious attachments
- Impersonating a web page to harvest credentials
- Calling or visiting the target impersonating another user

## Exploitation ([TA0002](https://attack.mitre.org/tactics/TA0002/))

This phase describes how an attacker takes advantage of weaknesses or vulnerabilities:

- Uploading and executing a reverse shell
- Interfering with an automated script to execute code
- Abusing a web application vulnerability to run code

## Persistence ([TA0003](https://attack.mitre.org/tactics/TA0003/))

This phase describes techniques used to maintain access to a system:

- Creating a service on the system
- Adding the target system to a C2 server
- Leaving backdoors which execute based on conditions

## Defence Evasion ([TA0005](https://attack.mitre.org/tactics/TA0005/))

Used to understand the techniques used to evade defensive measures put in place:

- WAFs
- Network Firewall
- AV Systems
- IDS

## Command and Control ([TA0011](https://attack.mitre.org/tactics/TA0011/))

Combines efforts from Weaponization stage to allow the attacker to establish communications between adversary and target. This can be used to:

- Execute commands
- Credential harvest
- Pivot

## Pivoting ([TA0008](https://attack.mitre.org/tactics/TA0008/))

Techniques used to reach other systems on a network which are not otherwise accessible.

# Phase: Through (Network Propagation)

This follows a successful foothold being established on the target, the attacker now seeks additional access and privilege.

## Pivoting ([TA0008](https://attack.mitre.org/tactics/TA0008/))

Techniques used to reach other systems on a network which are not otherwise accessible.

## Discovery ([TA0007](https://attack.mitre.org/tactics/TA0007/))

Adversary uncovers info about the system and network it is connected to.

## Privilege Escalation ([TA0004](https://attack.mitre.org/tactics/TA0004/))

Adversary would leverage discovered vulnerabilities to attempt to escalate to:

-SYSTEM/ROOT
-Local Administrator
-User account with admin-like access
-User account with access to specific desired functions

## Execution ([TA0002](https://attack.mitre.org/tactics/TA0002/))

Malicious code will be deployed using the pivot system as host.

## Credential Access ([TA0006](https://attack.mitre.org/tactics/TA0006/))

Adversary attempts to steal account names and passwords through various methods like keylogging and credential dumping.

## Lateral Movement ([TA0008](https://attack.mitre.org/tactics/TA0008/))

Adversary seeks to move through network and attach to other targeted systems.

# Phase: Out (Action on Objective)

This wraps up the attack and they are able to fulfil their goals.

## Collection ([TA0009](https://attack.mitre.org/tactics/TA0009/))

Attacker seeks to gather all valuable data of interest before moving to next stage.

## Exfiltration ([TA0010](https://attack.mitre.org/tactics/TA0010/))

Adversary seeks to steal data which they would package with encryption measures and compression.

## Impact ([TA0040](https://attack.mitre.org/tactics/TA0040/))

Attacker can manipulate, interrupt or destroy assets to disrupt business/operational processes.