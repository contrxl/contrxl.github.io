---
title: WireShark Traffic Analysis
layout: notes
---

# Nmap Scan Filters
## TCP Flags

<table>
  <tr>
    <th>Note</th>
    <th>Filter</th>
  </tr>
  <tr>
    <td>Global Search</td>
    <td>tcp
udp</td>
  </tr>
  <tr>
    <td>Only SYN Flag</td>
    <td>tcp.flags == 2</td>
  </tr>
  <tr>
    <td>SYN flag is set, rest is not important</td>
    <td>tcp.flags.syn == 1</td>
  </tr>
  <tr>
    <td>Only ACK Flag</td>
    <td>tcp.flags == 16</td>
  </tr>
  <tr>
    <td>ACK flag is set, rest is not important</td>
    <td>tcp.flags.ack == 1</td>
  </tr>
  <tr>
    <td>Only SYN,ACK Flags</td>
    <td>tcp.flags == 18</td>
  </tr>
  <tr>
    <td>SYN and ACK set, rest is not important</td>
    <td>(tcp.flags.syn == 1) and (tcp.flags.ack == 1)</td>
  </tr>
  <tr>
    <td>Only RST Flag</td>
    <td>tcp.flags == 4</td>
  </tr>
  <tr>
    <td>RST flag is set, rest is not important</td>
    <td>tcp.flags.reset == 1</td>
  </tr>
  <tr>
    <td>Only RST,ACK flags</td>
    <td>tcp.flags == 20</td>
  </tr>
  <tr>
    <td>RST and ACK set, rest is not important</td>
    <td>(tcp.flags.reset == 1) and (tcp.flags.ack == 1)</td>
  </tr>
  <tr>
    <td>Only FIN Flag</td>
    <td>tcp.flags == 1</td>
  </tr>
  <tr>
    <td>FIN flag is set, rest is not important</td>
    <td>tcp.flags.fin == 1</td>
  </tr>
  <tr>
    <td>TCP Connect Scan Pattern</td>
    <td>tcp.flags.syn == 1 and tcp.flags.ack == 0 and tcp.window_size > 1024</td>
  </tr>
  <tr>
    <td>TCP SYN Scan Pattern </td>
    <td>tcp.flags.syn == 1 and tcp.flags.ack == 0 and tcp.window_size <= 1024</td>
  </tr>
  <tr>
    <td>UDP Scan Pattern</td>
    <td>icmp.type == 3 and icmp.code == 3</td>
  </tr>
</table>

# ARP Poisoning/MITM

<table>
  <tr>
    <th>Notes</th>
    <th>Filter</th>
  </tr>
  <tr>
    <td>Global Search</td>
    <td>arp</td>
  </tr>
  <tr>
    <td>ARP Requests</td>
    <td>arp.opcode == 1</td>
  </tr>
  <tr>
    <td>ARP Responses</td>
    <td>arp.opcode == 2</td>
  </tr>
  <tr>
    <td>ARP Scanning</td>
    <td>arp.dst.hw_mac == 00:00:00:00:00:00</td>
  </tr>
  <tr>
    <td>Possible ARP Poisoning</td>
    <td>arp.duplicate-address-detected or arp.duplicate-address-frame</td>
  </tr>
  <tr>
    <td>Possible ARP Flooding </td>
    <td>((arp) && (arp.opcode == 1)) && (arp.src.hw_mac == target-mac-address)</td>
  </tr>
</table>

# DHCP, NetBIOS and Kerberos
## DHCP Analysis

<table>
  <tr>
    <th>Notes</th>
    <th>Filter</th>
  </tr>
  <tr>
    <td>Global Search</td>
    <td>dhcp
bootp</td>
  </tr>
  <tr>
    <td>DHCP Request</td>
    <td>dhcp.option.dhcp == 3</td>
  </tr>
  <tr>
    <td>DHCP ACK</td>
    <td>dhcp.option.dhcp == 5</td>
  </tr>
  <tr>
    <td>DHCP NAK</td>
    <td>dhcp.option.dhcp == 6</td>
  </tr>
  <tr>
    <td>DHCP Request, options for low-hanging fruit:
12: Hostname
50: Requested IP
51: Request IP Lease Time
61: Client MAC</td>
    <td>dhcp.option.hostname contains "keyword"</td>
  </tr>
  <tr>
    <td>DHCP ACK, options for low-hanging fruit:
15: Domain Name
50: Requested IP Address
51: Requested IP Lease Time
61: Client MAC Address 	dhcp.option.hostname contains "keyword"
DHCP NAK, options for low-hanging fruit:
56: Message</td>
    <td>Could be unique and so should be read instead of filtered.</td>
  </tr>
</table>

## NetBIOS

<table>
  <tr>
    <th>Notes</th>
    <th>Filter</th>
  </tr>
  <tr>
    <td>Global Search</td>
    <td>nbns</td>
  </tr>
  <tr>
    <td>NBNS, options for low-hanging fruit:
Queries: query details
Could contain name, TTL and IP</td>
    <td>nbns.name contains "keyword"</td>
  </tr>
</table>
 	
## Kerberos

<table>
  <tr>
    <th>Notes</th>
    <th>Filter</th>
  </tr>
  <tr>
    <td>Global Search</td>
    <td>kerberos</td>
  </tr>
  <tr>
    <td>User Account Search</td>
    <td>kerberos.CNameString contains "keyword" or to avoid hostnames:
kerberos.CNameString and !(kerberos.CNameString contains "$")</td>
  </tr>
  <tr>
    <td>Kerberos, options for low-hanging fruit:
