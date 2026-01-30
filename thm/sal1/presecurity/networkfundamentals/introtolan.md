---
title: Introduction to LAN
layout: notes
---

# Local Area Network (LAN) Topologies
## Star Topology

A star topology connects devices via a central networking device like a switch or hub. This is most common because of its reliability. This topology is more expensive as it requires dedicated networking equipment and more cabling.

Despite this, the topology is much more scalable in nature meaning more devices can be added easily. The more the network scales, the more maintenance is required. Increased dependence on maintenance can make troubleshooting much harder. If the centralised hardware connecting the devices fails, the connected devices will no longer work.

## Bus Topology

This relies upon a single connection known as a backbone cable. All data for each device travels along the same cable, making it prone to becoming slow/bottlenecked if devices within the topology all request data simultaneously. This topology has little redundancy, meaning if the cable breaks the devices will no longer work. Bus topologies are easy and cost-efficient to set up.

## Ring Topology

This is also known as a token topology, in this, devices are directly connected to each other - forming a loop. Little cabling is required and there is less dependence on dedicated hardware. A ring topology sends data over the loop until it reaches the destined device, a device will only send received data from another device if it does not have any data to send itself. If it does, it will send its own data before sending the other data.

It is fairly easy to trace faults in this topology as there is only one direction for data to travel. However, this also isn't an efficient way for data to travel, as it must visit multiple devices before reaching its intended device. A single fault anywhere in the cable will cause the entire topology to fail.

# What is a switch?

A dedicated device within a network designed to aggregate other devices using Ethernet. Switches can connect a large number of devices together and are more efficient than hubs/repeaters. Switches track what device is connected to each port, this way they can send received packets to the intended target. Switches and routers can be connected to increase redundancy.

# What is a router?

A router connects networks and pass data between them. Routing is the label given to the process of transporting data across networks, routing is useful when devices are connected by many paths.

# A Primer on Subnetting

Subnetting is achieved by splitting the number of hosts which can fit within a network, represented by a subnet mask. A subnet mask is also made up of four sections (octets). Subnets use IP addresses in three different ways:

- Identify the network address
- Identify the host address
- Identify the default gateway

<table>
  <tr>
    <th>Type</th>
    <th>Purpose</th>
    <th>Explanation</th>
    <th>Example</th>
  </tr>
  <tr>
    <td>Network Address</td>
    <td>Identifies start of actual network, used to identify a network's existence.</td>
    <td>A device with IP 192.168.1.100 is on network 192.168.1.0</td>
    <td>192.168.1.0</td>
  </tr>
  <tr>
    <td>Host Address</td>
    <td>IP address here is used to identify a deice on a subnet.</td>
    <td>A device will have a network address of 192.168.1.1.</td>
    <td>192.168.1.100</td>
  </tr>
  <tr>
    <td>Default Gateway</td>
    <td>Default gateway is a special address assigned to a device capable of sending information to another network.</td>
    <td>Any data heading to a device on a different network will be sent to this device.</td>
    <td>192.168.1.254</td>
  </tr>
</table>

# ARP (Address Resolution Protocol)

ARP allows a device to associate its MAC address with an IP address on the network. Devices use ARP to find the MAC address of a device for communication. Each device on a network has a cache which stores the identifiers of other devices on the network. To map IP and MAC addresses, ARP sends two messages:

1. ARP Request
2. ARP Reply

<br/>When an ARP request is sent, a message is broadcast to other devices on the network, only the device that owns the IP address will respond with its MAC address. The requesting devices can now remember this mapping, and tore it in its ARP cache.

# DHCP (Dynamic Host Configuration Protocol)

IP addresses can be assigned manually or by using a DHCP server. When a device connects to a network, if it does not already have a manual IP address assignment, it will send out a DHCP Discover to see if any DHCP servers are on the network. The server will then respond with a DHCP Offer containing an IP address the device could use. The device will send a DHCP Request to confirm it wants the offered address. Lastly, the DHCP server sends a reply acknowledging that this is completed - a DHCP ACK. The process is as follows:

1. DHCP Discover
2. DHCP Offer
3. DHCP Request
4. DHCP ACK
