---
title: Windows Fundamentals Part 1
layout: notes
---

# Windows Editions

Windows dates back to 1985 and is currently the most dominant OS in use for home and corporate networks. Windows 11 is the current version of Windows for devices, and Server 2025 is the current version of Windows for servers.

# The File System

The Windows file system is called NTFS (New Technology File System). Before NTFS, there was FAT16/FAT32 (File Allocation Table) and HPFS (High Performance File System). FAT partitions are still in use today on various USB devices and SD cards. NTFS addresses many limitations of previous systems, like:

- Supports files over 4GB in size
- Set specific permissions on folders and files
- Folder and file compression
- Encryption
    
<br/>The specific permissions that can be set by NTFS are:

<table>
  <tr>
    <th>Permission</th>
    <th>Meaning for Folders</th>
    <th>Meaning for Files</th>
  </tr>
  <tr>
    <td>Read</td>
    <td>Permits viewing and listing of files and subfolders</td>
    <td>Permits viewing or accessing the files contents</td>
  </tr>
  <tr>
    <td>Write</td>
    <td>Permits adding of files and subfolders</td>
    <td>Permits writing to a file</td>
  </tr>
  <tr>
    <td>Read & Execute</td>
    <td>Permits viewing and listing of files and subfolders as well as executing of files; inherited by files and folders</td>
    <td>Permits viewing and accessing of the files contents as well as executing of the file</td>
  </tr>
  <tr>
    <td>List Folder Contents</td>
    <td>Permits viewing and listing of files and subfolders as well as executing of files; inherited by folders only</td>
    <td>N/A</td>
  </tr>
  <tr>
    <td>Modify</td>
    <td>Permits reading and writing of files and subfolders, allows deletion of the folder</td>
    <td>Permits reading and writing of the file; allows deletion of the file</td>
  </tr>
  <tr>
    <td>Full Control</td>
    <td>Permits reading, writing, changing and deleting of files and subfolders</td>
    <td>Permits reading, writing, changing and deleting of the file</td>
  </tr>
</table>

Another feature of NTFS is Alternate Data Streams (ADS). Every file has at least one data stream (`$DATA`). ADS allows files to contain more than one stream of data, this cannot be viewed natively and has been used by threat actors to hide data in the past.

# The Windows\System32 Folders

Traditionally, the OS is held in C:\Windows. Within this, a folder exists called System32. This folder holds files and folders critical to the OS and it should be handled with extreme caution. Deleting items from here can render Windows inoperational.

# User Accounts, Profiles and Permissions

User accounts can be Administrators or Standard Users. An administrator can make changes to the system itself, whilst a standard user can only make changes to files/folders attributed to them.

# User Account Control

Most home users are logged in as local administrators. Users don't need to run as administrator for simple tasks like browsing the internet or editing documents as it introduces unnecessary risk. To protect the user, Microsoft introduced UAC (User Account Control). This works by prompting the user if they wish to perform an operation using higher level privileges, rather than immediately running it.