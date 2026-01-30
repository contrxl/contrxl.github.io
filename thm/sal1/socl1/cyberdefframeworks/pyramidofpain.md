---
title: Pyramid of Pain
layout: notes
---

# Hash Values (Trivial)

A hash is the result of a hashing algorithm, the most common are:

- MD5 (Message Digest): 128-bit hash value. Not cryptographically secure.
- SHA-1 (Secure Hash Algorithm 1): 160-bit hash value as 40 digit hexadecimal number. Deprecated in 2011.
- SHA-2 (Secure Hash Algorithm 2): Many variants, SHA-256 returns 256-bits as 64 digit hexadecimal number.

<br/>Various online tools can be used to look up hash values:

- [VirusTotal](https://www.virustotal.com/gui/)
- [Metadefender Cloud - OPSWAT](https://metadefender.opswat.com/?lang=en)

# IP Address (Easy)

Knowledge of IP addresses an attacker is using can be valuable. Common tactics are to block, drop or deny inbound requests on your firewall. It is trivial for attackers to to recover by using new IP addresses.

# Domain Names (Simple)

Domain names are a bit harder to change, as the attacker needs to purchase the new domain, register it and modify the DNS. Sadly, many DNS providers have low standards and make it easy for attackers to domain swap.

# Host Artifacts (Annoying)

At this level, the attacker will need to circle back and change their attack tools and methodologies. Host artifacts are traces or observables left behind on the system like registry values, suspicious processes, attack patterns or IOCs.

# Network Artifacts (Annoying)

Network artifacts can be user-agent strings, C2 info, or URI patterns followed by POST requests. Network artifacts can be seen in WireShark PCAPs or by using protocol analysers. If these can be detected, attackers must go back and change or modify tools.

# Tools (Challenging)

If tools can be detected, attackers must invest time and potentially money into constructing new tools that serve the same purpose. AV Signatures, detection rules and YARA rules are great at this stage.

# TTPs (Tough)

If TTPs can be detected and responded to quickly - attackers have no change. If you can detect an attack from the very beginning, you can isolate and stop it right away, meaning the attacker has to go back and try again, or find another target.