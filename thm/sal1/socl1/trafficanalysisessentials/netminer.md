---
title: Network Miner
layout: notes
---

# In Forensics

NetworkMiner is a tool for network forensics, it provides:

- Context of captures hosts like IP and MAC, hostnames or OS info
- List of potential attack indicators or anomalies like traffic spikes or port scans
- Tools or toolkits used to perform potential attacks like Nmap
- There are three main data types investigated in Network Forensics:
- Live Traffic
- Traffic Captures
- Log Files

# What is NetworkMiner?

<table>
  <tr>
    <th>Capability</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>Traffic Sniffing</td>
    <td>Intercept, sniff and collect logs on traffic passing through the network</td>
  </tr>
  <tr>
    <td>Parsing PCAP Files</td>
    <td>Can parse pcap files and show content of the packets in detail</td>
  </tr>
  <tr>
    <td>Protocol Analysis</td>
    <td>Can identify used protocols from the parsed pcap file</td>
  </tr>
  <tr>
    <td>OS Fingerprinting</td>
    <td>OS can be identified by reading the pcap file</td>
  </tr>
  <tr>
    <td>File Extraction</td>
    <td>Can extract images, HTML, files and emails from parsed pcap</td>
  </tr>
  <tr>
    <td>Credential Grabbing</td>
    <td>Can extract credentials from the parsed pcap file</td>
  </tr>
  <tr>
    <td>Clear Text Keyword Parsing</td>
    <td>Can extract cleartext keywords and strings</td>
  </tr>
</table>

There are two main operating modes:

1. Sniffer: only available in Windows and not the primary use case. Not as reliable as other features.
2. Packet Parsing/Processing: can parse packet captures, can be used to grab low-hanging fruit before a deep dive.

# Interface
## File Menu

Helps load a pcap or receive a pcap over IP.

## Tools Menu

Helps clear dashboard and remove captured data.

## Help Menu

Provides info on updates and current version.

## Case Panel

Shows list of investigated pcap files, view metadata details and remove loaded files.

## Hosts

Shows identified hosts in pcap file, provides info like:

- IP Address
- MAC Address
- OS Type
- Open Ports
- Sent/Received Packets
- Incoming/Outgoing Sessions
- Host Details

## Sessions

Shows detected sessions and provides info on:

- Frame number
- Client and server address
- Source and destination port
- Protocol
- Start time
    
<br/>The filter bar can be used to search for specific keywords, it accepts four types of input:

1. "ExactPhrase"
2. "AllWords"
3. "AnyWord"
4. "RegExe"

## DNS

Shows DNS queries and details:

- Frame Number
- Timestamp
- Client and Server
- Source and Destination Port
- IP TTL
- DNS time
- Transaction ID and type
- DNS query and answer
- Alexa Top 1M

## Credentials

Shows extracted credentials and hashes, NetworkMiner can extract:

- Kerberos Hashes
- NTLM Hashes
- RDP Cookies
- HTTP Cookies
- HTTP Requests
- IMAP
- FTP
- SMTP
- MS SQL

## Files

Shows extracted files from investigated pcaps. Provides info on:

- Frame number
- Filename
- Extension
- Size
- Source and destination address
- Source and destination port
- Protocol
- Timestamp
- Reconstructed path
- Details

## Images

Shows extracted images from investigated pcaps.

## Parameters

Shows extracted parameters from investigated pcaps, provides info on:

- Parameter name
- Parameter value
- Source and destination port
- Source and destination host
- Timestamp
- Details

## Keywords

Shows extracted keywords from investigated pcaps, this provides info on:

- Frame number
- Timestamp
- Keyword
- Context
- Source and destination host
- Source and destination port

## Messages

Shows extracted emails from investigated pcaps, provides info on:

- Frame number
- Source and destination host
- Protocol
- Sender
- Receiver
- Timestamp
- Size

## Anomalies

Shows detected anomalies, although it isn't an IDS, it does have detections for EternalBlue and some spoofing attempts.

# Version Differences
## MAC Address Processing

NetworkMiner versions after v2 can process MAC address specific correlation, this is not available before v2. Versions up to 1.6 can handle packets in great detail, this is not available after 1.6.

## Frame Processing

NetworkMiner up to v1.6 can handle frames, this is not available after v1.6.

## Parameter Processing

NetworkMiner versions after v2 can handle parameters in a much more extensive format.

## Cleartext Processing

NetworkMiner up to version 1.6 can handle cleartext data.