---
title: Snort
layout: notes
---

# Intro to IDS/IPS
## IDS

A passive monitoring solution for detecting malicious activities/patterns. There are two primary types of IDS:

- Network Intrusion Detection System (NIDS): monitors traffic from various areas of the network. Aim is to investigate traffic across an entire subnet.
- Host-based Intrusion Detection System (HIDS): monitors traffic from a single endpoint device, the aim is to investigate traffic on a particular device.

## IPS

An active protection solution for preventing malicious activities/patterns. There are four main types of IPS:

- Network Intrusion Prevention System (NIPS): monitors traffic from various network areas, the aim is to protect traffic on an entire subnet.
- Behaviour-based Intrusion Prevention System (Network Behaviour Analysis - NBA): monitor traffic flow from various network areas. Requires a training period to learn normal traffic.
- Wireless Intrusion Prevention System (WIPS): monitors wireless network traffic flow with the aim of stopping possible attacks.
- Host-based Intrusion Prevention System (HIPS): actively protects the traffic flow from a single endpoint device.

<br/>Both IDS and IPS use the same three main techniques:

1. Signature Based: relies on rules identifying known patterns, helps detect known threats
2. Behaviour Based: identifies new threats that bypass signatures, compares normal with abnormal
3. Policy Based: compares detected activity with system configuration and security policies

# Basic Snort Interaction

<table>
  <tr>
    <th>Parameter</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>-V / --version</td>
    <td>Parameter provides information about instance version</td>
  </tr>
  <tr>
    <td>-c</td>
    <td>Identify configuration file</td>
  </tr>
  <tr>
    <td>-T</td>
    <td>Test parameter to check setup</td>
  </tr>
  <tr>
    <td>-q</td>
    <td>Prevents snort displaying default banner</td>
  </tr>
</table>

# Snort Sniffer Mode

<table>
  <tr>
    <th>Parameter</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>-v</td>
    <td>Verbose mode</td>
  </tr>
  <tr>
    <td>-d</td>
    <td>Display packet data</td>
  </tr>
  <tr>
    <td>-e</td>
    <td>Display link-layer headers</td>
  </tr>
  <tr>
    <td>-X</td>
    <td>Display full packet details in hex</td>
  </tr>
  <tr>
    <td>-i</td>
    <td>Define a specific interface to sniff on</td>
  </tr>
</table>

# Snort Packer Logger Mode

<table>
  <tr>
    <th>Parameter</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>-l</td>
    <td>Logger mode, default output is /var/log/snort, default action is to dump as tcpdump</td>
  </tr>
  <tr>
    <td>-K ASCII</td>
    <td>Log packets in ASCII format</td>
  </tr>
  <tr>
    <td>-r</td>
    <td>Reading option, read dumped logs in Snort</td>
  </tr>
  <tr>
    <td>-n</td>
    <td>Specify number of packets to process/read, Snort will stop reading after this</td>
  </tr>
</table>

Since Snort runs as root, log files will be owned by root. To read log files, you can either open them as root yourself, or change the owner of the log file to your user.

# Snort IDS/IPS Mode

<table>
  <tr>
    <th>Parameter</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>-c</td>
    <td>Define configuration file</td>
  </tr>
  <tr>
    <td>-T</td>
    <td>Test configuration file</td>
  </tr>
  <tr>
    <td>-N</td>
    <td>Disable logging</td>
  </tr>
  <tr>
    <td>-D </td>
    <td>Background mode</td>
  </tr>
  <tr>
    <td>-A</td>
    <td>Alert modes:

full: full alert, providing all possible info, this is the default.
fast: shows alert message, timestamp, source and destination IP & port.
console: fast style alerts on console screen.
cmg: basic headers details with payload in hex and text.
none: disabled.</td>
  </tr>
</table>

# Investigate PCAPs with Snort

<table>
  <tr>
    <th>Parameter</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>-r / --pcap-single=</td>
    <td>Read a single pcap</td>
  </tr>
  <tr>
    <td>--pcap-list=""</td>
    <td>Read pcaps provided in command (space separated)</td>
  </tr>
  <tr>
    <td>--pcap-show</td>
    <td>Show pcap name on console while processing</td>
  </tr>
</table>

# Snort Rule Structure

<table>
  <tr>
    <th>Action</th>
    <th>Protocol</th>
    <th>Source IP</th>
    <th>Source Port</th>
    <th>Direction</th>
    <th>Destination IP</th>
    <th>Destination Port</th>
    <th>Options</th>
  </tr>
  <tr>
    <td>Alert
