---
title: notes
layout: page
permalink: /notes
---

# TryHackMe SAL1 Notes

<details>
<summary>Pre-Security</summary>

<details>
<summary>Introduction to Cybersecurity</summary>
{% assign sal1_docs = site.pages | where_exp: "page", "page.path contains 'thm/sal1/presecurity/introtocybersec'" | sort: "path" %}
{% if sal1_docs.size > 0 %}
<ol>
{% for page in sal1_docs %}
  <li><a href="{{ page.url }}">{{ page.title | default: page.name }}</a></li>
{% endfor %}
</ol>
{% endif %}
</details>

<details>
<summary>Network Fundamentals</summary>
{% assign sal1_docs = site.pages | where_exp: "page", "page.path contains 'thm/sal1/presecurity/networkfundamentals'" | sort: "path" %}
{% if sal1_docs.size > 0 %}
<ol>
{% for page in sal1_docs %}
  <li><a href="{{ page.url }}">{{ page.title | default: page.name }}</a></li>
{% endfor %}
</ol>
{% endif %}
</details>

<details>
<summary>How the Web Works</summary>
{% assign sal1_docs = site.pages | where_exp: "page", "page.path contains 'thm/sal1/presecurity/howthewebworks'" | sort: "path" %}
{% if sal1_docs.size > 0 %}
<ol>
{% for page in sal1_docs %}
  <li><a href="{{ page.url }}">{{ page.title | default: page.name }}</a></li>
{% endfor %}
</ol>
{% endif %}
</details>

<details>
<summary>Linux Fundamentals</summary>
{% assign sal1_docs = site.pages | where_exp: "page", "page.path contains 'thm/sal1/presecurity/linuxfundamentals'" | sort: "path" %}
{% if sal1_docs.size > 0 %}
<ol>
{% for page in sal1_docs %}
  <li><a href="{{ page.url }}">{{ page.title | default: page.name }}</a></li>
{% endfor %}
</ol>
{% endif %}
</details>

<details>
<summary>Windows Fundamentals</summary>
{% assign sal1_docs = site.pages | where_exp: "page", "page.path contains 'thm/sal1/presecurity/windowsfundamentals'" | sort: "path" %}
{% if sal1_docs.size > 0 %}
<ol>
{% for page in sal1_docs %}
  <li><a href="{{ page.url }}">{{ page.title | default: page.name }}</a></li>
{% endfor %}
</ol>
{% endif %}
</details>

</details>

<details>
<summary>Cybersecurity 101</summary>

<details>
<summary>AD Fundamentals</summary>
{% assign sal1_docs = site.pages | where_exp: "page", "page.path contains 'thm/sal1/cybersec101/adfundamentals'" | sort: "path" %}
{% if sal1_docs.size > 0 %}
<ol>
{% for page in sal1_docs %}
  <li><a href="{{ page.url }}">{{ page.title | default: page.name }}</a></li>
{% endfor %}
</ol>
{% endif %}
</details>

<details>
<summary>Command Line</summary>
{% assign sal1_docs = site.pages | where_exp: "page", "page.path contains 'thm/sal1/cybersec101/commandline'" | sort: "path" %}
{% if sal1_docs.size > 0 %}
<ol>
{% for page in sal1_docs %}
  <li><a href="{{ page.url }}">{{ page.title | default: page.name }}</a></li>
{% endfor %}
</ol>
{% endif %}
</details>

<details>
<summary>Networking</summary>
{% assign sal1_docs = site.pages | where_exp: "page", "page.path contains 'thm/sal1/cybersec101/networking'" | sort: "path" %}
{% if sal1_docs.size > 0 %}
<ol>
{% for page in sal1_docs %}
  <li><a href="{{ page.url }}">{{ page.title | default: page.name }}</a></li>
{% endfor %}
</ol>
{% endif %}
</details>

<details>
<summary>Cryptography</summary>
{% assign sal1_docs = site.pages | where_exp: "page", "page.path contains 'thm/sal1/cybersec101/cryptography'" | sort: "path" %}
{% if sal1_docs.size > 0 %}
<ol>
{% for page in sal1_docs %}
  <li><a href="{{ page.url }}">{{ page.title | default: page.name }}</a></li>
{% endfor %}
</ol>
{% endif %}
</details>

<details>
<summary>Exploitation Basics</summary>
{% assign sal1_docs = site.pages | where_exp: "page", "page.path contains 'thm/sal1/cybersec101/exploitbasics'" | sort: "path" %}
{% if sal1_docs.size > 0 %}
<ol>
{% for page in sal1_docs %}
  <li><a href="{{ page.url }}">{{ page.title | default: page.name }}</a></li>
{% endfor %}
</ol>
{% endif %}
</details>

<details>
<summary>Web Hacking</summary>
{% assign sal1_docs = site.pages | where_exp: "page", "page.path contains 'thm/sal1/cybersec101/webhacking'" | sort: "path" %}
{% if sal1_docs.size > 0 %}
<ol>
{% for page in sal1_docs %}
  <li><a href="{{ page.url }}">{{ page.title | default: page.name }}</a></li>
{% endfor %}
</ol>
{% endif %}
</details>

