---
title: TShark CLI Features
layout: notes
---

# Features: Statistics

- `tshark --color`: WireShark-like colourised output
- `tshark -z help`: help with various statistics options
- `tshark -z filter`: sample usage
- `tshark -z io,phs -q`: protocol hierarchy
- `tshark -z io,phs,udp -q`: protocol hierarchy, focused on UDP
- `tshark -z plen,tree -q`: view general distribution of packets by size in a tree view
- `tshark -z endpoints,ip -q`: view IP endpoints, eth,ip,ipv6,tcp,udp,wlan can also be used in place of ip
- `tshark -z conv,ip -q`: view conversations
- `tshark -z expert -q`: view expert info

#  Features: Statistics II

- `tshark -z ptype,tree -q`: filter available protocol types and details
- `tshark -z ip_hosts,tree -q`: view all IP hosts in tree format
- `tshark -z ip_srcdst,tree -q`: view all source & destination addresses in tree format
- `tshark -z dests,tree -q`: view all destination addresses in tree format
- `tshark -z dns,tree -q`: view all DNS packets by summarising the available info
- `tshark -z http,tree -q`: packet and status counter for HTTP
- `tshark -z http2,tree -q`: packet and status counter for HTTP2
- `tshark -z http_srv,tree -q`: load distribution
- `tshark -z http_req,tree -q`: requests
- `tshark -z http_seq,tree -q`: requests and responses

# Features: Streams, Objects and Credentials

- `tshark -z follow,tcp,ascii,[n] -q`: follow TCP streams
- `tshark -z follow,udp,ascii,[n] -q`: follow UDP streams
- `tshark -z follow,http,ascii,[n] -q`: follow HTTP streams
- `tshark --export-objects dicom|http|imf|smb|tftp,/path/to/save -q`: export objects
- `tshark -z credentials -q`: get credentials

# Advanced Filtering

- `contains`: search a value inside packets (case sensitive)
- `matches`: search a pattern inside packets (case insensitive)
- `tshark -T fields -e ip.src -e ip.dst -E header=y`: extract fields from a packet
- `tshark -Y "http.server contains "Apache""`: filter for packets where HTTP server contains Apache
- `tshark -Y "http.server contains "Apache"" -T fields -e ip.dst -e http.server -E header=y`: filter for packets where HTTP server contains Apache and only show `ip.dst` and `http.server` fields
- `tshark -Y "http.request.method matches "(GET|POST)"`: filter for requests which match GET or POST

# Use Cases

- `tshark -r [file] -T fields -e dhcp.option.hostname`: extract hostnames
- `tshark -r [file] -T fields -e dhcp.option.hostname | awk NF | sort -r | uniq -c | sort -r`: organise output
- `tshark -r [file] -T fields -e dns.qry.name | awk NF | sort -r | uniq -c | sort -r`: extract DNS queries
- `tshark -r [file] -T fields -e http.user_agent | awk NF | sort -r | uniq -c | sort -r`: extract user agents