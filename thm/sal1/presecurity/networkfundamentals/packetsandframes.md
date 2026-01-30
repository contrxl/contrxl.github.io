---
title: Packets and Frames
layout: notes
---

# What are Packets & Frames?

A frame is at layer 2 (data link) where there is no such information as IP address. Think of it as an envelope inside an envelope, the first envelope is the packet you mail, and once opened, it contains data (this is a frame). This process is called encapsulation. When IP addresses are involved, it is a packet. When encapsulating information is stripped away, it is a frame.

Packets have different structures depending on the type of packet being sent. For example, a packet using IP will have a set of headers containing additional pieces of information. Some notable headers include:

<table>
  <tr>
    <th>Header</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>Time to Live</td>
    <td>Expiry timer for the packet so it doesn't clog up a network</td>
  </tr>
  <tr>
    <td>Checksum</td>
    <td>Integrity checking for protocols like TCP/IP</td>
  </tr>
  <tr>
    <td>Source Address</td>
    <td>IP address of the sending device</td>
  </tr>
  <tr>
    <td>Destination Address </td>
    <td>IP address of the recipient</td>
  </tr>
</table>
 	
# TCP/IP

The TCP/IP protocol has four layers and is like a summarised version of the OSI model. The TCP/IP layers are:

1. Application
2. Transport
3. Internet
4. Network Interface

<br/>Information is added to each layer of the TCP model as the packet traverses it. This is known as encapsulation, the reverse is decapsulation. TCP is connection based, meaning it must have a connection between a client and a device acting as a server. TCP packets contain various sections of information, some of the critical headers are:

<table>
  <tr>
    <th>Header</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>Source Port</td>
    <td>Port opened by the sender to send TCP packet from</td>
  </tr>
  <tr>
    <td>Destination Port</td>
    <td>Port that an application or service is running on the remote host</td>
  </tr>
  <tr>
    <td>Source IP</td>
    <td>IP of the sender</td>
  </tr>
  <tr>
    <td>Destination IP</td>
    <td>IP of the recipient</td>
  </tr>
  <tr>
    <td>Sequence Number</td>
    <td>First piece of data sent is given a random number</td>
  </tr>
  <tr>
    <td>Acknowledgement Number</td>
    <td>After the first piece of data gets a sequence number, subsequent data is given the sequence number +1</td>
  </tr>
  <tr>
    <td>Checksum</td>
    <td>Mathematical calculation carried out to determine data integrity</td>
  </tr>
  <tr>
    <td>Data</td>
    <td>Where the data is stored</td>
  </tr>
  <tr>
    <td>Flag</td>
    <td>Determines how the packet should be handled by either device during the handshake process.</td>
  </tr>
</table>

The three-way handshake process is used to establish a connection between two devices. The three-way handshake communicates using a few special messages, the main ones are:

<table>
  <tr>
    <th>Step</th>
    <th>Message</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>1</td>
    <td>SYN</td>
    <td>Initial packet sent during handshake, used to initiate connection and synchronise the device</td>
  </tr>
  <tr>
    <td>2</td>
    <td>SYN/ACK</td>
    <td>Packet is sent by receiving device to acknowledge synchronisation attempt</td>
  </tr>
  <tr>
    <td>3</td>
    <td>ACK</td>
    <td>Acknowledgement packet used by either client or server to acknowledge a series of packets/messages have been received</td>
  </tr>
  <tr>
    <td>4</td>
    <td>DATA</td>
    <td>Once connection is established, data is sent via the "DATA" message</td>
  </tr>
  <tr>
    <td>5</td>
    <td>FIN</td>
    <td>Packet used to cleanly close the connection</td>
  </tr>
  <tr>
    <td>6</td>
    <td>RST</td>
    <td>Abruptly ends all communication, last resort and indicates an issue during process</td>
  </tr>
</table>	 	

Any data sent is assigned a random sequence number and is reconstructed using the number sequence incremented by one, the order is agreed upon during three steps:

1. SYN - Client: Provides Initial Sequence Number (ISN) to synchronise with.
2. SYN/ACK - Server: Provides Initial Sequence Number (ISN) to synchronise and acknowledges client sequence number.
3. ACK - Client: Acknowledges server initial sequence number.

<br/>TCP will close a connection once a device determines that the other device has successfully received all of the data. It is best practice to close a TCP connection as soon as possible.

# UDP/IP

UDP is a stateless protocol that does not require a constant connection between the two devices for data to be sent. UDP packets are much simpler than TCP and have fewer headers. No acknowledgement is sent in a UDP connection.
Ports

Networking devices use ports to enforce strict rules when communicating. When a connection is established, any data sent or received will be sent through these ports. Ports can range anywhere from 0-65535, so it is important that applications, software and behaviours are associated with a standard set of rules. Some common ports are:

<table>
  <tr>
    <th>Protocol</th>
    <th>Port Number</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>File Transfer Protocol (FTP)</td>
    <td>21</td>
    <td>Used by file-sharing application built on client-server model</td>
  </tr>
  <tr>
    <td>Secure Shell (SSH)</td>
    <td>22</td>
    <td>Used to securely login to systems via a text-based interface</td>
  </tr>
  <tr>
    <td>HyperText Transfer Protocol (HTTP)</td>
    <td>80</td>
    <td>Powers the World Wide Web, used by browsers to download text, images and videos</td>
  </tr>
  <tr>
    <td>HyperText Transfer Protocol Secure (HTTPS)</td>
    <td>443</td>
    <td>Same as HTTP, but secure</td>
  </tr>
  <tr>
    <td>Server Message Block (SMB)</td>
    <td>445</td>
    <td>Protocol similar to FTP, but allows devices like printers to be shared</td>
  </tr>
  <tr>
    <td>Remote Desktop Protocl (RDP)</td>
    <td>3389</td>
    <td>Secure means of logging into a system usng a visual desktop interface</td>
  </tr>
</table>