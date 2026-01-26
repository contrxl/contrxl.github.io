---
title: Writing Pentest Reports
layout: notes
---

# The Anatomy of a Pentest Report

A report aims to address different audiences:

- Technical Stakeholders: aid the technical team in the root cause of vulnerabilities, and steps to remediate them. 70-90% of the report is aimed at this audience.
- Security Stakeholders: not directly responsible for remediation but working closely with those who are. Sections will provide guidance to help them prioritise remediation effort. At least 10-20% of the report will be directed here.
- Business Stakeholders: business-driven staff, at least 5-10% of the report should be abstracted to report to these users.

<br/>There are three main sections required in a report:

- Summary (for Business & Security Stakeholders): high-level view. Explains what was tested, what was found, and why it matters. Sometimes you will have an executive summary for the business stakeholders, then a more detailed findings and recommendation section for security stakeholders.
- Vulnerability Write-ups (for Technical Stakeholders): each issue gets its own writeup, including details, reproduction and remediation.
- Appendices (for Security Stakeholders): provide supporting details which don't fit the main report, this could include elements like scope, methodology and leftover artefacts.

## The Summary

- What did we test?
- What did we find?
- What does it mean for the business?
- What should we do next?

<br/>The summary should always be written last and may be broken into two parts:

1. Executive Summary: for business stakeholders, avoids technical jargon and focuses on business risks, highlights overall security posture.
2. Findings and Recommendations: for the security team, details common themes and attack chains, provides risk ratings.
    
<br/>A good summary will cover:

- Overview: what was tested, what type of system was it, what were the goals, what was the scope
- Results: what was uncovered, was the system secure, what issues were found
- Impact: what is the real world impact, how could this be exploited by a real threat actor
- Remediation Direction: what next, does it require investment

## Vulnerability Write Ups

A format that always works well:

- Title: Short, descriptive heading ("Unauthenticated SQL Injection in Login Form")
- Risk Rating: always rate in isolation, client matrix to be used or a public one like CVSS
- Summary: plain explanation of the vulnerability and its impact
- Background: context on why it matters, developers may not be security experts
- Technical Details: where and how it was found, requests, responses, payloads, screenshots and code snippets
- Impact: what an attacker can do with this vulnerability, contextualise with the system
- Remediation Advice: clear, actionable steps to resolve, it should address the vulnerability at its core
- References: links to any vendor documentation that support the fix

## Appendices

There are two main appendices which should always be included:

1. Assessment Scope: used to establish how close the assessment was to what was originally scoped within the RoE document. The assessment scope can help stakeholders determine how much of the scope was able to be covered.
2. Assessment Artefacts: a list of any changes that were made during testing. Sometimes it is not possible to clear all artefacts yourself.
