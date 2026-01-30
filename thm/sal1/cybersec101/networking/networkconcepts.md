---
title: Networking Concepts
layout: notes
---

# OSI Model

<table>
  <tr>
    <th>Layer Number</th>
    <th>Layer Name</th>
    <th>Main Function</th>
    <th>Example Protocol and Standards</th>
  </tr>
  <tr>
    <td>Layer 7</td>
    <td>Application Layer</td>
    <td>Provides services and interfaces to applications</td>
    <td>HTTP, FTP, DNS, POP3, SMTP, IMAP</td>
  </tr>
  <tr>
    <td>Layer 6</td>
    <td>Presentation Layer</td>
    <td>Data encoding, encryption, and compression</td>
    <td>Unicode, MIME, JPEG, PNG, MPEG</td>
  </tr>
  <tr>
    <td>Layer 5</td>
    <td>Session Layer</td>
    <td>Establishing, maintaining and synchronising sessions</td>
    <td>NFS, RPC</td>
  </tr>
  <tr>
    <td>Layer 4</td>
    <td>Transport Layer</td>
    <td>End-to-end communication and data segmentation</td>
    <td>UDP, TCP</td>
  </tr>
  <tr>
    <td>Layer 3</td>
    <td>Network Layer</td>
    <td>Logical addressing and routing between networks</td>
    <td>IP, ICMP, IPSec</td>
  </tr>
  <tr>
    <td>Layer 2</td>
    <td>Data Link Layer</td>
    <td>Reliable transfer between adjacent nodes</td>
    <td>Ethernet, WiFi</td>
  </tr>
  <tr>
    <td>Layer 1</td>
    <td>Physical Layer</td>
    <td>Physical data transmission</td>
    <td>Electrical, optical and wireless signals</td>
  </tr>
</table>

# TCP/IP Model

<table>
  <tr>
    <th>Layer Number</th>
    <th>ISO OSI Model</th>
    <th>TCP/IP Model</th>
    <th>Protocols</th>
  </tr>
  <tr>
    <td>Layer 7</td>
    <td>Application Layer</td>
    <td>Application Layer</td>
    <td>HTTP, HTTPS, FTP, POP3, SMTP, IMAP, Telnet, SSH</td>
  </tr>
  <tr>
    <td>Layer 6</td>
    <td>Presentation Layer</td>
    <td>Transport Layer</td>
    <td>TCP/UDP</td>
  </tr>
  <tr>
    <td>Layer 5</td>
    <td>Session Layer</td>
    <td>Transport Layer </td>
    <td>TCP/UDP</td>
  </tr>
  <tr>
    <td>Layer 4</td>
    <td>Transport Layer</td>
    <td>Transport Layer</td>
    <td>TCP/UDP</td>
  </tr>
  <tr>
    <td>Layer 3</td>
    <td>Network Layer</td>
    <td>Internet Layer</td>
    <td>IP, ICMP, IPSec</td>
  </tr>
  <tr>
    <td>Layer 2</td>
    <td>Data Link Layer</td>
    <td>Link Layer</td>
    <td>Ethernet, WiFi</td>
  </tr>
  <tr>
    <td>Layer 1</td>
    <td>Physical Layer</td>
    <td></td>
    <td></td>
  </tr>
</table>

# IP Addresses and Subnets

RFC 1918 defines the following three ranges of private IP addresses:

- 10.0.0.0 - 10.255.255.255 (10/8)
- 172.16.0.0 - 172.31.255.255 (172.16/12)
- 192.168.0.0 - 192.168.255.255 (192.168/16)

# Encapsulation

Encapsulation allows each layer to focus on its intended function:

- Application Data: user inputs data they want to send to the app, the app formats it and starts sending it via the transport layer.
- Transport Protocol Segment or Datagram: the transport layer adds the proper header and creates the TCP segment or UDP datagram. This is sent to the network layer.
- Network Packet: adds an IP header to the received segment/datagram and sends it to the data link layer.
- Data Link: ethernet or WiFi receives it and adds a header and trailer, creating a frame.
