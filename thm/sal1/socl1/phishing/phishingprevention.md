---
title: Phishing Prevention
layout: notes
---

# SPF

Sender Policy framework is used to authenticate the sender of an email. A basic SPF record looks like:

```
v=spf1 ip4:127.0.0.1 include:_spf.google.com -all
```
<br/>
- `v=spf1`: start of SPF record
- `ip4:127.0.0.1`: specifies which IP can send mail
- `include:_spf.google.com`: specifies which domain can send mail
- `-all`: non-authorised mail to be rejected

# DKIM

DomainKeys Identified Mail is used to authenticate an email that is being sent, DKIM is used for DMARC alignment. DKIM can survive forwarding unlike SPF. A DKIM record looks like:

```
v=DKIM1; k=rsa; p=[KEY]
```
<br/>
- `v=DKIM1`: version of DKIM record, optional
- `k=rsa`: key type, default is RSA
- `p=:` the public key to be used

# DMARC

Domain-based Message Authentication Reporting, and Conformance is a standard using a concept called alignment to tie the result of SPF and DKIM to the content of an email. A basic DMARC record looks like:

```
v=DMARC1; p=quarantine; rua=mailto:email@email.com
```

- `v=DMARC1`: must be in all caps, not optional
- `p=quarantine`: if a check fails, then email is sent to spam
- `rua=mailto:[email]`: aggregate reports will be sent here

# S/MIME

Secure/Multipurpose Internet Mail Extensions is a protocol for sending digitally signed and encrypted messages. The two main components of this are: Digital Signatures and Encryption. 