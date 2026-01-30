---
title: Linux Fundamentals Part 3
layout: notes
---

# Terminal Text Editors
## Nano

To create or edit a file using Nano, simply use `nano filename`. Lines can be navigated using the up and down arrow keys, and a new line can be created by pressing "Enter" on the keyboard. Nano has many features that generic text editors have:

- Searching for text
- Copy/paste
- Jump to line number
- Finding out what line number you are on

<br/>These features can be used by pressing the Ctrl key and the corresponding letter.

## VIM

VIM is much more advanced. VIM has many benefits like:

- Customisable - keyboard shortcuts can be freely modified
- Syntax Highlighting - useful for writing or maintaining code
- Works on all terminals where Nano may not be installed

# General/Useful Utilities
## Downloading Files (wget)

wget allows files to be downloaded over HTTP by providing it with teh address of the resource you wish to download, for example: `wget https://example.com/myfile.txt` would download `myfile.txt` from `example.com`.

## Transferring Files from your Host - SCP (SSH)

Secure copy is a means of securely copying files, this lets you transfer files between machines using SSH. SCP allows you to copy files & directories to and from your system. A typical SCP command looks like:

```bash
scp important.txt ubunutu@10.10.10.10:/home/ubuntu/transfer.txt
```

<br/>There are a few variables here:

<table>
  <tr>
    <th>Variable</th>
    <th>Value</th>
  </tr>
  <tr>
    <td>IP address of the remote system</td>
    <td>10.10.10.10</td>
  </tr>
  <tr>
    <td>User on the remote system</td>
    <td>ubuntu</td>
  </tr>
  <tr>
    <td>Name of the file on the local system</td>
    <td>important.txt</td>
  </tr>
  <tr>
    <td>Name that we wish to store the file as on the remote system</td>
    <td>transfer.txt</td>
  </tr>
</table>
 	
The layout of this command is reversed for transferring a file from a remote computer to local:

```bash
scp ubuntu@10.10.0.10:/home/ubuntu/transfer.txt important.txt
```

<table>
  <tr>
    <th>Variable</th>
    <th>Value</th>
  </tr>
  <tr>
    <td>IP address of the remote system</td>
    <td>10.10.10.10</td>
  </tr>
  <tr>
    <td>User on the remote system</td>
    <td>ubuntu</td>
  </tr>
  <tr>
    <td>Name of the file on the remote system</td>
    <td>transfer.txt</td>
  </tr>
  <tr>
    <td>Name that we wish to store the file as on local system</td>
    <td>important.txt</td>
  </tr>
</table>
 	
## Serving Files from Your Host - Web

Python provides a lightweight module called "HTTPServer" which turns your computer into a quick web server to serve files which can be downloaded using commands like `curl` and `wget`. To run this, simply enter `python3 -m http.server`.

# Processes 101

Processes are managed by the kernel, each process has an ID associated with it (PID). You can use ps to provide a list of processes and their IDs running on the current user's session. To view all processes across the system, you can use ps aux. The top command can be used to view real-time statistics about system processes.

Signals can be sent to processes to terminate them or stop them. To kill a process, simply use kill followed by the PID. Some other signals that can be sent are:

- SIGTERM - kill the process, but allow cleanup
- SIGKILL - kill the process, no cleanup
- SIGSTOP - stop or suspend a process

## How Processes Start

The OS uses namespaces to split up resources available on the computer to processes. Namespaces help isolate processes from one another, only those in the same namespace can see each other. A process with a PID of 0 is a process that started at boot, this is the system init on Ubuntu, like systemd. This is one of the first processes that is started, anything after this is a child process of systemd. To get a program start on boot, you can use systemctl, this has four primary options:

1. Start
2. Stop
3. Enable
4. Disable

## Backgrounding and Foregrounding

Processes can be run in two states: background or foreground. `CTRL+Z` can be used to background a process, or you can add `&` to the command end to background it immediately. The `fg` command can be used to bring a process back into the foreground.

# Maintaining Your System: Automation

You may want to schedule a task or action to take place after the system has booted. This can be achieved by interacting with cron via crontabs. A crontab is a special file with formatting recognised by cron, there are 6 required values:

<table>
  <tr>
    <th>Value</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>MIN</td>
    <td>Minute to execute</td>
  </tr>
  <tr>
    <td>HOUR</td>
    <td>Hour to execute</td>
  </tr>
  <tr>
    <td>DOM</td>
    <td>Day of month to execute</td>
  </tr>
  <tr>
    <td>MON</td>
    <td>Month of year to execute at</td>
  </tr>
  <tr>
    <td>DOW</td>
    <td>Day of week to execute at</td>
  </tr>
  <tr>
    <td>CMD</td>
    <td>Actual command to execute</td>
  </tr>
</table>
 	
Using this example, you could backup your documents folder every 12 hours by using the following:

```bash
0 */12 * * * cp -R /home/user/Documents /var/backups
```

An `*` can be used when you don't want to provide a value for that specific field e.g. you do not care what day or month the crontab executes on.