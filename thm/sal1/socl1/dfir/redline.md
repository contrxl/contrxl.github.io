---
title: Redline
layout: notes
---

Among other things, RedLine can:

- Collect registry data from Windows hosts
- Collect running processes
- Collect memory images (before Win 10)
- Collect browser history
- Check for suspicious strings

# Data Collection

- Standard Collector: the minimum amount of data required for analysis, fastest collection method.
- Comprehensive Collector: gathers the most data possible from a host and can take over an hour.
- IOC Search Collector (Windows Only): collects data matching IOCs created in the IOC editor.

# Interface

Once data is imported, different types of analysis data will be available on the left:

- System Information: info about the machine, BIOS (Windows only), OS and user info
- Processes: different attributes like process name, PID, path, arguments, parent process, username etc. Processes has four sub categories:
    1. Handle: connection from a process to an object or resource in Windows OS
    2. Memory Sections: unsigned memory sections used by processes
    3. Strings: info on captured strings
    4. Ports: review suspicious connections from ports and IP addresses
- File System
- Registry
- Windows Services
- Tasks
- Event Logs
- ARP and Route Entries
- Browser URL History
- File Download History
    
<br/>The full Redline user guide can be viewed [here](https://fireeye.market/assets/apps/211364/documents/877936_en.pdf).
