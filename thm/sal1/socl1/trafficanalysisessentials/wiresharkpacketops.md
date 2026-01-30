---
title: WireShark Packet Operations
layout: notes
---

# Statistics: Summary

This menu provides statistics options to help users see the big picture.

- Resolved Addresses: helps identify IP addresses and DNS names available in the capture.
- Protocol Hierarchy: breaks down all available protocols in the capture file and helps analysts view the protocols in a tree view. From here, you can right click and filter events of interest.
- Conversations: provides a list of conversations in five base formats (ethernet, IPv4, IPv6, TCP and UDP)
- Endpoints: Provides unique info for single information fields to help identify unique endpoints. 

<br/>You can activate name resolution from this menu. Full IP/port name resolution can be activated via "Edit --> Preferences --> Name Resolution --> Resolve Transport Names/Resolve IP Addresses"

# Statistics: Protocol Details

- IPv4 and IPv6: has two options for narrowing statistics to IPv4 or 6.
- DNS: breaks down all DNS findings into a tree view based on packet counters and percentages of the DNS protocol.
- HTTP: breaks down all HTTP packets from the capture file.

# Packet Filtering: Principles

There are two types of packet filter:

1. Capture filter: used to save only a specific part of traffic, set before capture and can't be changed during capture
2. Display filter: investigate packets by reducing number visible, is changeable during capture

## Capture Filter Syntax

- Scope: `host`, `net`, `port`, `portrange`
- Direction: `src`, `dst`, `src or dst`, `src`, `dst`
- Protocol: `ether`, `wlan`, `ip`, `ip6`, `arp`, `rarp`, `tcp` and `udp`
- Example: `tcp port 80`

## Display Filter Syntax

Some samples using comparison operators:

<table>
  <tr>
    <th>Purpose</th>
    <th>Example</th>
  </tr>
  <tr>
    <td>Check if equal to</td>
    <td>ip.src == 10.10.10.10</td>
  </tr>
  <tr>
    <td>Check if not equal to</td>
    <td>ip.src != 10.10.10.10</td>
  </tr>
  <tr>
    <td>Check if greater than</td>
    <td>ip.ttl > 250</td>
  </tr>
  <tr>
    <td>Check if less than</td>
    <td>ip.ttl < 250</td>
  </tr>
  <tr>
    <td>Check if greater than or equal to</td>
    <td>ip.ttl >= 250</td>
  </tr>
  <tr>
    <td>Check if less than or equal to</td>
    <td>ip.ttl <= 250</td>
  </tr>
</table>
 	
Some samples using logical expressions:

<table>
  <tr>
    <th>Purpose</th>
    <th>Example</th>
  </tr>
  <tr>
    <td>Check if two conditions are met</td>
    <td>(ip.src == 10.10.10.10) AND (ip.src == 10.10.10.100)</td>
  </tr>
  <tr>
    <td>Check if either condition is met</td>
    <td>(ip.src == 10.10.10.10) OR (ip.src == 10.10.10.100)</td>
  </tr>
  <tr>
    <td>Check if a condition is not met </td>
    <td>!(ip.src == 10.10.10.10)</td>
  </tr>
</table>

# Protocol Filters
## IP Filters

<table>
  <tr>
    <th>Filter</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>ip</td>
    <td>Show all IP packets</td>
  </tr>
  <tr>
    <td>ip.addr == 10.10.10.10</td>
    <td>Show all IP packets with address 10.10.10.10</td>
  </tr>
  <tr>
    <td>ip.addr == 10.10.10.10/24</td>
    <td>Show all IP packets from 10.10.10.10/24 subnet</td>
  </tr>
  <tr>
    <td>ip.src == 10.10.10.10</td>
    <td>Show all IP packets originating from 10.10.10.10</td>
  </tr>
  <tr>
    <td>ip.dst == 10.10.10.10</td>
    <td>Show all IP packets going to 10.10.10.10</td>
  </tr>
</table>

## TCP and UDP Filters

<table>
  <tr>
    <th>Filter</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>tcp.port == 80</td>
    <td>Show all TCP packets with port 80</td>
  </tr>
  <tr>
    <td>tcp.srcport == 1234</td>
    <td>Show all TCP packets originating from 1234</td>
  </tr>
  <tr>
    <td>tcp.dstport == 80</td>
    <td>Show all TCP packets heading to port 80</td>
  </tr>
</table>
 	
These same filters can be used replacing `tcp` with `udp`.

## Application Level Protocol Filters: HTTP and DNS

<table>
  <tr>
    <th>Filter</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>http</td>
    <td>Show all HTTP packets</td>
  </tr>
  <tr>
    <td>http.response.code == 200</td>
    <td>Show all HTTP packets with response code 200</td>
  </tr>
  <tr>
    <td>http.request.method == "GET"</td>
    <td>Show all HTTP GET requests</td>
  </tr>
  <tr>
    <td>http.request.method == "POST"</td>
    <td>Show all HTTP POST requests</td>
  </tr>
  <tr>
    <td>dns</td>
    <td>Show all DNS packets</td>
  </tr>
  <tr>
    <td>dns.flags.response == 0</td>
    <td>Show all DNS requests</td>
  </tr>
  <tr>
    <td>dns.flags.response == 1</td>
    <td>Show all DNS responses</td>
  </tr>
  <tr>
    <td>dns.qry.type == 1</td>
    <td>Show all DNS "A" records</td>
  </tr>
</table>

# Advanced Filtering

<table>
  <tr>
    <th>Filter</th>
    <th>Example</th>
  </tr>
  <tr>
    <td>contains</td>
    <td>http.server contains "Apache"</td>
  </tr>
  <tr>
    <td>matches</td>
    <td>http.host matches "\.(php\|html)</td>
  </tr>
  <tr>
    <td>in</td>
    <td>tcp.port in {80 443 8080}</td>
  </tr>
  <tr>
    <td>upper</td>
    <td>upper(http.server) contains "APACHE"</td>
  </tr>
  <tr>
    <td>lower</td>
    <td>lower(http.server) contains "apache"</td>
  </tr>
  <tr>
    <td>string</td>
    <td>string(frame.number) matches "[13579]$"</td>
  </tr>
</table>	