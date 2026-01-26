---
title: OWASP API Security Top 10
layout: notes
---

# Understanding APIs

An application programming interface is middleware which facilitates the communication of two software protocols. An application is any software with specific functionality, the interface is the service contract between the apps which makes communication possible.

# Broken Object Level Authorisation (BOLA)

BOLA refers to IDOR which creates a scenario where the user uses input functionality to access resources they are not authorised to access. The absence of controls to prevent this can lead to data leakage or complete account takeover. Mitigation measures:

- Authorisation mechanism that relies on user policies and hierarchies
- Strict access control methods to check if the logged-in user is authorised
- Promotion of completely random values for impossible to predict tokens

# Broken User Authentication (BUA)

This reflects a scenario where an API endpoint allows an attacker to access a database or acquire a privilege higher than their existing one. This is caused by invalid implementation of authentication, or an absence of security measures. BUA allows attackers to compromise authenticated sessions and access sensitive data. Mitigation measures:

- Complex passwords with high entropy
- Avoid exposing sensitive information in GET or POST requests
- Enable strong JWT, authorisation headers etc.
- Ensure MFA implemented, account lockouts, or CAPTCHA to prevent brute force
- Ensure passwords are not stored in plain text

# Excessive Data Exposure

Occurs when applications disclose more than desired information to a user via an API response. It is often left to the front-end developer to filter out the information from the API before it reaches the user. If the request is intercepted before its displayed, extra data could be seen. Mitigation measures:

- Never leave sensitive data filtration as a front-end task
- Ensure a review of API responses to ensure it returns only legitimate data
- Avoid using generic methods like to_string() and to_json()
- Use API endpoint testing to validate that no data is leaking

# Lack of Resources and Rate Limiting

A lack of resources and rate limiting means that APIs do not enforce any restriction on a clients requested resource or file size, leading to DoS. This attack primarily targets service availability, but can damage brands and cause financial losses. Mitigation measures:

- Ensure use of a CAPTCHA
- Ensure implementation of a limit on API calls
- Ensure the max data size is defined for all parameters

# Broken Function Level Authorisation

This reflects a scenario where a low privilege user bypasses system checks and gains access to confidential data by impersonating a high privilege user. An attacker abusing this could impersonate an authorised user or get administrative rights for themselves to perform sensitive tasks. Mitigation measures:

- Ensure proper design and testing of all authorisation systems, deny by default
- Make sure operations are only allowed to users belonging to authorised groups
- Make sure to review API endpoints against flaws
