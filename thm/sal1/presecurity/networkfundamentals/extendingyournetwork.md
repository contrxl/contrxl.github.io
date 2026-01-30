---
title: Extending your Network
layout: notes
---

# Port Forwarding

Port forwarding is essential for connecting applications and services to the internet. Port forwarding behaviour is often confused with that of a firewall, however, port forwarding opens specific ports whilst firewalls determine if traffic can travel across them.
Firewalls

A firewall is responsible for determining what traffic can enter and exit. A firewall can be configured to permit or deny traffic from entering or exiting based on numerous factors like:

- Where the traffic comes from
- Where the traffic is going to
- What port the traffic is for
- What protocol the traffic is using

<br/>There are two primary types of firewall:
    
1. Stateful: uses the entire info from a connection rather than individual packet inspection. Consumes many resources compared to stateless firewalls as its decision making is dynamic. If a connection from a host is bad, it will block the entire device.    
2. Stateless: uses static rules to determine whether individual packets are acceptable or not. These use less resources, but are dumber. These are only as effective as the rules defined within them.

# VPN Basics

A VPN is technology that allows devices on separate networks to communicate securely by creating a dedicated path (tunnel) over the internet. VPNs have many benefits:

<table>
  <tr>
    <th>Benefit</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>Allows networks in different geographical locations to be connected</td>
    <td>Businesses with multiple offices find VPNs beneficial, resources are accessible from each office</td>
  </tr>
  <tr>
    <td>Offers privacy</td>
    <td>VPN technology protects data with encryption, can help protect traffic</td>
  </tr>
  <tr>
    <td>Offers anonymity</td>
    <td>Used by journalists or activists to safely report on global issues in countries where freedom of speech may be controlled</td>
  </tr>
</table>

There are various VPN technologies:

- PPP: used by PPTP to allow authentication and data encryption. Private key and public certificate must match for a connection to be made.
- PPTP: Point-to-Point Tunnelling Protocol allows data from PPP to leave a network. Easy to setup and is supported by most devices, has weak encryption.
- IPSec: Internet Protocol Security encrypts data using the IP framework. Difficult to setup compared to alternatives.

# LAN Networking Devices

- Router: connects networks and passes data between them via routing. Involves creating a path between networks, routers operate on layer 3 of the OSI model. Routing is useful when devices are connected by many paths. Routers are dedicated devices and do not perform the same function as switches.
- Switch: dedicated device responsible for providing a means of connecting to multiple devices. Switches can operate at layer 2 and layer 3 of the OSI model. Layer 3 switches are more sophisticated than layer 2 and can perform some of the responsibilities of a router.