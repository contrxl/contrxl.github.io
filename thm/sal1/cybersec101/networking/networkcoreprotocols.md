---
title: Networking Core Protocols
layout: notes
---

# DNS

Domain Name System is responsible for mapping a domain name to an IP address. DNS operates at the application layer of the OSI model. DNS uses UDP 53 by default, and TCP 53 as fallback. There are many types of DNS record, four important ones are:

- A Record: IPv4 address
- AAAA Record: IPv6 address
- CNAME (Canonical Name) Record: maps a domain name to another domain name
- MX Record: mail exchange record

# FTP

FTP is designed to transfer files, some example commands defined by FTP are:

- `USER`: used to input username
- `PASS`: used to input password
- `RETR`: used to download a file from server to client
- `STOR`: used to upload a file from client to server

<br/>FTP listens on port 21 by default.

# SMTP

SMTP defines how a mail client talks with a mail server and how a mail server talks with another. Some commands used by your client when it transfers a mail to a SMTP server are:

- `HELO` or `EHLO`: initiates a SMTP session
- `MAIL FROM`: sender mail address
- `RCPT TO`: recipient mail address
- `DATA`: indicates beginning of data to send
- `.` : indicates the end of the message
    
<br/>SMTP listens on TCP 25 by default.

# POP3

An email client sends messages with SMTP, and retrieves them with POP3. Some common POP3 commands are:

- `USER <username>`: defines the user
- `PASS <password>`: defines the password
- `STAT`: requests number of messages and total size
- `LIST`: list all messages and their sizes
- `RETR <message_number>`: retrieves specified message
- `DELE <message_number>`: marks a message for deletion
- `QUIT`: ends session and applies changes

# IMAP

IMAP allows synchronising read, moved and deleted messages. IMAP commands are more complex than POP3:

- `LOGIN <username> <password>`: authenticates the user
- `SELECT <mailbox>`: select mailbox folder to worth with
- `FETCH <mail_number> <data_item_name>`: fetch a message
- `MOVE <sequence_set> <mailbox>`: move specified messages to another mailbox
- `COPY <sequence_set> <data_item_name>`: copy specified messages to another mailbox
- `LOGOUT`: logs out

<br/>IMAP listens on TCP 143 by default.
