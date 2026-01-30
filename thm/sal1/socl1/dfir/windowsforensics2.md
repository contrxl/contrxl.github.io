---
title: Windows Forensics Part 2
layout: notes
---

# FAT File Systems

File Allocation Table has been the default file system for Microsoft OS since the 1970s, and is still in use today (but is no longer the default). FAT creates a table which indexes the location of bits allocated to different files. The FAT file system supports the following data structures:

- Clusters: a basic storage unit of the FAT file system, each file on a device can be considered a group of clusters containing bits of information.
- Directory: contains info about file identification like file name, starting cluster and filename length.
- File Allocation Table: a linked list of all the clusters, it contains the status of the cluster and the pointer to the next cluster in the chain.
    
<br/>The FAT format divides disk space into clusters for more straightforward addressing, the number of clusters depends on the number of bits used to address the cluster. FAT was initially developed with 8-bit cluster addressing, but it developed into FAT12, FAT16 and FAT32.

<table>
  <tr>
    <th>Attribute</th>
    <th>FAT12</th>
    <th>FAT16</th>
    <th>FAT32</th>
  </tr>
  <tr>
    <td>Addressable Bits</td>
    <td>12</td>
    <td>16</td>
    <td>28</td>
  </tr>
  <tr>
    <td>Max Number of Clusters</td>
    <td>4,096</td>
    <td>65,546</td>
    <td>268,435,456</td>
  </tr>
  <tr>
    <td>Supported Size of Clusters</td>
    <td>512B-8KB</td>
    <td>2KB-32KB</td>
    <td>4KB-32KB</td>
  </tr>
  <tr>
    <td>Maximum Volume Size</td>
    <td>32MB</td>
    <td>2GB</td>
    <td>2TB</td>
  </tr>
</table>

Although the max size for FAT32 is 2TB, Windows limits formatting to a max of 32GB. FAT16 and FAT32 are still in use for USB drives, SD cards or digital cameras.

# exFAT File System

This is now the default for any SD card larger than 32GB, it supports a cluster size of 4KB-32MB. It has a max file size and volume size of 128PB. It can have a max of 2,796,202 files per directory.
NTFS File System

New Technology File System was introduced in 1993 with Windows NT 3.1. This resolves many issues with FAT and has lots of new features:

- Journaling: keeps a log of changes to metadata in the volume, helps system recover from a crash or data movement. This is stored in `$LOGFILE` in the volume root directory.
- Access Controls: allows a user to be defined as the owner of a file/directory.
- Volume Shadow Copy: keeps track of changes made using volume shadow copies, this lets users restore previous file versions for recovery or restore.
- Alternate Data Streams: ADS allows files to have multiple streams of data, allowing security features like mark of the web.
- Master File Table: MFT is much more extensive than FAT. It is a structured database which tracks objects stored in a volume. Some critical files stored in here are:
    1. `$MFT`: first record in the volume, the Volume Boot Record (VBR) points to the cluster where it is located. Stores info about clusters where other objects present on the volume are located.
    2. `$LOGFILE`: stores transactional logging of the file system and helps maintain integrity in the event of a crash.
    3. `$UsnJrnl`: Update Sequence Number Journal, present in the $Extend record and holds info about all files changed in the file system and the reason for the change.

# Recovering Deleted Files

A disk image is a file containing a bit-by-bit copy of a disk drive, this saves all data in a disk image file to a single file.

# Evidence of Execution
## Windows Prefetch Files

When a program runs, it stores information for future use in `C:\Windows\Prefetch`. These files have a `.pf` extension and contain last run time of applications, number of times run, and any files/device handles used by the files. `PECmd.exe` (Prefetch Parser) can be used from Eric Zimmerman's tools for parsing prefetch files. To use `PECmd.exe`:

```
PECmd.exe -f|-d <path-to-file/directory> --csv <path-to-save>
```

## Windows 10 Timeline

Recently used apps and files are stored in an SQLite database called the Windows 10 Timeline. This contains the app that was executed and the focus time of the application. The timeline can be found at `C:\Users\<username>\AppData\Local\ConnectedDevicesPlatform\{randomfolder}\ActivitiesCache.db`. This can be parsed with Eric Zimmerman's `WxTCmd.exe` using:

```
WxTCmd.exe -f <path-to-timeline> --csv <path-to-save>
```

## Windows Jump Lists

Jumplists were introduced to help users go directly to their recently used files, jumplists can be viewed by right-clicking an applications icon in the taskbar to see recently opened files. Jumplists are stored at `C:\Users\<username>\AppData\Roaming\Microsoft\Windows\Recent\AutomaticDestinations`. Eric Zimmerman's `JLECmd.exe` can be used to parse jumplists:

```
JLECmd.exe -f <path-to-jumplist> --csv <path-to-save>
```

# File/Folder Knowledge
## Shortcut Files

A shortcut file is created for every file opened locally/remotely. The shortcut files contain information about first/last opened times of the file and the path of the opened file, these files can be found at:

- `C:\Users\<username>\AppData\Roaming\Microsoft\Windows\Recent\`
- `C:\Users\<username>\AppData\Roaming\Microsoft\Office\Recent\`


<br/>Eric Zimmerman's `LECmd.exe` can parse shortcut files using:

```
LECmd.exe -f <path-to-shortcut> --csv <path-to-save>
```

## IE/Edge History

IE/Edge browsing history includes files opened whether they were opened by the browser or not, the history can be accessed via:

```
C:\Users\<username>\AppData\Local\Microsoft\Windows\WebCache\WebCacheV*.dat
```

<br/>The files/folders accessed will appear with a `file:////*` prefix in IE/Edge history.

# External Devices/USB Forensics

When a device is attached to a system, information is stored in `setupapi.dev.log`, this log is stored in `C:\Windows\inf\setupapi.dev.log`.