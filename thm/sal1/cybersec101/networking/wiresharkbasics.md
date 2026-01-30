---
title: WireShark Basics
layout: notes
---

# Overview

Used for:

- Detecting and troubleshooting network problems
- Detecting security anomalies
- Investigating and learning protocol details

# GUI and Data

<table>
  <tr>
    <th>Item</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>Toolbar</td>
    <td>Contains multiple menus and shortcuts for packet sniffing and processing</td>
  </tr>
  <tr>
    <td>Display Filter Bar</td>
    <td>Main query and filtering section</td>
  </tr>
  <tr>
    <td>Recent Files</td>
    <td>List of recently investigated files</td>
  </tr>
  <tr>
    <td>Capture Filter and Interfaces</td>
    <td>Capture filters and available sniffing points</td>
  </tr>
  <tr>
    <td>Status Bar</td>
    <td>Tool status, profile and numeric packet info</td>
  </tr>
</table>

# Packet Details

Clicking on a packet in a capture will show between five and seven layers:

- The Frame (Layer 1): shows the frame/packet and specific details relating to the OSI model
- Source (MAC) (Layer 2): shows source an destination MAC address, from data link layer
- Source (IP) (Layer 3): shows source and destination IP addresses from network layer
- Protocol (Layer 4): shows details of protocol used, source & destination ports
- Protocol Errors: continuation of 4th layer shows segments from TCP to reassemble
- Application Protocol (Layer 5): details specific to protocol used
- Application Data: extension of 5th layer shows application specific data

# Packet Navigation

The "Go" menu on the toolbar can be used to jump to a specific packet number or specific packet. Packets can be found by content using "Edit --> Find Packet". You must know the input type (Display filter, Hex, String or Regex) and you must choose the search field. Searches can be conducted in the packet list, packet details or packet bytes.

You can mark packets by right-clicking them and choosing "Mark", note this will be lost after your session. Packets can have comments added to them, these persist between sessions. Packets can be exported from a capture file using "File --> Export Specified Packets".

Objects can be exported like files or pictures by using "File --> Export Objects". The time display format can be changed with "View --> Time Display Format". Wireshark detects specific states of protocols to detect anomalies easily:

<table>
  <tr>
    <th>Severity</th>
    <th>Colour</th>
    <th>Info</th>
  </tr>
  <tr>
    <td>Chat</td>
    <td>Blue</td>
    <td>Information on workflow</td>
  </tr>
  <tr>
    <td>Note</td>
    <td>Cyan</td>
    <td>Notable events like app error codes</td>
  </tr>
  <tr>
    <td>Warn</td>
    <td>Yellow</td>
    <td>Warnings like unusual error codes or problem statements</td>
  </tr>
  <tr>
    <td>Error</td>
    <td>Red</td>
    <td>Problems like malformed packets</td>
  </tr>
</table>

# Filtering

The most basic way to apply a filter is to right click the field you wish to filter, and choose "Analyse --> Apply As Filter". To view packets related to a conversation, you can right click a field to filter and choose "Analyse --> Conversation Filter".