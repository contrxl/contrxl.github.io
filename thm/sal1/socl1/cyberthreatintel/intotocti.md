---
title: Introduction to Cyber Threat Intelligence
layout: notes
---

# CTI

Evidence-based knowledge about adversaries that can be utilised to protect critical assets. The distinction here between "data", "information" and "intelligence" is:

- Data: discrete indicators associated with an adversary like hashes or IPs
- Information: combination of multiple data points that answer questions
- Intelligence: the correlation of data and information to extract patterns

<br/>The goal of CTI is to understand the relationship between your environment and your adversary. The following questions should be considered:

- Who is attacking you?
- What are their motivations?
- What are their capabilities?
- What artefacts and IOCs should be sought out?

<br/>Intelligence can be gathered from multiple sources:

- Internal: corporate security events, cyber awareness training reports, system logs and events.
- Community: open forums and darknet communities for cybercriminals.
- External: threat intel feeds, online marketplaces and public sources.

# Threat Intel Classifications

- Strategic Intel: high-level intel looking into threat landscape and mapping out risk areas based on trends.
- Technical Intel: looks into evidence and artefacts of attack, can be used to create a baseline attack surface.
- Tactical intel: assesses TTPs to strengthen security controls and address vulnerabilities.
- Operational Intel: looks into adversaries motives and intent, used to understand critical assets that may be targeted.

# CTI Lifecycle
## Direction

Define objectives and goals, identify the following:

- Information assets and business processes to defend
- Potential impact to be experienced on losing the assets or through process interruption
- Sources of data and intel to be used
- Tools and resources needed to defend the assets

## Collection

Gather the required data to address objectives, use of private or open-source resources. Useful to automate this phase.

## Processing

Extract, sort, organise and correlate collected information with appropriate tags. SIEMs are valuable tools for this.

## Analysis

- Investigate any potential threat found through uncovering indicators and attack patterns
- Define action plan to avert an attack and defend the infrastructure
- Strengthen security controls

## Dissemination

Inform relevant parties with appropriate reports.

## Feedback

Take feedback and regular interaction from stakeholders on report formats and content.

# CTI Standards and Frameworks

- [MITRE ATT&CK](https://attack.mitre.org/)
- [TAXII](https://oasis-open.github.io/cti-documentation/taxii/intro): Trusted Automated eXchange of Indicator Information. Defines protocols for secure sharing of threat intel, supports collection and channel modes.
- [STIX](https://oasis-open.github.io/cti-documentation/stix/intro): Structured Threat Information Expression. A language developed for specification of standardised CTI, provides relationships between sets of threat info.
- Cyber Kill Chain
- The Diamond Model
