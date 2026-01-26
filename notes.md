---
title: notes
layout: page
permalink: /notes
---

# TryHackMe PT1 Notes

<details open>
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

<details open>
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

<details open>
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