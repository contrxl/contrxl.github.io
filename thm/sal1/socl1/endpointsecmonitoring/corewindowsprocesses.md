---
title: Core Windows Processes
layout: notes
---

# Task Manager

GUI utility to see what is running on the system, can be used to kill processes. By default, Task Manager opens in the "Processes" tab and displays "Apps", "Background Processes" and "Windows Processes". You can right click any column header to add additional headers. Useful headers are:

- Type: App, Background Process or Windows Process
- Publisher: Program author
- PID: Process Identifier Number
- Process Name: File name of the process
- Command Line: Full command used to launch the process
- CPU: Amount of CPU being used
- Memory: Amount of physical memory being used

<br/>In the "Details" tab, some useful headers to add are:

- Image Path Name: shows the full path name of the process
- Command Line: shows command used to launch the process
- Parent Process Information: shows parent process of task

# System

The PID for `System` is always 4. The `System` process is the home for a special type of thread that only runs in kernel mode. `System` threads have no user process address space and must allocate any dynamic storage from OS memory heaps. Typical properties for `System` are:

- Image Path: `C:\Windows\system32\ntoskrnl.exe`
- Parent Process: `System Idle Process (0)`
- Number of Instances: One
- User Account: Local System
- Start Time: At Boot Time

<br/>Unusual behaviour for this process would include:

- A parent process other than `System Idle Process (0)`
- Multiple instances of `System`
- A PID other than 4
- Not running in session 0

# System -> smss.exe

Session Manager Subsystem (Windows Session Manager) is responsible for creating new processes and is the first user-mode process started by the kernel. This process starts the kernel and user modes of the Windows subsystem, this includes `win32k.sys` (kernel mode), `winsrv.dll` (user mode) and `csrss.exe` (user mode).

Smss.exe starts `csrss.exe` and `wininit.exe` in Session 0 which is an isolated Windows sessions for the OS, and `csrss.exe` and `winlogon.exe` for Session 1 which is the user session. The first child instance creates child instances in new sessions by copying itself (`smss.exe`) into the new session and self-terminating. Any other subsystem listed in the Required value of `HKLM\System\CurrentControlSet\Control\Session Manager\Subsystems` is also launched. Normal properties of `smss.exe` are:

- Image Path: `%SystemRoot%\System32\smss.exe`
- Parent Process: `System`
- Number of Instances: One master instance and one child instance per session. The child exists after the session is created.
- User Account: Local System
- Start Time: Within seconds of boot time for master instance
    
<br/> Unusual behaviour for this process would include:
    
- A parent process other than `System (4)`
- Image path other than `C:\Windows\System32`
- More than one running process
- The running user is not the `SYSTEM` user
- Unexpected registry entries for Subsystem

# csrss.exe

Client Server Runtime Process is the user-mode side of the Windows subsystem. It is always running and is critical to system operation, it is responsible for the Win32 console window and process thread creation/deletion. This is also responsible for making the Windows API available to other processes, mapping drive letters and handling shutdown. Normal properties of `csrss.exe` are:

- Image Path: `%SystemRoot%\System32\csrss.exe`
- Parent Process: Created by an instance of `smss.exe`
- Number of Instances: Two or more
- User Account: Local System
- Start Time: Within seconds of boot time for Session 0 and 1
    
<br/>Unusual behaviour for this process would include:

- An actual parent process (`smss.exe` calls this then self-terminates)
- Image file path other than `C:\Windows\System32`
- Subtle misspellings to hide rogue processes
- The running user is not the `SYSTEM` user

# wininit.exe

Windows Initialization Process is responsible for launching `services.exe`, `lsass.exe` and `lsaiso.exe` within Session 0. Normal properties of `wininit.exe` are:

- Image Path: `%SystemRoot%\System32\wininit.exe`
- Parent Process: Created by an instance of `smss.exe`
- Number of Instances: One
- Start Time: Within seconds of boot time
    
<br/>Unusual behaviour of this process is:

- An actual parent process (`smss.exe` calls this then self-terminates)
- Image file path other than `C:\Windows\System32`
- Subtle misspellings to hide rogue processes
- Multiple running instances
- The running user is not the `SYSTEM` user

# wininit.exe -> services.exe

