---
title: notes
layout: page
permalink: /notes
---

# TryHackMe SAL1 Notes

{% for section in site.data.notes.sal1 %}
<details>
<summary>{{ section.name }}</summary>
{% if section.note %}
{{ section.note }}
{% endif %}
{% for subsection in section.subsections %}
<details>
<summary>{{ subsection.name }}</summary>
{% assign docs = site.pages | where_exp: "page", "page.path contains subsection.path" | sort: "path" %}
{% if docs.size > 0 %}
<ol>
{% for page in docs %}
  <li><a href="{{ page.url }}">{{ page.title | default: page.name }}</a></li>
{% endfor %}
</ol>
{% endif %}
</details>
{% endfor %}
</details>
{% endfor %}

# TryHackMe PT1 Notes

{% for section in site.data.notes.pt1 %}
<details>
<summary>{{ section.name }}</summary>
{% for subsection in section.subsections %}
<details>
<summary>{{ subsection.name }}</summary>
{% assign docs = site.pages | where_exp: "page", "page.path contains subsection.path" | sort: "path" %}
{% if docs.size > 0 %}
<ol>
{% for page in docs %}
  <li><a href="{{ page.url }}">{{ page.title | default: page.name }}</a></li>
{% endfor %}
</ol>
{% endif %}
</details>
{% endfor %}
</details>
{% endfor %}

# TryHackMe Other Rooms/Challenges

{% for section in site.data.notes.other %}
<details>
<summary>{{ section.name }}</summary>
{% for subsection in section.subsections %}
<details>
<summary>{{ subsection.name }}</summary>
{% assign docs = site.pages | where_exp: "page", "page.path contains subsection.path" | sort: "path" %}
{% if docs.size > 0 %}
<ol>
{% for page in docs %}
  <li><a href="{{ page.url }}">{{ page.title | default: page.name }}</a></li>
{% endfor %}
</ol>
{% endif %}
</details>
{% endfor %}
</details>
{% endfor %}