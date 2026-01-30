---
title: Nmap Basics
layout: notes
---

# Host Discovery

Nmap users a couple of different methods to identify targets:

- IP range with `-`, for example `192.168.1.0-10`
- IP subnet with `/`, for example `192.168.1.0/16`
- Hostname, for example `example.com`

# Scanning TCP Ports

A connect scan can be used with `-sT`, this tries to complete the TCP three-way handshake with every target port. A SYN scan can be initiated with `-sS`, this only sends the TCP SYN packet, leading to fewer logs. Nmap offers `-sU` to scan for UDP services.

# Limiting Targets

By default, Nmap scans the most common 1000 ports, if this is not what you are looking for, you can provide Nmap with other options:

- `-F`: fast mode, most common 100 ports
- `-p[RANGE]`: specify a port number or range of port numbers to scan.

# Version Detection

OS detection can be enabled by adding the `-O` option. This triggers nmap to make an educated guess about the target OS. Nmap can also detect versions of running services using the `-sV` option. Nmap can be asked to treat all hosts as online by using `-Pn`.

# Timing

Running scans at normal speeds may trigger IDS or other security solutions. Nmap provides six timing templates: paranoid (0), sneaky (1), polite (2), normal (3), aggressive (4), insane (5). These can be configured with the `-T[n]` option. The number of parallel service probes can be controlled with `--min-parallelism [n-probes]` and `--max-parallelism [n-probes]`. Similarly, `--min-rate [n]` and `--max-rate [n]` can be used to control the rate at which nmap sends packets per second. Finally, `--host-timeout [n]` can be specified to state the amount of time you are willing to wait before a host is considered down.

# Output

Sometimes nmap can take a long time, the `-v` option can be used to enable verbosity and get updates as it goes. The verbosity level can be increased up to four times, to a max of `-v4` or `-vvvv`. Debugging can be enabled with `-d` and can be increased to a max of `-d9`. Scan reports can be outputted in various formats:

- `-oN`: normal output
- `-oX`: XML output
- `-oG`: grep-able output
- `-oA`: all major formats
