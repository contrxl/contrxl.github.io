---
title: Wazuh
layout: notes
---

# Agents

Devices which record events and processes on a system are known as agents. Agents will offload logs to a collector like Wazuh for processing. New agents can be deployed using Wazuh -> Agents -> Deploy New Agent.

# Vulnerability Assessment & Security Events

The vulnerability assessment module can be used to periodically scan an agents OS for installed application versions. This info is sent to the Wazuh server and compared against a database of CVEs.

# Policy Auditing

Wazuh can audit and monitor an agent's configuration whilst proactively recording event logs. When the agent is installed, an audit is automatically performed against frameworks like NIST, MITRE and GDPR.

# Monitoring Logons

The security event monitor is capable of actively recording successful/unsuccessful authentication attempts. Logs are stored on the Wazuh management server at `/var/ossec/logs/alerts/alert.log`.

# Collecting Windows Logs

The Wazuh agent can aggregate events recorded by Sysmon for processing. The Wazuh agent an Sysmon must be configured for this.

# Collecting Linux Logs

Linux logs can be collected via Wazuh's log collector and sent directly to the management server. Rules can be configured for this in `/var/ossec/ruleset/rules`.

# Auditing Linux Commands

Wazuh uses auditd to monitor the system for certain actions and events. auditd rules are located at `/etc/audit/rules.d/audit.rules`.

# API

The API can be accessed directly via a web console under Wazuh -> Tools -> API Console.