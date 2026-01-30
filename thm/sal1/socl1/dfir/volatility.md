---
title: Volatility
layout: notes
---

Volatility is a framework for extracting digital artifacts from RAM samples. It is built off multiple plugins working together to get information from a memory dump. To analyse a dump, you must first identify the image type.

# Memory Extraction

The following tools can be used to dump memory from a bare metal machine:

- FTK Imager
- Redline
- DumpIt.exe
- win32dd.exe / win64dd.exe
- Memoryze
- FastDump
    
<br/>For VMs, this can be done by taking the virtual memory file from the machines drive:

- VMWare: `.vmem`
- Hyper-V: `.bin`
- Parallels: `.mem`
- VirtualBox: `.sav` (only partial memory file)

# Identifying Image Info

Volatility can help identify where an image came from using the imageinfo plugin. This is only relevant if you are using Volatility2. In Volatility3, the following plugins can be used to extract info about the running host: `windows.info`, `linux.info`, `mac.info`. The syntax for this is:

```bash
python3 vol.py -f <file> windows.info
```

Listing Processes and Connections

- `pslist`: get list of processes from the doubly-linked list that tracks them in memory, output includes all current processes and terminated processes with exit times.
- `psscan`: list processes by finding data structures matching `_EPROCESS`, can cause false positives.
- `pstree`: list processes based on their parent process ID.
- `netstat`: attempt to identify all memory structures with a network connection.
- `dlllist`: list all DLLs associated with processes at the time of extraction.

# Hunting and Detection

- `malfind`: attempt to identify injected processes and their PIDS. Provides an offset address, hex, ASCII and disassembly view of infected area. Works by scanning heap and identifying processes with executable bit set RWE or RX and/or no memory-mapped file on disk.
- `yarascan`: search for strings, patterns and compound rules against a ruleset.

# Advanced Memory Forensics

Hooking is one of the most common techniques used by adversaries, there are five main methods:

1. SSDT Hooks
2. IRP Hooks
3. IAT Hooks
4. EAT Hooks
5. Inline Hooks
    
<br/>The `ssdt` plugin will search for hooking and output results, hooking can be used by legitimate applications. SSDT is System Service Descriptor Table and is used by the Windows Kernel to look up system functions. Adversaries can hook into this and point it to a location the rootkit controls. The `modules` plugin can be used to dump a list of loaded kernel modules which can help in finding active malware, but may miss idle/hidden malware. `driverscan` can be used to find drivers present on the system at extraction.