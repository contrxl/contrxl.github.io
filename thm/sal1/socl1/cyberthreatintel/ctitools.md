---
title: Threat Intelligence Tools
layout: notes
---

# [UrlScan.io](https://urlscan.io/)

A free service to assist in scanning and analysing websites. Site provides a view of recent scans, and current live scans. Scan results provide lots of key info:

- Summary: general info about the URL including identified IP address and domain registration details.
- HTTP: provides info on HTTP connections made to the site with details about data fetched.
- Redirects: shows info on any identified HTTP redirects.
- Links: shows all outgoing links.
- Behaviour: provides details of variables and cookies.
- Indicators: all IPs, domains and hashes associated with the site.

# [Abuse.ch](https://abuse.ch/)

A research project hosted by the Institute for Cybersecurity and Engineering at the Bern University of Applied Sciences. There are several platforms under this project:

- [MalwareBazaar](https://bazaar.abuse.ch/): all in one malware collection and analysis DB, project allows for malware sample uploads and malware hunting.
- [FeodoTracker](https://feodotracker.abuse.ch/): C2 server intelligence sharing for servers associated with Dridex, Emotes, TrickBot, QakBot and BazarLoader.
- [SSL Blacklist](https://sslbl.abuse.ch/): tool to identify and detect malicious SSL connections.
- [URLHaus](https://urlhaus.abuse.ch/): focuses on sharing malicious URLs for malware distribution.
- [ThreatFox](https://threatfox.abuse.ch/): allows searching and export of IoCs associated with malware.

# [PhishTool](https://www.phishtool.com/)

Seeks to elevate the perception of phishing as a severe attack and provide a responsive means of mail security. The core features are:

- Email analysis: retrieve metadata from phishing emails to allow for triage.
- Heuristic intelligence: OSINT baked in to provide the intelligence needed to stay ahead
- Classification and reporting: classifications allow analysts to take quick action
- The enterprise version also includes:
- User-reported phishing event management
- Report phishing findings back to users
- Email stack integration with M365

<br/>Once a file is uploaded, you are presented with more email details for a more in-depth look:

- Headers: provides routing information like source and destination, originating IP and DNS records
- Received Lines: details on mail traversal across SMTP servers for tracing purposes
- X-Headers: extension headers added by recipient mailbox
- Security: detail on email security frameworks and policies
- Attachments: lists any attachments found
- Message URLs: associated external URLs found

# [Cisco Talos Intelligence](https://talosintelligence.com/)

Cisco Talos covers six key teams:

1. Threat Intelligence and Interdiction: correlation and threat tracking
2. Detection Research: vulnerability and malware analysis
3. Engineering and Development: provides maintenance support for inspection engines
4. Vulnerability research and discovery: working with service and software vendors
5. Communities: maintains image of team and open-source solutions
6. Global Outreach: disseminates intelligence to customers
