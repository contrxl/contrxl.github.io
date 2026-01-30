---
title: GoBuster
layout: notes
---
# Overview

Gobuster is an open-source tool written in Golang, it can enumerate web directories, DNS subdomains, vhosts, Amazon S3 buckets and Google Cloud storage. `gobuster --help` can be used to view the help page, some common flags are:

<table>
  <tr>
    <th>Short Flag</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>-t</td>
    <td>Configures number of threads per scan, default is 10</td>
  </tr>
  <tr>
    <td>-w</td>
    <td>Define wordlist to use for iterating</td>
  </tr>
  <tr>
    <td>--delay</td>
    <td>Define amount of time to wait between sending requests</td>
  </tr>
  <tr>
    <td>--debug</td>
    <td>Helps troubleshooting</td>
  </tr>
  <tr>
    <td>-o</td>
    <td>Writes enumeration results to an output file</td>
  </tr>
</table>

An example command would be:

```bash
gobuster dir -u "http://example.com" -w /usr/share/wordlists/dirb/small.txt -t 64
```

# Directory and File Enumeration

`dir` mode allows website directories and their files to be enumerated. Gobusters `dir` mode has many flags available to help fine tune it:

<table>
  <tr>
    <th>Flag</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>-c</td>
    <td>Configures a cookie to pass with each request</td>
  </tr>
  <tr>
    <td>-x</td>
    <td>Specify extensions to scan for e.g. php or js</td>
  </tr>
  <tr>
    <td>-H</td>
    <td>Configures a header to pass with each request</td>
  </tr>
  <tr>
    <td>-k</td>
    <td>Skips certificate checking, often used in CTF events</td>
  </tr>
  <tr>
    <td>-n</td>
    <td>Don't display status codes</td>
  </tr>
  <tr>
    <td>-P</td>
    <td>Can be used with --username to perform authenticated requests</td>
  </tr>
  <tr>
    <td>-s</td>
    <td>Configure which status codes of responses you want to see</td>
  </tr>
  <tr>
    <td>-b</td>
    <td>Configure which status codes of responses you don't want to see</td>
  </tr>
  <tr>
    <td>-U</td>
    <td>Can be used with --password to perform authenticated requests</td>
  </tr>
  <tr>
    <td>-r</td>
    <td>Configure gobuster to follow redirects</td>
  </tr>
</table>

To use Gobuster in dir mode:

```bash
gobuster dir -u "http://example.com" -w /path/to/wordlist
```

# Subdomain Enumeration

`dns` mode allows Gobuster to brute force subdomains. `dns` mode has fewer flags than `dir`, some common ones are:

<table>
  <tr>
    <th>Flag</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>-c</td>
    <td>Show CNAME records (can't be used with -i)</td>
  </tr>
  <tr>
    <td>-i</td>
    <td>Shows IP addresses</td>
  </tr>
  <tr>
    <td>-r</td>
    <td>Sets custom DNS resolver</td>
  </tr>
  <tr>
    <td>-d</td>
    <td>Set domain to enumerate</td>
  </tr>
</table>

To use Gobuster in dns mode:

```bash
gobuster dns -d example.com -w /path/to/wordlist
```

# Vhost Enumeration

`vhost` mode allows Gobuster to brute force virtual hosts, these are different websites running on the same machine. `vhost` offers flags similar to `dir` mode, some common flags are:

<table>
  <tr>
    <th>Flag</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>-u</td>
    <td>Specify base URL</td>
  </tr>
  <tr>
    <td>--append-domain</td>
    <td>Appends a base domain to each word in the wordlist</td>
  </tr>
  <tr>
    <td>-m</td>
    <td>Specify the HTTP method to use</td>
  </tr>
  <tr>
    <td>--domain</td>
    <td>Appends a domain to each wordlist entry to form a valid hostname</td>
  </tr>
  <tr>
    <td>--exclude-length</td>
    <td>Exclude results based on length of response body</td>
  </tr>
  <tr>
    <td>-r</td>
    <td>Follow redirects</td>
  </tr>
</table>

To use Gobuster in vhost mode:

```bash
gobuster vhost -u "http://10.10.10.10" --domain example.com -w /path/to/wordlist
```