Drop
Reject</td>
    <td>TCP
UDP
ICMP</td>
    <td>ANY</td>
    <td>ANY</td>
    <td><></td>
    <td>ANY</td>
    <td>ANY</td>
    <td>Msg
Reference
Sid
Rev</td>
  </tr>
</table>

The following rule will trigger an alert every time an ICMP packet is processed:

`alert icmp any any <> any any (msg:"ICMP Packet Found";reference:CVE-XXXX;sid:1000001;rev:1;)`

Rule headers are mandatory, and options are optional, but should almost always be included. Each rule should have an action, protocol, source and destination IP and port plus an option.

- Action: several actions for rules, like alert, log, drop, and reject.
- Protocol: the type of protocol, Snort2 only supports four protocols; IP, TCP, UDP, ICMP, however, you can filter by port number.

# IP and Port Number Rule Samples
## IP Filtering

`alert icmp 192.168.1.56 any <> any any (msg:"ICMP Packet From ";sid: 100001;rev:1;)`

## Filter an IP Range

`alert icmp 192.168.1.0/24 any <> any any (msg:"ICMP Packet Found";sid: 100001;rev:1;)`

## Filter Multiple IP Ranges

`alert icmp [192.168.1.0/24, 10.1.1.0/24] any <> any any (msg:"ICMP Packet Found";sid: 100001;rev:1;)`

## Exclude IP Addresses/Ranges

`alert icmp !192.168.1.0/24 any <> any any (msg:"ICMP Packet Found";sid: 100001;rev:1;)`

## Port Filtering

`alert tcp any any <> any 21 (msg:"FTP Port 21 Activity";sid: 100001;rev:1;)`

## Exclude a Specific Port

`alert tcp any any <> any !21 (msg:"Traffic outside Port 21 Detected";sid: 100001;rev:1;)`

## Filter a Port Range (Type 1)

`alert tcp any any <> any 1:1024 (msg:"TCP1-1024 Port Activity";sid: 100001;rev:1;)`

## Filter a Port Range (Type 2)

`alert tcp any any <> any :1024 (msg:"TCP0-1024 Port Activity";sid: 100001;rev:1;)`

## Filter a Port Range (Type 3)

`alert tcp any any <> any 1025: (msg:"TCP Non-System Port Activity";sid: 100001;rev:1;)`

## Filter a Port Range (Type 4)

`alert tcp any any <> any [21,23] (msg:"FTP and Telnet 21-23 Activity";sid: 100001;rev:1;)`

# Direction

This indicates the traffic flow to be filtered by Snort, the left side is the source and the right the destination.

- -> source to destination
- <> bidirectional

<br/>There is no <- operator in Snort.

# Snort Rule Options

There are three main options:

1. General Rule Options: fundamental rule options
2. Payload Rule Options: rule options that help investigate data
3. Non-Payload Rule Options: rule options that focus on non-payload data

## General Rule Options

- Msg: a basic prompt and quick identifier of the rule, the message filed here will appear in the console or log. Usually a one-liner to summarise the event.
- Sid: Snort Rule IDs (SID) come with a pre-defined scope and must have an SID in proper format. Each SID must be unique and all user created IDs should have an SID above 100,000,000. Rule IDs are:
    1. <100: Reserved rules
    2. 100-999,999: Rules came with the build
    3. \>=1,000,000: Rules created by user
- Reference: additional information to explain the purpose of the rule or threat pattern, for example, a CVE ID or other external info.
- Rev: Snort rules can be modified and updated for performance/efficiency issues. Each rule should have a rev number and analysts should keep a log of the rule revisions.

## Payload Detection Rule Options

- Content: payload data to match a specific payload by ASCII, Hex or both. This rule is case sensitive, for example, the following rule will create an alert for each HTTP packet containing the word "GET".

`alert tcp any any <> any 80 (msg:"GET Found";content:"GET";sid: 100001;rev:1;)`

- Nocase: disable case sensitivity.

`alert tcp any any <> any 80 (msg:"GET Found";content:"GET";nocase;sid: 100001;rev:1;)`

- Fast_pattern: prioritise content search to speed up payload search operations. This is always case insensitive and is required if using multiple content options.

`alert tcp any any <> any 80 (msg:"GET Found";content:"GET";fast_pattern;content:"www";sid: 100001;rev:1;)`

