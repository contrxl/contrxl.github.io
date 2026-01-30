---
title: TShark Basics
layout: notes
---

# Command Line Packet Analysis

- `capinfos`: provides details of a specific file
- `grep`: search in plain text data
- `cut`: cut parts of lines
- `uniq`: filter repeated lines/values
- `nl`: views number of shown lines
- `sed`: stream editor
- `awk`: scripting language that helps pattern search

# Main Parameters I

- `tshark -h`: display help page
- `tshark -v`: display version info
- `tshark -D`: list available sniffing interfaces
- `tshark -i [n]`: choose interface to capture traffic on

# Main Parameters II

- `tshark -r [file]`: read/input function
- `tshark -c 10`: packet count
- `tshark -w [file]`: write sniffed traffic to file
- `tshark -V`: verbose mode
- `tshark -q`: silent mode
- `tshark -x`: display packet bytes

# Capture Condition Parameters

- `tshark -w [file] -a duration:1`: sniff traffic and stop after X seconds
- `tshark -w [file] -a filesize:10`: define max capture file size
- `tshark -w [file] -a filesize:10 -a files:3`: define max file size and stop after x files

<br/>`-a` in the above means "Autostop", this will run the capture conditions for only a single loop, `-b` can be used to define capture conditions for multiple runs/loops.

# Capture vs. Display Filters

- `-f`: capture filters, same as WireShark
- `-Y`: display filters, same as WireShark

# Capture Filters

- `tshark -f "host 10.10.10.10"`: filter a host
- `tshark -f "net 10.10.10.0/24"`: filter a range
- `tshark -f "port 80"`: filter a port
- `tshark -f "portrange 80-100"`: filter a port range
- `tshark -f "src host 10.10.10.10"`: filter source IP
- `tshark -f "dst host 10.10.10.10"`: filter destination IP
- `tshark -f "tcp"`: filter tcp
- `tshark -f "ether host AA:AA:AA:AA:AA:AA:AA:AA`: filter MAC address
- `tshark -f "ip proto 1"`: filter IP protocol number assigned by IANA

# Display Filters

- `tshark -Y "ip.addr == 10.10.10.10"`: filter IP with no direction specified
- `tshark -Y "ip.addr == 10.10.10.0/24"`: filter network range
- `tshark -Y "ip.src == 10.10.10.10"`: filter source IP
- `tshark -Y "ip.dst == 10.10.10.10"`: filter destination IP
- `tshark -Y "tcp.port == 80"`: filter TCP port
- `tshark -Y "tcp.srcport == 80"`: filter source TCP port
- `tshark -Y "http"`: filter HTTP packets
- `tshark -Y "http.response.code == 200"`: filter HTTP packets with response code 200
- `tshark -Y "dns"`: filter DNS packets
- `tshark -Y "dns.qry.type == 1"`: filter all DNS A packets
