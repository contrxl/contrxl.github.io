---
title: Vulnerability Scanner Overview
layout: notes
---

# Authenticated vs Unauthenticated Scans

<table>
  <tr>
    <th>Autenticated</th>
    <th>Unauthenticated</th>
  </tr>
  <tr>
    <td>Credentials must be given to scanner</td>
    <td>Does not require credentials, only IP address</td>
  </tr>
  <tr>
    <td>Identifies vulnerabilities attackers have</td>
    <td>Identifies vulnerabilities that can be exploited without access</td>
  </tr>
  <tr>
    <td>Provides deeper visibility into target</td>
    <td>Less resource intensive and more straight forward</td>
  </tr>
</table>

# Internal vs External Scans

<table>
  <tr>
    <th>Internal Scans</th>
    <th>External Scans</th>
  </tr>
  <tr>
    <td>Conducted inside the network</td>
    <td>Conducted from outside the network</td>
  </tr>
  <tr>
    <td>Focuses on vulnerabilities that can be exploited inside network</td>
    <td>Focuses on vulnerabilities that can be exploited outside network</td>
  </tr>
  <tr>
    <td>Identifies vulnerabilities exposed to attackers inside network</td>
    <td>Identifies vulnerabilities exposed to attackers outside network</td>
  </tr>
</table>
 	
# Vulnerability Scanning Tools

- Nessus: initially built as open-source software, then became proprietary after purchase by Tenable. Has extensive options and is widely used, has a free and paid version.
- Qualys: subscription based vulnerability management solution. Provides compliance checks and asset management - purely cloud based.
- Nexpose: built by Rapid7, continuously discovers new assets in network and performs scans on them, provides risk scores depending on asset value and vulnerability impact.
- OpenVAS: open-source tool with basic systems, useful for small organisations and individual systems.

# CVE & CVSS
## CVE

Common Vulnerabilities and Exposures are unique numbers for each vulnerability. Developed by MITRE, CVE numbers follow the format of: CVE-{YEAR}-{ARBITRARY DIGITS}.

## CVSS

Common Vulnerability Scoring System is a system to provide a vulnerability with a severity score. The severity per score varies:

<table>
  <tr>
    <th>CVSS Score Range</th>
    <th>Severity</th>
  </tr>
  <tr>
    <td>0.0-3.9</td>
    <td>Low</td>
  </tr>
  <tr>
    <td>4.0-6.9</td>
    <td>Medium</td>
  </tr>
  <tr>
    <td>7.0-8.9</td>
    <td>High</td>
  </tr>
  <tr>
    <td>9.0-10</td>
    <td>Critical</td>
  </tr>
</table>