## Non-Payload Detection Rule Options

- ID: filter on the IP ID field, for example:

`alert tcp any any <> any any (msg:"ID TEST";id:123456;sid: 100001;rev:1;)`

- Flags: filter on TCP flags (F)IN, (S)YN, (R)ST, (P)SH, (A)CK and (U)RG.

`alert tcp any any <> any any (msg:"FLAG TEST";flags:S;sid: 100001;rev:1;)`

- Dsize: filter the packet payload size.

`alert ip any any <> any any (msg:"SEQ TEST";dsize:100<>300;sid: 100001;rev:1;)`

Once a rule is created, it will appear in your local rules file at `/etc/snort/rules/local.rules`.

# Snort2 Operation Logic
## Main Components

- Packet Decoder: packet collector that collects and prepares packets.
- Pre-processors: arranges and modifies packets for detection engine.
- Detection Engine: primary component that processes, dissects and analyses the packets.
- Logging and Alerting: log and alert generation component.
- Outputs and Plugins: output integration modules and additional plugin support.

## Rule Types

- Community Rules: free under GPLv2, publicly accessible.
- Registered Rules: free ruleset if you register, contains subscriber rules with a thirty day delay.
- Subscriber Rules (Paid): paid ruleset which is updated twice a week.

<br/>You should never replace your configured Snort files, you must edit the existing file, the `snort.conf` is the main config, and `local.rules` is your user generated rules file. The `snort.conf` file has multiple sections. The first section is "Step #1: Set the network variables".

<table>
  <tr>
    <th>TAG NAME</th>
    <th>INFO</th>
    <th>EXAMPLE</th>
  </tr>
  <tr>
    <td>HOME_NET</td>
    <td>The location you are protecting.</td>
    <td>'any' OR '192.168.1.1/24'</td>
  </tr>
  <tr>
    <td>EXTERNAL_NET</td>
    <td>The external network, it should be kept as 'any' or '!\$HOME_NET'.</td>
    <td>'any' OR '!\$HOME_NET'</td>
  </tr>
  <tr>
    <td>RULE_PATH</td>
    <td>Hardcoded rule path.</td>
    <td>/etc/snort/rules</td>
  </tr>
  <tr>
    <td>SO_RULE_PATH </td>
    <td>These come with registered and subscriber rules.</td>
    <td>\$RULE_PATH/so_rules</td>
  </tr>
  <tr>
    <td>PREPROC_RULE_PATH</td>
    <td>These come with registered and subscriber rules.</td>
    <td>\$RULE_PATH/plugin_rules</td>
  </tr>
</table>
 	 	
The next section to look at is "Step #2: Configure the decoder". This lets you manage the IPS mode of Snort.

<table>
  <tr>
    <th>TAG NAME</th>
    <th>INFO</th>
    <th>EXAMPLE</th>
  </tr>
  <tr>
    <td>#config daq</td>
    <td>IPS mode selection.</td>
    <td>afpacket</td>
  </tr>
  <tr>
    <td>#config daq_mode</td>
    <td>Activate inline mode.</td>
    <td>inline</td>
  </tr>
  <tr>
    <td>#config logdir</td>
    <td>Hardcoded default log path.</td>
    <td>/var/logs/snort</td>
  </tr>
</table>
 	 	
DAQ (Data Acquisition Models) are libraries used for packet I/O. There are six DAQ modules available:

1. Pcap: Default mode (known as sniffer mode)
2. Afpacket: Inline mode (known as IPS mode)
3. Ipq: Inline mode on Linux using Netfilter.
4. Nfq: Inline mode on Linux.
5. Ipfw: Inline on OpenBSD and FreeBSD using divert sockets with pf and ipfw firewalls.
6. Dump: testing mode of inline and normalisation.

<br/>The next section of note is "Step #6: Configure output plugins". This manages the output of the IDS/IPS actions like alerting and logging format details.

<table>
  <tr>
    <th>TAG NAME</th>
    <th>INFO</th>
    <th>EXAMPLE</th>
  </tr>
  <tr>
    <td>#site specific rules</td>
    <td>Hardcoded local and user-generated rules path.</td>
    <td>include \$RULE_PATH/local.rules</td>
  </tr>
  <tr>
    <td>#include \$RULE_PATH/</td>
    <td>Hardcoded default/downloaded rules path.</td>
    <td>include \$RULE_PATH/rulename</td>
  </tr>
</table>
 	 	
 	 	
 	 	