<details>
<summary>Offensive Security Tooling</summary>
{% assign sal1_docs = site.pages | where_exp: "page", "page.path contains 'thm/sal1/cybersec101/offsectooling'" | sort: "path" %}
{% if sal1_docs.size > 0 %}
<ol>
{% for page in sal1_docs %}
  <li><a href="{{ page.url }}">{{ page.title | default: page.name }}</a></li>
{% endfor %}
</ol>
{% endif %}
</details>

<details>
<summary>Defensive Security</summary>
{% assign sal1_docs = site.pages | where_exp: "page", "page.path contains 'thm/sal1/cybersec101/defsec'" | sort: "path" %}
{% if sal1_docs.size > 0 %}
<ol>
{% for page in sal1_docs %}
  <li><a href="{{ page.url }}">{{ page.title | default: page.name }}</a></li>
{% endfor %}
</ol>
{% endif %}
</details>

<details>
<summary>Security Solutions</summary>
{% assign sal1_docs = site.pages | where_exp: "page", "page.path contains 'thm/sal1/cybersec101/secsolutions'" | sort: "path" %}
{% if sal1_docs.size > 0 %}
<ol>
{% for page in sal1_docs %}
  <li><a href="{{ page.url }}">{{ page.title | default: page.name }}</a></li>
{% endfor %}
</ol>
{% endif %}
</details>

<details>
<summary>Defensive Security Tooling</summary>
{% assign sal1_docs = site.pages | where_exp: "page", "page.path contains 'thm/sal1/cybersec101/defsectooling'" | sort: "path" %}
{% if sal1_docs.size > 0 %}
<ol>
{% for page in sal1_docs %}
  <li><a href="{{ page.url }}">{{ page.title | default: page.name }}</a></li>
{% endfor %}
</ol>
{% endif %}
</details>

</details>

<details>
<summary>SOC Level 1</summary>

<div class="gh-alert gh-alert-warning">
  <strong>⚠️ Warning</strong>
  <p>All content under this heading was written and created prior to an overhaul of the SAL1 exam that took place on November 5th 2025. Although still helpful, you should refer directly to TryHackMe's new SOC L1 path until such time that I update this.</p>
</div>

<details>
<summary>Cyber Defence Frameworks</summary>
{% assign sal1_docs = site.pages | where_exp: "page", "page.path contains 'thm/sal1/socl1/cyberdefframeworks'" | sort: "path" %}
{% if sal1_docs.size > 0 %}
<ol>
{% for page in sal1_docs %}
  <li><a href="{{ page.url }}">{{ page.title | default: page.name }}</a></li>
{% endfor %}
</ol>
{% endif %}
</details>

<details>
<summary>Cyber Threat Intelligence</summary>
{% assign sal1_docs = site.pages | where_exp: "page", "page.path contains 'thm/sal1/socl1/cyberthreatintel'" | sort: "path" %}
{% if sal1_docs.size > 0 %}
<ol>
{% for page in sal1_docs %}
  <li><a href="{{ page.url }}">{{ page.title | default: page.name }}</a></li>
{% endfor %}
</ol>
{% endif %}
</details>

<details>
<summary>Traffic Analysis Essentials</summary>
{% assign sal1_docs = site.pages | where_exp: "page", "page.path contains 'thm/sal1/socl1/trafficanalysisessentials'" | sort: "path" %}
{% if sal1_docs.size > 0 %}
<ol>
{% for page in sal1_docs %}
  <li><a href="{{ page.url }}">{{ page.title | default: page.name }}</a></li>
{% endfor %}
</ol>
{% endif %}
</details>

<details>
<summary>Endpoint Security Monitoring</summary>
{% assign sal1_docs = site.pages | where_exp: "page", "page.path contains 'thm/sal1/socl1/endpointsecmonitoring'" | sort: "path" %}
{% if sal1_docs.size > 0 %}
<ol>
{% for page in sal1_docs %}
  <li><a href="{{ page.url }}">{{ page.title | default: page.name }}</a></li>
{% endfor %}
</ol>
{% endif %}
</details>

<details>
<summary>Security Information and Event Management</summary>
{% assign sal1_docs = site.pages | where_exp: "page", "page.path contains 'thm/sal1/socl1/siem'" | sort: "path" %}
{% if sal1_docs.size > 0 %}
<ol>
{% for page in sal1_docs %}
  <li><a href="{{ page.url }}">{{ page.title | default: page.name }}</a></li>
{% endfor %}
</ol>
{% endif %}
</details>

<details>
<summary>Digital Forensics and Incident Response</summary>
{% assign sal1_docs = site.pages | where_exp: "page", "page.path contains 'thm/sal1/socl1/dfir'" | sort: "path" %}
{% if sal1_docs.size > 0 %}
<ol>
{% for page in sal1_docs %}
  <li><a href="{{ page.url }}">{{ page.title | default: page.name }}</a></li>
{% endfor %}
</ol>
{% endif %}
</details>

