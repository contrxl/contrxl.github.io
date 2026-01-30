---
title: Windows Command Line
layout: notes
---

# Basic System Information

Commands can only be issued within the Windows Path. The command `set` can be used to check your path from the command line. The terminal output shows the input where MS Windows will execute commands. The `ver` command can be used to determine the OS version. The `systeminfo` command can be used to see in-depth system information.
Command output can be piped through `more` if it is too long, `help` can be used to view help info for specific commands and `cls` clears the screen.

# Network Troubleshooting

Network information can be checked with `ipconfig`, `ipconfig /all` can be used to see even more information about your network configuration. You can check connectivity to a target site or resource by using `ping [TARGET]`. Another good tool for troubleshooting is `tracert`, this shows the route that was traversed to reach a certain target. Another command worth knowing is `nslookup`, this looks up a host or domain and returns its IP address. Finally, `netstat` will output current network connections and listening ports. `netstat` has various useful options:

- `-a`: show all established connections and listening ports
- `-b`: show program associated with each listening port and established connection
- `-o`: reveals the PID associated with the connection
- `-n`: uses a numerical form for addresses and port numbers

# File and Disk Management

`cd` can be used without parameters to display the current drive and directory. Child directories can be viewed with `dir`. `dir` can be used with `/a` to view hidden and system files, or `/s` to view files in the current directory and all subdirectories. `tree` can be used for a visual representation of child directories and subdirectories. The `type` command can be used to view the contents of text files.

# Task and Process Management

Running processes can be viewed using tasklist. Running processes can be killed using `taskkill /PID [PROCESS_ID]`.