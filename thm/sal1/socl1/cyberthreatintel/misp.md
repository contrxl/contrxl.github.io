---
title: MISP
layout: notes
---

# What is MISP?

The [Malware Information Sharing Platform](https://www.misp-project.org/) is an open-source CTI platform. Info sharing follows a distributed model with supported closed, semi-private and open communities. MISP is useful for:

- Malware Reverse Engineering
- Security Investigations
- Intelligence Analysis
- Law Enforcement
- Risk Analysis
- Fraud Analysis
    
<br/> MISP provides the following core functions:

- IOC Database
- Automatic Correlation
- Data Sharing
- Import & Export
- Event Graph
- API Support

<br/>The following terms are common within MISP:

- Events: collection of contextually linked info
- Attributes: individual data points associated with an event
- Objects: custom attribute compositions
- Object References: relationships between objects
- Sightings: time-specific occurrences of a given data point
- Tags: labels attached to events or attributes
- Taxonomies: classification libraries to tag, classify and organise info
- Galaxies: knowledge base items to label events/attributes
- Indicators: pieces of information to detect suspicious or malicious activity

# Using MISP

The MISP dashboard contains the following options:

- Home: return to start screen
- Event Actions: all malware data comprises an event object, event actions shows all functionality related to creation, modification, deletion, publishing, searching and listing of events/attributes.
- Dashboard: create custom dashboards
- Galaxies: shortcut to list of MISP galaxies
- Input Filters: alter how users enter data, regex or blocklists can be configured by admins
- Global Actions: access to MISP and instance info
- MISP: baseurl link
- Name: name of logged in user
- Envelope: link to user dashboard
- Log Out
