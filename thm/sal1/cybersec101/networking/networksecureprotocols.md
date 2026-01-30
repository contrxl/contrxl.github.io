---
title: Networking Secure Protocols
layout: notes
---

# TLS

TLS (Transport Layer Security) operates at the transport layer of the OSI model and allow secure communication between a client and server over an insecure network. For every server or client that needs to identify itself, it must have a signed TLS certificate. This means the server administrator will create Certificate Signing Request (CSR) and submit it to a Certificate Authority (CA), the CA verifies the CSR and issues a digital certificate. This can then be used to identify the server or client.

# HTTPS

HTTPS is basically HTTP over TLS. Requesting a page over HTTPS requires the following three steps:

1. Establish a TCP three-way handshake with the server
2. Establish a TLS session
3. Communicate using the HTTP protocol

# SMTPS, POP3S, IMAPS

The insecure versions of these protocols use the following ports:

- HTTP: 80
- SMTP: 25
- POP3: 110
- IMAP: 143
    
<br/>The secure versions use:

- HTTPS: 443
- SMTPS: 465 & 587
- POP3S: 995
- IMAPS: 993

# SSH

OpenSSH has several benefits:

- Secure authentication: supports public key & 2FA.
- Confidentiality: provides end-to-end encryption, protecting against eavesdropping.
- Integrity: protects integrity of traffic.
- Tunneling: SSH can create a secure tunnel to other protocols.
- X11 Forwarding: allows you to use a graphical application over network

# SFTP and FTPS

Secure File Transfer Protocol allows for secure file transfer. It is part of the SSH protocol suite. FTPS is different and uses port 9990 typically. 