pvno: Protocol version
realm: Domain name for ticket
sname: Service and domain name
addresses: Client IP and NetBIOS name</td>
    <td>kerberos.pvno == 5
kerberos.realm contains ".org"
kerberos.SNameString == "krbtg"</td>
  </tr>
</table>

# DNS and ICMP
## ICMP

<table>
  <tr>
    <th>Notes</th>
    <th>Filter</th>
  </tr>
  <tr>
    <td>Global Search</td>
    <td>icmp</td>
  </tr>
  <tr>
    <td>ICMP, options for low-hanging fruit:
Packet length
ICMP destination address
Encapsulated protocol signs </td>
    <td>data.len > 64 and icmp</td>
  </tr>
</table>

## DNS

<table>
  <tr>
    <th>Notes</th>
    <th>Filter</th>
  </tr>
  <tr>
    <td>Global Search</td>
    <td>dns</td>
  </tr>
  <tr>
    <td>DNS, options for low-hanging fruit:
Query Length
Anomalous and non-regular address names
Long DNS addresses with encoded subdomain addresses
Known patterns like dnscat and dns2tcp
Statistical analysis like volume of DNS requests</td>
    <td>dns contains dnscat
dns.qry.name.len > 15 and !mdns
!mdns: disable local link device queries</td>
  </tr>
</table>

# ClearText Analysis: FTP

<table>
  <tr>
    <th>Notes</th>
    <th>Filter</th>
  </tr>
  <tr>
    <td>Global Search</td>
    <td>ftp</td>
  </tr>
  <tr>
    <td>x1x Options:
211: System State
212: Directory State
213: File State</td>
    <td>ftp.response.code == 211</td>
  </tr>
  <tr>
    <td>x2x Options:
220: Service Ready
227: Passive Mode
228: Long Passive Mode
229: Extended Passive Mode </td>
    <td>ftp.response.code == 227</td>
  </tr>
  <tr>
    <td>x3x Options:
230: Login
231: Logout
331: Valid Username
430: Invalid user/pass
530: No login, invalid pass</td>
    <td>ftp.response.code == 230</td>
  </tr>
  <tr>
    <td>FTP Options:
USER
PASS
CWD
LIST</td>
    <td>ftp.request.command == "USER"</td>
  </tr>
  <tr>
    <td>Brute-force Tells</td>
    <td>ftp.response.code == 530
(ftp.response.code == 530) and (ftp.response.arg contains "username")
(ftp.request.command == "PASS") and (ftp.request.arg == "password")</td>
  </tr>
</table>
 	
# ClearText Analysis: HTTP

<table>
  <tr>
    <th>Notes</th>
    <th>Filter</th>
  </tr>
  <tr>
    <td>Global Search</td>
    <td>http
http2</td>
  </tr>
  <tr>
    <td>HTTP Request Methods:
GET
POST</td>
    <td>http.request.method == "GET"</td>
  </tr>
  <tr>
    <td>HTTP Response Status Codes:
200 OK
301 MOVED PERMANENTLY
302 MOVE TEMPORARILY
400 BAD REQUEST
401 UNAUTHORISED
403 FORBIDDEN
404 NOT FOUND
405 METHOD NOT ALLOWED
408 REQUEST TIMEOUT
500 INTERNAL ERROR
503 SERVICE UNAVAILABLE</td>
    <td>http.response.code == 200</td>
  </tr>
  <tr>
    <td>HTTP Parameters:
User Agent
Request URI
Full_URI
Server
Host
Connection
Line-based Text Data
HTML Form URL Encoded</td>
    <td>http.user_agent contains "nmap"
http.request.uri contains "admin"
http.request.full_uri contains "admin"
http.server contains "apache"
http.host contains "keyword"
http.host == "keyword"
http.connection == "Keep-Alive"
data-text-lines contains "keyword"</td>
  </tr>
</table>

## HTTP User Agent Analysis

<table>
  <tr>
    <th>Notes</th>
    <th>Filter</th>
  </tr>
  <tr>
    <td>Global Search</td>
    <td>http.user_agent</td>
  </tr>
  <tr>
    <td>Research outcomes:
Different user_agent info from same host within short time
Non-standard or custom agents
Subtle spelling differences
Audit tools like Nmap, Nikto
Payload data</td>
    <td>http.user_agent contains "keyword"</td>
  </tr>
</table>
 	
## HTTP Log4j Analysis

<table>
  <tr>
    <th>Notes</th>
    <th>Filter</th>
  </tr>
  <tr>
    <td>Starts with a "POST" request
Known plaintext patterns</td>
    <td>Research outcomes:
 	http.request.method == "POST"
(ip contains "jndi") or (ip contains "Exploit")
(frame contains "jdni") or (frame contains "Exploit")
(http.user_agent contains "$") or (http.user_agent contains "==")</td>
  </tr>
</table>

# Decrypting HTTPS Traffic

<table>
  <tr>
    <th>Notes</th>
    <th>Filter</th>
  </tr>
  <tr>
    <td>List All Requests</td>
    <td>http.request</td>
  </tr>
  <tr>
    <td>Global TLS Search</td>
    <td>tls</td>
  </tr>
  <tr>
    <td>TLS Client Request </td>
    <td>tls.handshake.type == 1</td>
  </tr>
  <tr>
    <td>TLS Server Response</td>
    <td>tls.handshake.type == 2</td>
  </tr>
  <tr>
    <td>SSDP</td>
    <td>ssdp</td>
  </tr>
</table>