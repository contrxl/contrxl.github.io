---
title: Windows Forensics Part 1
layout: notes
---

# Windows Registry

A collection of databases containing the systems configuration data. This data can be about hardware, software or the user's information. Registry can be viewed with regedit.exe. The registry consists of keys and values. Registry values are data stored in registry keys and a registry hive is a group of keys, subkeys and values.

## Structure

Any Windows system has the following five root keys:

1. `HKEY_CURRENT_USER`: root of the configuration information for the currently logged on user. This is all info associated with the user's profile, this can be shortened to HKCU.
2. `HKEY_USERS`: contains all actively loaded user profiles, HKCU is a subkey of this. Can be shortened to HKU.
3. `HKEY_LOCAL_MACHINE`: contains configuration information particular to the computer. Can be shortened to HKLM.
4. `HKEY_CLASSES_ROOT`: Subkey of HKLM\Software. The info stored here makes sure the correct program opens when you open a file, this can be shortened to HKCR.
5. `HKEY_CURRENT_CONFIG`: contains info about the hardware profile used by the local machine at startup.

# Accessing Registry Hives Offline

Hives are mostly located at `C:\Windows\System32\Config` and are:

- `DEFAULT` (mounted on `HKEY_USERS\DEFAULT`)
- `SAM` (mounted on `HKEY_LOCAL_MACHINE\SAM`)
- `SECURITY` (mounted on `HKEY_LOCAL_MACHINE\Security`)
- `SOFTWARE` (mounted on `HKEY_LOCAL_MACHINE\Sofware`)
- `SYSTEM` (mounted on `HKEY_LOCAL_MACHINE\System`)
    
<br/>Hives which contain user information can be found in the user profile directory at `C:\Users\<username>`. These hives are:

- `NTUSER.DAT` (mounted on `HKEY_CURRENT_USER` when user logs in)
- `USRCLASS.DAT` (mounted on `HKEY_CURRENT_USER\Software\CLASSES`)
- The `USRCLASS.DAT` hive can be found in `C:\Users\<username>\AppData\Local\Microsoft\Windows`. Both `USERCLASS.DAT` and `NTUSER.DAT` are hidden files. Another important hive is `C:\Windows\AppCompat\Programs\Amcache.hve`. This is created to save info on programs that were recently run.

# Transaction Logs and Backups

Transaction logs are a journal of the changelog of the registry hive. These logs are often used when writing to the registry hives. The log for each hive is stored as a `.LOG` file in the same directory as the hive itself. For example, the transaction log for the SAM hive will be in `C:\Windows\System32\Config` called `SAM.LOG`. In the event of multiple logs, they will be named `.LOG1`, `.LOG2` etc. Registry backups are backups of the hives saved in `C:\Windows\System32\Config`. These are backed up to `C:\Windows\System32\Config\RegBack` every ten days.

# Data Acquisition

For acquiring copies of registry files, there are various tools:

