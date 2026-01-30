---
title: Analysis Fundamentals
layout: notes
---

# The Email Address

Email dates back to ARPANET in the 1970s. Email addresses are made up of:

- User Mailbox/Username
- @
- Domain

# Email Delivery

Three specific protocols facilitate email:

- SMTP: sending of email
- POP3: responsible for transferring mail from client -> mail server
- IMAP: responsible for transferring mail from client -> mail server
    
<br/>The differences between POP3 and IMAP are:

1. POP3:
    - Mail is stored on a single device
    - Sent messages are stored on the sending device
    - Emails can only be accessed on the device they were downloaded to
    - Messages are removed from server once downloaded unless "Keep on server" is enabled
2. IMAP:
    - Mail is stored on server and can be downloaded on multiple devices
    - Sent messages are stored on server
    - Messages can be synced across multiple devices

# Email Headers

Syntax for emails is known as Internet Message Format (IMF). Email headers contain the following fields:

- From: sender's mail address
- Subject: the email's subject line
- Date: the date the mail was sent
- To: recipients email address
    
<br/>You can see more info by viewing the message "Raw" from your chosen mail client. Extra fields of interest in this format include:

- X-Originating-IP: the IP address of the mail it was sent from (X-Header)
- Smtp.mailfrom/header.from: the domain the email was sent from (within Authentication-Results)
- Reply-To: email address a reply will go to instead of a "From" email address

# Email Body

Contains plain or HTML formatted text to view. You can view source of HTML formatted emails to see extra info like:

- Content-Type
- Content-Disposition
- Content-Transfer-Encoding

# Observations

- Look for spoofed email addresses
- URL shortening services
- HTML impersonating legit brands
- Pixel tracking
- Link manipulation
- Creating a sense of urgency
- Credential harvesting
- Poor grammar and/or typos
- Recipient being bccd