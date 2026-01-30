---
title: Brim
layout: notes
---

# What is Brim?

Brim is an open-source desktop application that processes pcap and log files. This uses the Zeek log processing format and accepts both Zeek signatures and Suricata rules. It can handle two types of data:

1. Packet Capture Files
2. Structured Log Files (like Zeek logs)

<br/>Brim is useful for processing large (>1GB) pcap files, these are typically too cumbersome for WireShark. Brim reduces time and effort spent processing pcaps.

# Basics

The landing page has three sections and a file import window.

## Pools and Log Details

Pools represent imported files. The timeline will display info about capture start and end dates as well as information fields. Each log entry can be correlated by revieing the correlation section in the log details pane. Each field can be right clicked for various options like:

- Filtering values
- Counting fields
- Sorting (A-Z)
- Viewing details
- Performing whois lookups
- Viewing associated packets in WireShark

## Queries and History

Queries help correlate findings and history stores executed queries. Queries can have names, tags and description. Brim has 12 premade queries in the "Brim" folder.

# Default Queries
## Reviewing Overall Activity

Provides general information for custom query building or creating advanced queries.

## Windows Specific Networking Activity

Focuses on Windows networking activity, provides source and destination address, named pipe, endpoint and operation detection.

## Unique Network Connections and Transferred Data

Provide information on unique connections and connection data-correlation. Helps detect suspicious activity.

## DNS and HTTP Methods

Full list of DNS queries and HTTP methods. Helps detect anomalous DNS and HTTP traffic.

## File Activity

Provides list of available files to detect data leakage attempts or suspicious activity.

## IP Subnet Statistics

Provides list of available IP subnets.

## Suricata Alerts

Provides information based on Suricata rule results.

# Use Cases

Brim query references:

<table>
  <tr>
    <th>Purpose</th>
    <th>Query</th>
  </tr>
  <tr>
    <td>Basic Search</td>
    <td>10.0.0.1</td>
  </tr>
  <tr>
    <td>Logical Operator</td>
    <td>192 and NTP</td>
  </tr>
  <tr>
    <td>Filter Values</td>
    <td>id.orig_h==192.168.121.40</td>
  </tr>
  <tr>
    <td>List Specific Log Contents</td>
    <td>_path=="conn"</td>
  </tr>
  <tr>
    <td>Count Field Values</td>
    <td>count () by _path</td>
  </tr>
  <tr>
    <td>Sort Findings</td>
    <td>count () by _path | sort -r</td>
  </tr>
  <tr>
    <td>Cut Specific Field</td>
    <td>_path=="conn" | cut id.orig_h, id.resp_p, id.resp_h</td>
  </tr>
  <tr>
    <td>List Unique Values</td>
    <td>_path=="conn" | cut id.orig_h, id.resp_p, id.resp_h | sort | uniq</td>
  </tr>
  <tr>
    <td>Identify List of Communicated Hosts</td>
    <td>_path=="conn" | cut id.orig_h, id_resp_h | sort | uniq</td>
  </tr>
  <tr>
    <td>Frequently Communicated Hosts</td>
    <td>_path=="conn" | cut id.orig_h, id.resp_h | sort | uniq -c | sort -r</td>
  </tr>
  <tr>
    <td>Most Active Ports</td>
    <td>_path=="conn" | cut id.resp_p, service | sort | uniq -c | sort -r count _path=="conn" | cut id.orig_h, id.resp_h, id.resp_port, service | sort id.resp_p | uniq -c | sort -r</td>
  </tr>
  <tr>
    <td>Long Connections</td>
    <td>_path=="conn" | cut id.orig_h, id.resp_p, id.resp_h, duration | sort -r duration</td>
  </tr>
  <tr>
    <td>Transferred Data</td>
    <td>_path=="conn" | put total_bytes := orig_bytes + resp_bytes | sort -r total_bytes | cut uid, id, orig_bytes, resp_bytes, total_bytes</td>
  </tr>
  <tr>
    <td>DNS and HTTP Queries</td>
    <td>_path=="dns" | count () by query | sort -r
_path=="http" | count () by uri | sort -r</td>
  </tr>
  <tr>
    <td>Suspicious Hostnames</td>
    <td>_path=="dhcp" | cut host_name, domain</td>
  </tr>
  <tr>
    <td>Suspicious  IP Addresses</td>
    <td>_path=="conn" | put classnet := network_of(id.resp_h) | cut classnet | count() by classnet | sort -r</td>
  </tr>
  <tr>
    <td>Detect Files</td>
    <td>filename!=null</td>
  </tr>
  <tr>
    <td>SMB Activity</td>
    <td>_path=="dce_rpc" OR _path=="smb_mapping" OR _path=="smb_files"</td>
  </tr>
  <tr>
    <td>Known Patterns</td>
    <td>event_type=="alert" OR -path=="notice" OR _path=="signatures"</td>
  </tr>
</table>