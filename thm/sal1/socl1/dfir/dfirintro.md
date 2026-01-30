---
title: Introduction to Digital Forensics and Incident Response
layout: notes
---

# The Need for DFIR

DFIR helps in various ways:

- Finding evidence of attacker activity in networks
- Robustly removing an attacker
- Identifying the extent and timeframe of a breach
- Finding loopholes that led to a breach
- Understanding attacker behaviour to pre-emptively block further attempts
- Sharing info about attackers with the community

# Basic Concepts

- Artifacts: pieces of evidence that point to activity performed on a system. This is an essential part, artifacts can be collect form the endpoint or servers file system, memory or network activity.
- Evidence Preservation: maintaining the integrity of evidence being collected, evidence is collected and write-protected, a copy of this is then used for analysis.
- Chain of Custody: ensure evidence is kept in secure custody, anyone outside the investigation should not possess evidence.
- Order of Volatility: digital evidence is often volatile like RAM. Important to understand the volatility of different sources to capture accordingly.
- Timeline Creation: establishing a timeline of events for accurate analysis.

# The Incident Response Process

[NIST](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-61r2.pdf) and [SANS](https://www.sans.org/white-papers/33901/) have published incident handling guidelines. The steps both include are:

1. Preparation: prepare before anything occurs, make sure you have the correct processes and people.
2. Identification: indicators are analysed for false positives, documented and communicated.
3. Containment: incident is contained and efforts are made to limit its effects.
4. Eradication: the threat is eradicated from the network, a proper forensic analysis should be performed before eradication.
5. Recovery: restoring affected services.
Lessons Learned: a review of the incident is performed and documented.