<details>
<summary>Phishing</summary>
{% assign sal1_docs = site.pages | where_exp: "page", "page.path contains 'thm/sal1/socl1/phishing'" | sort: "path" %}
{% if sal1_docs.size > 0 %}
<ol>
{% for page in sal1_docs %}
  <li><a href="{{ page.url }}">{{ page.title | default: page.name }}</a></li>
{% endfor %}
</ol>
{% endif %}
</details>

</details>

# TryHackMe PT1 Notes

<details>
<summary>Jr. Penetration Tester</summary>

<details>
<summary>Introduction to Pentesting</summary>
{% assign pt1_docs = site.pages | where_exp: "page", "page.path contains 'thm/pt1/jrpentester/introtopentesting'" | sort: "path" %}
{% if pt1_docs.size > 0 %}
<ol>
{% for page in pt1_docs %}
  <li><a href="{{ page.url }}">{{ page.title | default: page.name }}</a></li>
{% endfor %}
</ol>
{% endif %}
</details>

<details>
<summary>Introduction to Web Hacking</summary>
{% assign pt1_docs = site.pages | where_exp: "page", "page.path contains 'thm/pt1/jrpentester/introtowebhacking'" | sort: "path" %}
{% if pt1_docs.size > 0 %}
<ol>
{% for page in pt1_docs %}
  <li><a href="{{ page.url }}">{{ page.title | default: page.name }}</a></li>
{% endfor %}
</ol>
{% endif %}
</details>

<details>
<summary>Burp Suite</summary>
{% assign pt1_docs = site.pages | where_exp: "page", "page.path contains 'thm/pt1/jrpentester/burpsuite'" | sort: "path" %}
{% if pt1_docs.size > 0 %}
<ol>
{% for page in pt1_docs %}
  <li><a href="{{ page.url }}">{{ page.title | default: page.name }}</a></li>
{% endfor %}
</ol>
{% endif %}
</details>

<details>
<summary>Network Security</summary>
{% assign pt1_docs = site.pages | where_exp: "page", "page.path contains 'thm/pt1/jrpentester/networksecurity'" | sort: "path" %}
{% if pt1_docs.size > 0 %}
<ol>
{% for page in pt1_docs %}
  <li><a href="{{ page.url }}">{{ page.title | default: page.name }}</a></li>
{% endfor %}
</ol>
{% endif %}
</details>

<details>
<summary>Vulnerability Research</summary>
{% assign pt1_docs = site.pages | where_exp: "page", "page.path contains 'thm/pt1/jrpentester/vulnerabilityresearch'" | sort: "path" %}
{% if pt1_docs.size > 0 %}
<ol>
{% for page in pt1_docs %}
  <li><a href="{{ page.url }}">{{ page.title | default: page.name }}</a></li>
{% endfor %}
</ol>
{% endif %}
</details>

<details>
<summary>Privilege Escalation</summary>
{% assign pt1_docs = site.pages | where_exp: "page", "page.path contains 'thm/pt1/jrpentester/privilegeescalation'" | sort: "path" %}
{% if pt1_docs.size > 0 %}
<ol>
{% for page in pt1_docs %}
  <li><a href="{{ page.url }}">{{ page.title | default: page.name }}</a></li>
{% endfor %}
</ol>
{% endif %}
</details>

</details>

<details>
<summary>Web Fundamentals</summary>

<details>
<summary>Web Hacking Fundamentals</summary>
{% assign pt1_docs = site.pages | where_exp: "page", "page.path contains 'thm/pt1/webfundamentals/'" | sort: "path" %}
{% if pt1_docs.size > 0 %}
<ol>
{% for page in pt1_docs %}
  <li><a href="{{ page.url }}">{{ page.title | default: page.name }}</a></li>
{% endfor %}
</ol>
{% endif %}
</details>

</details>

<details>
<summary>Addtional Rooms</summary>

<details>
<summary>Active Directory</summary>
{% assign pt1_docs = site.pages | where_exp: "page", "page.path contains 'thm/pt1/additionalrooms/ad'" | sort: "path" %}
{% if pt1_docs.size > 0 %}
<ol>
{% for page in pt1_docs %}
  <li><a href="{{ page.url }}">{{ page.title | default: page.name }}</a></li>
{% endfor %}
</ol>
{% endif %}
</details>

<details>
<summary>Report Writing</summary>
{% assign pt1_docs = site.pages | where_exp: "page", "page.path contains 'thm/pt1/additionalrooms/reporting'" | sort: "path" %}
{% if pt1_docs.size > 0 %}
<ol>
{% for page in pt1_docs %}
  <li><a href="{{ page.url }}">{{ page.title | default: page.name }}</a></li>
{% endfor %}
</ol>
{% endif %}
</details>

</details>