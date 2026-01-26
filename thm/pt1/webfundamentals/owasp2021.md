---
title: OWASP Top 10 2021
layout: notes
---

# Broken Access Control

Broken access control allows attackers to bypass authorisation, allowing sensitive data to be viewed, or unauthorised tasks to be performed.

# Cryptographic Failure

This is any vulnerability arising from misuse of cryptographic algorithms. These often end with web apps accidentally divulging sensitive data, this can be data directly linked to customers or more technical information.
Injection

These occur when an app interprets user controlled input as commands or parameters, some common examples are:

- SQL Injection: when user controlled input is passed into SQL queries, allowing attackers to access, modify or delete information.
- Command Injection: when user input is passed to system commands.

<br/>The main ways to defend against injection attacks are:

- Allow listing: input compared to list of safe inputs/characters, if it is marked safe, it proceeds, otherwise it is rejected.
- Stripping input: dangerous characters are stripped from input before processing.

# Insecure Design

These are vulnerabilities inherent to the applications architecture. These occur when improper threat modelling is made during planning phases which propagates up to the final app.

# Security Misconfiguration

These occur when security could have been appropriately configured, but was not. These include:

- Poorly configured permissions on cloud services
- Enabling unnecessary features
- Default accounts with default passwords
- Overly detailed error messages
- Missing HTTP security headers
- Exposing debugging features in production software

# Vulnerable and Outdated Components

Use of outdated or known vulnerable software can lead to breaches, software should always be kept up to date.

# Identification and Authentication Failures

If flaws can be found in authentication mechanisms, attackers could successfully gain access to users accounts. Some common flaws include:

- Brute force attacks: web app not rate limited could allow attackers to guess username/password.
- Weak credentials: without strong password policies, credentials could be guessed.
- Weak cookies: attackers could set their own cookies if they use predictable values.

# Software and Data Integrity Failures

This arises from code or infrastructure using software or data without any integrity checking. An attacker could then modify the software or data passed to the application, there are two types of vulnerability in this category:

1. Software Integrity Failures
2. Data Integrity Failures

# Security Logging and Monitoring Failures

If there is no logging, an attackers actions could go completely unnoticed, resulting in regulatory damage or risk of further attack. Logs should contain:

- HTTP Status Codes
- Time Stamps
- Usernames
- Endpoints/page locations
- IP addresses

# Server-Side Request Forgery (SSRF)

Occurs when an attacker can coerce a web app into sending requests on their behalf to arbitrary destinations. SSRF can be used to:

- Enumerate internal networks
- Abuse trust relationships
- Interact with non-HTTP services to get RCE
