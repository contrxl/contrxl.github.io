---
title: IDS Fundamentals
layout: notes
---

# Types of IDS

- Host Intrusion Detection System (HIDS): installed on hosts to detect threats associated with the particular host. Provide detailed visibility of host activities.
- Network Intrusion Detection System (NIDS): crucial in detecting malicious activities throughout the network regardless of host. They monitor traffic of all hosts.
- IDS also have various detection modes:
- Signature Based: keeps a database of signatures to detect attacks which match known signatures. Stronger signature bases make this mode more effective, however, it cannot detect zero-days or previously unknown attacks.
- Anomaly Based: learns normal behaviour of the network/system and performs detections based on deviations with this. This can generate lots of false-positives because of the nature of its behaviour.
- Hybrid: combination of signature and anomaly based detection to leverage the strengths of each approach.

# Snort

Snort is one of the most used open-source IDS solutions. It is a hybrid solution. Snort has three main modes:

<table>
  <tr>
    <th>Mode</th>
    <th>Description</th>
    <th>Use Case</th>
  </tr>
  <tr>
    <td>Packet Sniffer</td>
    <td>Reads and displays packets without analysis. Can be helpful in monitoring and troubleshooting. Allows traffic to be displayed on the console or outputted to a file.</td>
    <td>Insights are needed into network traffic, and so this mode is used to gather info.</td>
  </tr>
  <tr>
    <td>Packet Logging</td>
    <td>Performs real-time detections and displays them as alerts on the console. Allows traffic to be logged as a PCAP file.</td>
    <td>A forensic investigation requires network traffic logs gathered via this mode.</td>
  </tr>
  <tr>
    <td>NIDS</td>
    <td>Primary mode for real-time monitoring and application of rule files.</td>
    <td>Security team need to proactively monitor their network.</td>
  </tr>
</table>

Snorts rule format is as follows:
`alert icmp any any -> $HOME_NET any (msg:"Ping Detected"; sid10001; rev:1;)`
From left to right this is:

- Action: specifies which action to take when the rule triggers (`alert`)
- Protocol: the protocol matching the rule (`icmp`)
- Source IP: the originating IP address (`any`)
- Source Port: the originating port (`any`)
- Destination IP: the destination IP address (`$HOME_NET`)
- Destination Port: the receiving port (`any`)
- Metadata: consists of message (`msg:`), the signature ID (`sid`), and rule revision (`rev`).
