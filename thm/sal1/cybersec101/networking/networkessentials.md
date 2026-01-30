---
title: Networking Essentials
layout: notes
---

# DHCP

DHCP is an application level protocol relying on UDP port 67 for receiving and UDP port 68 for sending. There are four steps in DHCP:

1. DHCP Discover: Client broadcasts DHCPDISCOVER message seeking local DHCP server
2. DHCP Offer: Server sends a DHCPOFFER message with IP for the client to accept
3. DHCP Request: Client responds with a DHCPREQUEST to indicate it has accepted
4. DHCP Acknowledge: Server responds with a DHCPACK message to confirm

<br/>At the end of a DHCP exchange, your device receives the following from the DHCP server:

- Leased IP address
- Gateway to route packets outside local network
- DNS server to resolve domain names

# ARP: Bridging Layer 3 Addressing to Layer 2 Addressing

ARP makes it possible to find the MAC address of another device over Ethernet. An ARP request will be sent from the MAC address of the requester to the broadcast MAC address ff:ff:ff:ff:ff:ff:ff:ff. The ARP reply will then return with the IP address and MAC address.

# Routing

Some important routing protocols to know are:

- OSPF (Open Shortest Path First): allows routers to share information about network topology by having routers exchange updates about their connected links and networks.
- EIGRP (Enhanced Interior Gateway Routing Protocol): CISCO proprietary protocol which combines aspects of different routing algorithms. Routers share information like bandwidth and delay associated with routes.
- BGP (Border Gateway Protocol): primary routing protocol over the internet, allows networks like ISPs to exchange information and establish data paths.
- RIP (Routing Information Protocol): simple routing protocol used in small networks. Routers share information about networks they can reach and number of hops required to get there.

# NAT

Network Address Translation allows one public IP address to provide access to the internet for many private IP addresses.