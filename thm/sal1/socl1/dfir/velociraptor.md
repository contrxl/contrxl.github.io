---
title: Velociraptor
layout: notes
---

# Deployment

Velociraptor can run on Windows, Linux and MacOS acting as a server or client. It is also compatible with cloud file system like Amazon EFS and Google FIlestore.

# Interacting with Client Machines

Clients can be viewed by clicking the magnifying glass next to the search bar with an empty search query. This will display info about the machine:

- Online State: green means online and communicating, yellow means no communication received in 24hrs, red means no communication in over 24hrs.
- Client ID: unique ID assigned by Velociraptor, always starts with "C".
- Hostname: name the client identifies itself with to Velociraptor
- OS Version: details regarding client OS
- Labels: useful for identifying clients as a group
    
<br/>Clicking any client will show more info, the "Overview" tab shows:

- Client ID
- Agent Version
- Agent Name
- Last Seen At
- Last Seen IP
- Operating System
- Hostname
- Release
- Architecture
- Client Metadata
    
<br/>The "VQL Drilldown" tab will show memory and CPU over 24hrs, the AD domain if the client is domain-joined. The orange data is memory and blue is CPU. The "Shell" tab allows commands to be executed remotely on the remote machine. The "Collected" tab shows results from any commands executed from shell previously. Clicking any FlowId will produce data on that artifact/collection. The "Interrogate" tab will interrogate the host for basic info and populate "Collected" with `Generic.Client.Info`.

# Virtual File System

VFS can be useful where you need to inspect artifacts on a client. There are four folders here:

1. file: uses OS APIs to access files
2. ntfs: uses raw NTFS parsing to access low level files
3. registry: uses OS APIs to access Windows Registry
4. artifacts: previously run collections

<br/>The three icon options from left to right are:

1. Refresh current directory (sync from client)
2. Recursively refresh directory (sync from client)
3. Recursively download from client

# Velociraptor Query Language (VQL)

Custom queries can be logged in the "Notebooks" tab. Notebooks have two languages: Markdown and VQL.