---
title: Linux Forensics
layout: notes
---

# OS and Account Info

- `/etc/os-release`: OS release information
- `/etc/passwd`: info about user accounts which exist on a system. User created accounts have a UID of 1000 or above
- `/etc/group`: info about user groups present on the host
- `/etc/sudoers`: info about users who can use sudo
- `/var/log/wtmp`: historical login data (needs to be read with last)
- `/var/log/btmp`: keeps info about failed logins (needs to be read with last)
- `/var/log/auth.log`: every user that authenticates on a Linux host

# System Configuration

- `/etc/hostname`: hostname
- `/etc/timezone`: timezone
- `/etc/network/interfaces`: show network interface info
- `netstat`: show active network connections
- `ps`: show running processes on system
- `/etc/hosts`: DNS name assignment configuration
- `/etc/resolv.conf`: info about DNS servers used for resolution

# Persistence Mechanisms

- `/etc/crontab`: list of commands/scripts that run periodically
- `/etc/init.d`: services which run on startup, use ls to read
- `~/.bashrc`: startup list of shell actions to be performed
- `/etc/bash.bashrc`: system wide settings
- `/etc/profile`: system wide settings

# Evidence of Execution

- `cat /var/log/auth.log* | grep -i COMMAND | tail`: see commands run by user using sudo
- `~/.bash_history`: all commands run via bash as user
- `~/.viminfo`: command line history, search history etc for Vim

# Log Files

- `/var/log/syslog`: messages recorded about all system activity, file is huge so it is easier to use tail/head/more/less to make it more readable
- `/var/log`: contains lots of third party logs like webserver, database or file server logs
