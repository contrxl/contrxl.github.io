---
title: REMnux Basics
layout: notes
---

REMnux is a specialised distribution providing a sandbox-like environment for dissecting potentially malicious software.

# File Analysis

`oledump.py` is a Python tool that comes with REMnux that can be used to analyse OLE2 files. These are Structured Storage or Compound File Binary Format files. OLE2 files are used to store multiple data types like documents, spreadsheets & presentations. Basic syntax is:

```bash
oledump.py [file_name]
```

<br/>To check out a data stream of interest, use:

```bash
oledump.py -s [n] [file_name]
```

<br/>This will select and dump info about the chosen data stream.

# Fake Network to Aid Analysis

INetSim can be used to simulate a real network. To setup INetSim:

1. Find your machines IP address with `ip a`
2. Edit the INetSim config file with `sudo vim /etc/inetsim/inetsim.conf`
3. Remove the hashtag from the line `#dns_default_ip` and set the IP to your machine IP
4. Run the tool with `sudo inetsim`

<br/>INetSim logs are saved in `/var/log/inetsim/report` and report all connections made when it was running.

# Pre-processing with Volatility
## PsTree

This lists processes based on their parent process ID:

```bash
vol3 -f [file_name] windows.pstree.PsTree
```

## PsList

This lists all active processes in the machine:

```bash
vol3 -f [file_name] windows.pslist.PsList
```

## CmdLine

This lists process command line arguments:

```bash
vol3 -f [file_name] windows.cmdline.CmdLine
```

## FileScan

This scans for file objects in a Windows memory image:

```bash
vol3 -f [file_name] windows.filescan.FileScan
```

## DllList

This lists loaded modules in a Windows memory image:

```bash
vol3 -f [file_name] windows.dlllist.DllList
```

## PsScan

This scans for parent processes present:

```bash
vol3 -f [file_name] windows.psscan.PsScan
```

## Malfind

This lists process memory ranges that potentially contain injected code:

```bash
vol3 -f [file_name] windows.malfind.Malfind
```

<br/>All the above can be combined and outputted to text files with the following:

```bash
for plugin in windows.malfind.Malfind windows.psscan.PsScan windows.pstree.PsTree windows.pslist.PsList windows.cmdline.CmdLine windows.filescan.FileScan windows.dlllist.DllList; do vol3 -q -f wcry.mem $plugin > wcry.$plugin.txt; done
```

# Pre-processing with Strings

ASCII, 16-bit little endian and 16-bit big-endian strings can be extracted by:

```bash
strings [file_name] > [file_name].ascii.txt
strings -e l [file_name] > [file_name].unicode_little_endian.txt
strings -e b [file_name] > [file_name].unicode_big_endian.txt
```