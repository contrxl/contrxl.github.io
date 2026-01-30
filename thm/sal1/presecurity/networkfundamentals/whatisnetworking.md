---
title: What is Networking?
layout: notes
---

Networks are things connected. Networks are in all parts of life. In computing, a network can be be between two devices or hundreds and cover anything from computers to traffic lights.

# What is the internet?

The first iteration of the internet was ARPANET in the late 1960s. This was funded by the US DoD and was the first documented network in action. The modern internet was invented by Tim Berners-Lee in 1989. The internet is made up of many small networks joined together. A network can be one of two types:

- Public
- Private

# Identifying Devices on a Network

Devices on a network can be identified via:

- IP address
- Media Access Control (MAC) address

# IP Addresses

An IP address can be used to identify a host on a network for a period of time. An IP address is broken up as below:

<table>
  <tr>
    <th>Octet 1</th>
    <th>Octet 2</th>
    <th>Octet 3</th>
    <th>Octet 4</th>
  </tr>
  <tr>
    <td>192</td>
    <td>168</td>
    <td>1</td>
    <td>1</td>
  </tr>
  <tr>
    <td>0-255</td>
    <td>0-255</td>
    <td>0-255</td>
    <td>0-255</td>
  </tr>
</table>

The value of each octet summarises to be the IP address of the device. IP addresses can change between devices but must be unique on a network. Depending on where a device is determines what kind of IP address it has: public or private. A public IP identifies devices on the internet, whilst a private IP address identifies a device amongst other devices.

Public IP addresses are provided by ISPs for a monthly fee. It is becoming increasingly hard to get a public IP address that is not already in use. IPv4 provides 2<sup>32</sup> (4.29 billion) IP addresses. The new iteration of this, IPv6, provides 2<sup>128</sup> (340 trillion+) IP addresses and is more efficient due to new methodologies.

# MAC Addresses

All devices have a physical interface, a microchip board on the device's motherboard. The interface is assigned a unique address at the factory, called a MAC. The MAC address is a twelve-character hexadecimal number split into two's separated by a colon. The first six characters represent the company which made the device, and the last six are a unique number:

`a4:c3:f0:85:ac:2d`

MAC addresses can be spoofed when a networked devices pretends to identify as another. This can break poorly implemented security designs.

# Ping (ICMP)

Ping uses Internet Control Message Protocol (ICMP) packets to determine the performance of a connection between devices. The time taken between packets is measured using ICMP's echo packet and then ICMP's echo reply from the target device.