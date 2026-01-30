---
title: Types of Firewall
layout: notes
---

# Stateless Firewall

Operates on layer 3 and 4 of the OSI model, works solely by filtering data based on predetermined rules without noting previous connections. These can process packets very quickly but they cannot process complex policies based on its relationship with previous connections.

# Stateful Firewall

Keeps track of previous connections by storing them in a state table, adds another layer of security by inspecting packets based on their history with connections. These operate on layer 3 and 4 of the OSI model.

# Proxy Firewall

Proxy firewalls act as intermediaries between private networks and the Internet, they operate on the OSI model's layer 7. They inspect the content of all packets a well, content-filtering policies can be applied to these to allow/deny incoming and outgoing traffic.

# Next-Generation Firewall (NGFW)

Most advanced type of firewall - operates from layer 3 to layer 7. This offers deep packet inspection to enhance security incoming and outgoing network traffic. NGFWs have SSL/TLS decryption capabilities.

# Firewall Rules

The basic components of a firewall's rules are described below:

- Source Address: Machine IP that originates traffic
- Destination Address: Machine IP that receives traffic
- Port: port number for traffic
- Protocol: protocol to use during communication
- Action: defines actions to be taken upon identifying any traffic
- Direction: defines rules applicability to incoming or outgoing traffic

# Types of Action

- Allow: indicates particular traffic defined inside the rule is permitted
- Deny: traffic defined inside the rule is blocked and not permitted
- Forward: redirects traffic to a different network segment using forwarding rules created on the firewall

# Windows Defender

There are two available network profiles in the Defender firewall:

- Private: firewall configurations for your home network
- Public: firewall configurations for public/untrusted networks.

# Linux iptables

Linux has multiple firewall options:

- Netfilter: includes packet filtering, NAT, connection traffic and serves as a foundation for the various available firewall utilities. This is utilised by iptables, nftables and firewalld to name a few.
- ufw: uncomplicated firewall eliminates complications of making rule sin a complex syntax. It is beginner friendly.
