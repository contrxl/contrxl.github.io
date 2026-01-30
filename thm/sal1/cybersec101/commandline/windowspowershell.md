---
title: Windows PowerShell
layout: notes
---

# What is PowerShell?

PowerShell was developed to overcome limitations in command-line tools in Windows. PowerShell was released in 2006 to allow administrators to automate tasks more effectively by manipulating objects. In this context of programming, an object represents an item with properties (characteristics) and methods (action). For example, a car has properties like colour and model, and methods like drive, honk horn and refuel.

# PowerShell Basics

PowerShell can be launched in numerous ways:

- Start Menu: Type `powershell` in the search bar and click Windows PowerShell or PowerShell from the results.
- Run Dialog: Press `Win+R` to open the Run dialog, type `powershell` and press enter.
- File Explorer: Navigate to any folder, type `powershell` in the address bar and press enter.
- Task Manager: Open task manager, go to `File > Run New Task` and type `powershell`, press enter.

<br/>PowerShell commands are known as cmdlets. These cmdlets follow a consistent Verb-Noun naming convention. The Verb describes the action, and the Noun specifies the object on which the action is performed, for example:
- `Get-Content`: gets the content of a file and displays
- `Set-Location`: sets the current working directory

<br/> To list all available cmdlets, functions, aliases and scripts that can be executed in the current PowerShell session, you can use `Get-Command`. Another essential cmdlet is `Get-Help`. The functionality of PowerShell can be extended by downloading other cmdlets from the web, modules can be found using `Find-Module`. New modules can be installed with `Install-Module`.

# Navigating File System & Working With Files

In PowerShell, `Get-ChildItem` will list all files and directories in a location. To swap to a different directory, you can use `Set-Location`. To create a new folder or file in PowerShell, you can use `New-Item -Path [PATH] -ItemType [TYPE]`. `Remove-Item` and `Copy-Item` can be used to remove and copy items respectively.

# Piping, Filtering and Sorting Data

Piping allows the output of one command to be used as input for another. Piping in PowerShell passes objects rather than just text. For example, you could get a list of files in a directory and sort them by size using `Get-ChildItem | Sort-Object Length`. Similarly, you could use `Where-Object` to apply a filter on the file properties. PowerShell has a variety of comparison operators to use:

- `-ne`: not equal to
- `-gt`: greater than
- `-ge`: greater than or equal to
- `-lt`: less than
- `-le`: less than or equal to
    
<br/>`Select-Object` can be used to limit the number of objects returned, and is useful for refining outputs. `Select-String` is similar to `grep` or `findstr` and can be used to find text patterns within files, the standard syntax is: `Select-String -Path ".\file.txt -Pattern "hat"`.

# System and Network Information

The `Get-ComputerInfo` cmdlet retrieves comprehensive system information. `Get-LocalUser` will list all local accounts on the system. `Get-NetIPConfiguration` can be used to get detailed info about network interfaces on the system. `Get-NetIPAddress` will show all IP addresses configured on the system.

# Real Time System Analysis

`Get-Process` will provide an overview of all currently running processes. `Get-Service` will show the status of services running on the machine. The `Get-NetTCPConnection` cmdlet will show all current TCP connections.