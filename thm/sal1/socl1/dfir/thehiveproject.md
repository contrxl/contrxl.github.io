---
title: TheHive Project
layout: notes
---

# Introduction

TheHive Project is open-source, scalable and freely available Security Incident Response platform. More info can be found [here](https://thehive-project.org/) or on [GitHub](https://thehive-project.org/). The project operates under the guide of three main functions:

1. Collaborate: multiple analysts can work simultaneously
2. Elaborate: investigations correspond to cases and details can be broken down into tasks
3. Act: allows analysts to add observables to their cases, leveraging tags, flagging IOCs etc

# Features & Integration

- Case/Task Management: every investigation corresponds to a created cast to allow analysts to record their progress.
- Alert Triage: cases can be imported from SIEM alerts, email reports and other sources.
- Observable Enrichment with Cortex: supports Cortex which is an observable analysis and active response engine.
- Active Response: allows attackers to use Responders and run active actions.
- Custom Dashboards: stats on cases, tasks and more can be compiled and distributed.
- Built in MISP Integration: built in integration with MISP to allow storing and correlating different IOCs

# User Profiles and Permissions

There are four pre-configured profiles:

1. admin: full permissions but can't manage cases or data related to investigations
2. org-admin: manage users and all org-level configs, can create and edit cases, tasks etc.
3. analyst: can create and edit cases, tasks etc.
4. read-only: can only red data
    
<br/>The full list of configurable permissions are:

<table>
  <tr>
    <th>Permission</th>
    <th>Function</th>
  </tr>
  <tr>
    <td>manageOrganisation(1)</td>
    <td>Create and update an organisation</td>
  </tr>
  <tr>
    <td>manageConfig(1)</td>
    <td>Update config</td>
  </tr>
  <tr>
    <td>manageProfile(1)</td>
    <td>Create, update and delete profiles</td>
  </tr>
  <tr>
    <td>manageTag(1)</td>
    <td>Create, update and delete tags</td>
  </tr>
  <tr>
    <td>manageCustomField(1)</td>
    <td>Create, update and delete custom fields</td>
  </tr>
  <tr>
    <td>manageCase</td>
    <td>Create, update and delete cases</td>
  </tr>
  <tr>
    <td>manageObservable</td>
    <td>Create, update and delete observables</td>
  </tr>
  <tr>
    <td>manageAlert</td>
    <td>Create, update and import alerts</td>
  </tr>
  <tr>
    <td>manageUser</td>
    <td>Create, update and delete users</td>
  </tr>
  <tr>
    <td>manageCaseTemplate</td>
    <td>Create, update and delete case templates</td>
  </tr>
  <tr>
    <td>manageTask</td>
    <td>Create, update and delete tasks</td>
  </tr>
  <tr>
    <td>manageShare</td>
    <td>Share case, task and observable with other orgs</td>
  </tr>
  <tr>
    <td>manageAnalyse(2)</td>
    <td>Execute analyse</td>
  </tr>
  <tr>
    <td>manageAction(2)</td>
    <td>Execute action</td>
  </tr>
  <tr>
    <td>manageAnalyserTemplate(2)</td>
    <td>Create, update and delete analyser templates</td>
  </tr>
</table>

Permissions marked with "(1)" are global objects, while permissions with "(2)" are available only if Cortex is enabled.