- [KAPE](https://www.kroll.com/en/services/cyber-risk/incident-response-litigation-support/kroll-artifact-parser-extractor-kape): live data acquisition and analysis tool which can be used to acquire registry data. Primarily a CLI but does have a GUI.
- [Autopsy](https://www.autopsy.com/): allows data acquisition from live systems or a disk image.
- [FTK Imager](https://www.exterro.com/ftk-imager): similar to Autopsy, allows extracting files by mounting the disk image/drive in FTK imager.

# Exploring Windows Registry

- [AccessData's Registry Viewer](https://accessdata.com/product-download/registry-viewer-2-0-0): similar interface to Windows Registry Editor, can only load one hive at a time and does not account for transaction logs.
- [Zimmerman's Registry Explorer](https://ericzimmerman.github.io/#!index.md): can load multiple hives simultaneously and can add data from the transaction logs.
- [RegRipper](https://github.com/keydet89/RegRipper3.0): takes a registry hive as input and outputs forensically important keys and values. Available as CLI and GUI. Again, does not take into account transaction logs.

# System Information and System Accounts

- `SOFTWARE\Microsoft\Windows NT\Current Version`: see Windows OS version.
- `SYSTEM\ControlSet001`: contains machine config data and controls startup, in most cases, this is the set the machine booted with.
- `SYSTEM\ControlSet002`: in most cases, this is the last known good control set.
- `HKLM\System\CurrentControlSet`: volatile control set used when machine is live.
- `SYSTEM\Select\Current`: see the current control set being used.
- `SYSTEM\Select\LastKnownGood`: see the last known good control set.
- `SYSTEM\CurrentControlSet\Control\ComputerName\ComputerName`: shows the computer name of the system.
- `SYSTEM\CurrentControlSet\Control\TimeZoneInformation`: shows the time zone the computer is located in.
- `SYSTEM\CurrentControlSet\Services\Tcpip\Parameters\Interfaces`: list of network interfaces on the machine. Each interface has a unique GUID subkey which provides info like DHCP IP, Subnet Mask, DNS Server and more.
- `SOFTWARE\Microsoft\Windows NT\CurrentVersion\NetworkList\Signatures\Unmanaged`: list of past networks.
- `SOFTWARE\Microsoft\Windows NT\CurrentVersion\NetworkList\Signatures\Managed`: list of past networks.
- `NTUSER.DAT\Software\Microsoft\Windows\CurrentVersion\Run`: info about programs/commands run at logon.
- `NTUSER.DAT\Software\Microsoft\Windows\CurrentVersion\RunOnce`: info about programs/commands run at logon.
- `SOFTWARE\Microsoft\Windows\CurrentVersion\RunOnce`: info about programs/commands run at logon.
- `SOFTWARE\Microsoft\Windows\CurrentVersion\policies\Explorer\Run`: info about programs/commands run at logon.
- `SOFTWARE\Microsoft\Windows\CurrentVersion\Run`: info about programs/commands run at logon.
- `SOFTWARE\CurrentControlSet\Services`: info about services.
- `SAM\Domains\Account\Users`: info about user accounts.

# Usage or Knowledge of Files/Folders

- `NTUSER.DAT\Software\Microsoft\Windows\CurrentVersion\Explorer\RecentDocs`: a list of recently opened files for each user. Specific subkeys exist for file extensions like `.pdf`, `.doc` etc.
- `NTUSER.DAT\Software\Microsoft\Office\VERSION`: list of recently opened documents.
- `NTUSER.DAT\Software\Microsoft\Office\15.0\Word`: example of key for Office 2013. Versions can be found [here](https://docs.microsoft.com/en-us/deployoffice/install-different-office-visio-and-project-versions-on-the-same-computer#office-releases-and-their-version-number).
- `NTUSER.DAT\Software\Microsoft\Office\VERSION\UserMRU\LiveID_####\FileMRU`: from Office 365, the location is tied to the user's Live ID, this is where recent files can be found in this scenario.
- `USRCLASS.DAT\Local Settings\Software\Microsoft\Windows\Shell\Bags`: information about user layout in the Windows "shell", can identify the most recently used files/folders.
- `USRCLASS.DAT\Local Settings\Software\Microsoft\Windows\Shell\BagMRU`: information about user layout in the Windows "shell", can identify the most recently used files/folders.
- `NTUSER.DAT\Software\Microsoft\Windows\Shell\BagMRU`: information about user layout in the Windows "shell", can identify the most recently used files/folders.
- `NTUSER.DAT\Software\Microsoft\Windows\Shell\Bags`: information about user layout in the Windows "shell", can identify the most recently used files/folders.
- `NTUSER.DAT\Software\Microsoft\Windows\Shell\BagMRU`: information about user layout in the Windows "shell", can identify the most recently used files/folders.
- `NTUSER.DAT\Software\Microsoft\Windows\CurrentVersion\Explorer\ComDlg32\OpenSavePIDlMRU`: the location which Windows remembers when you open/save a file in a specific location.
- `NTUSER.DAT\Software\Microsoft\Windows\CurrentVersion\Explorer\ComDlg32\LastVisitedPidlMRU`: the location which Windows remembers when you open/save a file in a specific location.
- `NTUSER.DAT\Software\Microsoft\Windows\CurrentVersion\Explorer\TypedPaths`: recently typed paths in Windows explorer address bar or searches performed.
- `NTUSER.DAT\Software\Microsoft\Windows\CurrentVersion\Explorer\WordWheelQuery`: recently typed paths in Windows explorer address bar or searches performed.

# Evidence of Execution

- `NTUSER.DAT\Software\Microsoft\Windows\CurrentVersion\Explorer\UserAssist\{GUID}\Count`: applications launched by the user, info about time launched, number of times executed etc.
- `SYSTEM\CurrentControlSet\Control\Session Manager\AppCompatCache`: used to track app compatibility and tracks all apps launched. Also called ShimCache. Stored file name, size and last modified time.
- `Amcache.hve\Root\File\{Volume GUID}\`: similar to ShimCache but stores extra info like execution path, installation, execution and deletion times and SHA1 hashes.
- `SYSTEM\CurrentControlSet\Services\bam\UserSettings\{SID}`: monitors activity of background applications.
- `SYSTEM\CurrentControlSet\Services\dam\UserSettings\{SID}`: monitors activity of desktop applications.

# External Devices/USB Device Forensics

- `SYSTEM\CurrentControlSet\EnumUSBTOR`: keeps track of vendor ID, product ID and version of USB device plugged in as well as time of connection.
- `SYSTEM\CurrentControlSet\Enum\USB`: keeps track of vendor ID, product ID and version of USB device plugged in as well as time of connection.
- `SYSTEM\CurrentControlSet\Enum\USBSTOR\Ven_Prod_Version\USBSerial#\Properties\{83da6326-97a6-4088-9453-a19231573b29}\0064`: first connection time.
- `SYSTEM\CurrentControlSet\Enum\USBSTOR\Ven_Prod_Version\USBSerial#\Properties\{83da6326-97a6-4088-9453-a19231573b29}\0066`: last connection time.
- `SYSTEM\CurrentControlSet\Enum\USBSTOR\Ven_Prod_Version\USBSerial#\Properties\{83da6326-97a6-4088-9453-a19231573b29}\0067`: last removal time.
- `SOFTWARE\Microsoft\Windows Portable Devices\Devices: name of connected drive.
