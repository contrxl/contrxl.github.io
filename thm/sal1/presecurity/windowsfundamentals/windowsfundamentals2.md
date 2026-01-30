---
title: Windows Fundamentals Part 2
layout: notes
---

# System Configuration

The system configuration utility (`MSConfig`) is for advanced troubleshooting and requires administrative rights to use. The utility has five tabs:

1. General: options for loading on boot - Normal, Diagnostic or Selective
2. Boot: allows definition of various boot options for the OS
3. Services: lists all services configured for the system regardless of state
4. Startup: usually blank, Windows advises using Task Manager for this
5. Tools: various utilities that can be used to configure the OS further

# Computer Management

The `compmgmt` utility has three sections: System Tools, Storage, and Services and Applications.

## System Tools

- Task Scheduler: create and manage common tasks the computer will carry out automatically.
- Event Viewer: view events that occurred on the computer, can be seen as an audit trail.
- Shared Folders: a complete list of shares and folders shared that others can connect to.
- Local Users and Groups: same as lusrmgr.msc.
- Performance: utility called perfmon for viewing performance data.
- Device Manger: allows you to view and configure hardware.
- Storage: disk management utility and Windows Server backup.

# System Information

The information in `msinfo32` is divided into three sections:

1. Hardware Resources: detailed information about hardware on the device
2. Components: specific information about hardware devices installed on the computer
3. Software Environment: information about software baked into the OS, also displays Environment Variables and Network Connections.

# Resource Monitor

This tool displays aggregate CPU, memory, disk and network usage per-process. The `resmon` tool has four sections:

1. CPU
2. Disk
3. Network
4. Memory