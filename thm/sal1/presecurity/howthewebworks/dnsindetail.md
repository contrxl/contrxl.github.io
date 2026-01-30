---
title: DNS in Detail
layout: notes
---

# What is DNS?

Domain Name System (DNS) allows us to communicate with devices on the internet without remembering IP addresses. DNS helps associate IP addresses like 104.26.10.229 with website names like tryhackme.com.

# Domain Hierarchy
## TLD (Top-Level Domain)

TLD is the most righthand part of a domain name, in tryhackme.com, the TLD is .com. There are two types of TLD:

- gTLD (Generic Top Level): historically meant to tell the user the purpose of the domain e.g. .com for commercial, .org for organisational, .edu for education and .gov for government.
- ccTLD (Country Code Top Level): meant for geographical purposes, like .ca for Canada, .co.uk for UK and so one.

## Second-Level Domain

In the tryhackme.com example, the tryhackme part of the domain is the second-level domain. This is limited to 63 characters plus the TLD and can only use a-z, 0-9 and hyphens.

## Subdomain

Sits on the left side of the second-level domain, using a period to separate it. For example, in admin.tryhackme.com the admin. part would be the subdomain. Subdomains are subject to the same restrictions as second-level domains. Multiple subdomains can be separated by periods, like jupiter.admin.tryhackme.com. The overall length must be less than 253 characters.

# DNS Record Types

- A Record: These resolve to IPv4 addresses, like 104.26.10.229
- AAAA Record: These resolve to IPv6 addresses, like 2606:4700:20::681a:be5
- CNAME Record: These resolve to another domain name
- MX Record: These resolve to the address of the servers handling the email for the domain you are querying. These records come with a priority flag, telling the client which order to try the servers in.
- TXT Record: Free-text fields where any text-based data can be stored. These can be used to list servers which have the authority to send an email on behalf of the domain or to verify ownership of the domain.

# Making a DNS Request

1. When a domain name is requested, the computer checks its local cache to see if it has been looked up recently. If not, a request to the Recursive DNS Server will be made.
2. A Recursive DNS Server is normally provided by the ISP. This server also has a cache of recently looked up domain names. If a result is found locally, this is sent back to your computer, and your request ends here. If it cannot be found here, the internet's root DNS servers are queried.
3. The root servers act as the DNS backbone of the internet. For example, if you request www.tryhackme.com, the root server will recognise the TLD of .com and refer you to the correct TLD server for this.
4. The TLD server holds records for where to find the authoritative server to answer the DNS request. This is often known as the nameserver for the domain. Domains often have multiple nameservers as a backup.
5. An authoritative DNS server is responsible for storing the DNS records for a particular domain name and where any updates to the DNS records would be made. Depending on record type, the DNS record is sent back to the Recursive DNS  Server where a local copy will be cached. DNS records all have a TTL represented in seconds. Caching saves having to make a DNS request every time you communicate with a server.