Service Control Manager is primarily responsible for loading services, interacting with services and starting/ending services. Information regarding services is stored in registry under `HKLM\System\CurrentControlSet\Services`. This process also loads device drivers marked as auto-start into memory. When a user logs on successfully, this process sets the value of the Last Known Good Configuration at `HKLM\System\Select\LastKnownGood` into the `CurrentControlSet`. Normal properties of `services.exe` are:

- Image Path: %SystemRoot%\System32\services.exe
- Parent Process: wininit.exe
- Number of Instances: One
- User Account: Local System
- Start Time: Within seconds of boot time

<br/>Unusual behaviour for this process is:

- A parent process other than `wininit.exe`
- Image file path other than `C:\Windows\System32`
- Subtle misspellings to hide rogue processes
- The running user is not the `SYSTEM` user

# wininit.exe -> services.exe -> svchost.exe

The Service Host is responsible for hosting and managing Windows services. Services running in this process are implemented as DLLs, the DLL to implement is stored at `HKLM\SYSTEM\CurrentControlSet\Services\SERVICENAME\Parameters`. Legitimate service DLLs always have `-k`, a key identifier, in their binary path. This parameter is for grouping similar services which share the same process. From Windows 10 V1703 onwards, on machines with over 3.5GB RAM, each service runs its own process. Normal properties of `svchost.exe` are:

- Image Path: `%SystemRoot%\System32\svchost.exe`
- Parent Process: `services.exe`
- Number of Instances: Many
- User Account: Can be `SYSTEM`, `Network Service`, `Local Service`, depends on the `svchost.exe` instance
- Start Time: Typically within seconds of boot time
    
<br/>Unusual behaviour for this process is:

- A parent process other than `services.exe`
- Image file path other than `C:\Windows\System32`
- Subtle misspellings to hide rogue processes
- The absence of the `-k` parameter

# lsass.exe

Local Security Authority Subsystem Service is a process responsible for enforcing the system security policy. It creates security tokens for SAM (Security Account Manager), AD and NETLOGON. It uses packages specified in `HKLM\System\CurrentControlSet\Control\Lsa`. Normal properties for `lsass.exe` are:

- Image Path: `%SystemRoot%\System32\lsass.exe`
- Parent Process: `wininit.exe`
- Number of Instances: One
- User Account: Local System
- Start Time: Within seconds of boot time

<br/>Unusual behaviour for this process is:

- A parent process other than `wininit.exe`
- Image file path other than `C:\Windows\System32`
- Subtle misspellings to hide rogue processes
- Multiple running instnaces
- Not running as `SYSTEM`

# winlogon.exe

Windows Logon is responsible for handing the Secure Authentication Sequence (SAS). This is also responsible for loading the user profile, it loads the user's `NTUSER.DAT` into `HKCU` and `userinit.exe` loads the user shell. Normal properties for `winlogon.exe` are:

- Image Path: `%SystemRoot%\System32\winlogon.exe`
- Parent Process: Created by an instance of `smss.exe`
- Number of Instances: One or more
- User Account: Local System
- Start Time: Within seconds of boot time for Session 1.

<br/>Unusual behaviour for this process is:

- An actual parent process (`smss.exe` calls this then self-terminates)
- Image file path other than `C:\Windows\System32`
- Subtle misspellings to hide rogue processes
- Not running as `SYSTEM`
- Shell value in registry other than `explorer.exe`

# explorer.exe

Windows Explorer gives the user access to their folders and files. Winlogon runs `userinit.exe` which launches the value in `HKLM\Software\Microsoft\Windows NT\CurrentVersion\Winlogon\Shell.` `Userinit.exe` exits after it spawns `explorer.exe`. Normal properties for `explorer.exe` are:

- Image Path: `%SystemRoot%\explorer.exe`
- Parent Process: Created by an instance of `userinit.exe`
- Number of Instances: One or more per interactively logged in user
- User Account: Logged In User(s)
- Start Time: First instance when first interactive user session begins
    
Unusual behaviour for this process is:
    
- An actual parent process (`userinit.exe` calls this then exits)
- Image file path other than `C:\Windows`
- Running as an unknown user
- Subtle misspellings to hide rogue processes
- Outbound TCP/IP connections
