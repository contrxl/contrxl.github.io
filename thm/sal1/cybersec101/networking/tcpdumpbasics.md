---
title: TCPDump Basics
layout: notes
---

# Basic Packet Capture

First, you must specify the interface to use by using the `-i [INTERFACE]` argument. You can choose to listen on all interfaces with `-i any`. You can list all interfaces with `ip a s`. Captured packets can be saved to a file using `-w [FILENAME]`. Packets can be read from a previously saved file with `-r [FILENAME]`. A specific number of packets to capture can be chosen with `-c [NUMBER]`. You can use `-n` to prevent DNS resolution, and `-nn` to prevent DNS or port number resolution. To print more verbose output, you can use `-v`, `-vv`, or `-vvv` for increasing levels of verbosity.

# Filtering Expressions

You can limit captured packets to a specific host with `host [IP/HOSTNAME]`. To limit this to a particular source host, you can use `src host [IP/HOSTNAME]`, you can also do this for destination with `dst host [IP/HOSTNAME]`. Specific ports can be filtered by using `port [NUMBER]`. You can specify source or destination port with `src port [NUMBER]` or `dst port [NUMBER]` respectively. Packet capture can be limited to a specific protocol simply by specifying the protocol name. Standard logical operators can be also be used like `and`, `or` and `not`.

# Advanced Filtering

Packets displayed can be filtered to those smaller than or greater than a certain length using `greater [LENGTH]` and `less [LENGTH]` respectively. The `man` page can be checked with `man pcap-filter`. Packets can be filtered based on the contents of a header byte. The contents of a byte in the header can be referenced in `tcpdump` using `proto[expr:size]` where:

- `proto`: the protocol in use, ARP, ICMP, IP etc.
- `expr`: the byte offset, where 0 is the first byte
- `size:` the number of bytes you are interested in, can be one two or four.

<br/>`tcp[tcpflags]` can be used to refer to TCP flags, the following TCP flags are available for comparison:

- tcp-syn
- tcp-ack
- tcp-fin
- `tcp-rst
- tcp-push

# Displaying Packets

There are many options for displaying how packets are printed and displayed:

- `-q`: quick output, prints brief info
- `-e`: print link level header
- `-A`: show data in ASCII
- `-xx`: show data in hexadecimal format
- `-x`: show packet headers and data in hex and ASCII
