---
title: AD Basic Enumeration
layout: notes
---

# Host Discovery
## fping

Similar to ping, uses ICMP to determine if a host is live. Fping allows you to specify any number of targets, including a whole subnet. Basic usage is: `fping -agq [SUBNET]`. The `-a` shows only alive systems, `-g` generates a target list from the supplied netmask, `-q` runs in quiet mode.

## Nmap

Nmap can be used in ping scan mode with `nmap -sn [SUBNET]` to probe the entire subnet.

## Port Scanning

Once a live host is found, the DC should be identified, some common AD ports and protocols are:

- 88 - Kerberos
- 135 - MS-RPC
- 139 - SMB/NetBIOS
- 389 - LDAP
- 445 - SMB
- 464 - Kerberos (kpasswd)

<br/>A tool like nmap can be used to scan these specific ports with: `nmap -p 88,135,389,445 -sV -sC -iL [host file]`.

# Network Enumeration with SMB
## Discovering Services

An initial discovery scan is carried out focusing on the following ports:

- TCP 88 (Kerberos)
- TCP 135 (RPC Endpoint Mapper)
- TCP 139 (NetBIOS Session Service)
- TCP 389 (LDAP)
- TCP 445 (SMB)
- TCP 636 (LDAPS)

# Listing SMB Shares

If SMB services are found, they can listed and checked for anonymous access using `smbclient -L //[TARGET] -N`. The `-L` indicates to list shares and `-N` indicates no password. A Python tool called `smbmap` can also be used to enumerate SMB shares across a host and show read/write permissions across shares.

## Accessing SMB Shares

If a share allows anonymous access, you can connect to it using `smbclient //[TARGET]/[SHARE] -N`. If you do have a username/password, you can use `--user=[USER] --password=[PASSWORD]` to connect with those, if the user is a domain account, the `-W `option will be needed to specify the domain.

# Domain Enumeration
## LDAP (Anonymous Bind)

LDAP is used to access and manage directory services. Some LDAP servers allow anonymous users to perform read-only queries. You can check for this using `ldapsearch -x -H ldap://[TARGET] -s base`. The `-x` denotes simple authentication, and the `-s` limits the query to base object only. If enabled, user info can be queried with `ldapsearch -x -H ldap://[TARGET] -b "dc=[DC],dc=[DC]" "(objectClass=person)"`.

# Enum4linux-ng

Tool that automates various techniques against a Windows system, including user enumeration. Uses SMB and RPC to get user lists, group memberships and share details. To get as much info as possible, run `enum4linux-ng -A 10.211.11.10 -oA results.txt`.

# RCP Null Sessions

MSRPC enables a program running on one computer to request services from another computer. RPC services can be accessed via SMB protocol, if this is configured to allow null sessions, an unauthenticated user can connect to the `IPC$` share and enumerate sensitive information. The following command can be used to test this: `rpcclient -U "" [TARGET] -N`, if this is successful, then enumdomusers can be run to enumerate users.

# RID Cycling

RID ranges are used to assign unique IDs to users and group objects. Some RIDs are standard, like 500 for Admin, 501 for Guest Account. If a tool like `enumdomusers` is locked down, a script like below can be used to enumerate an RID range:

```sh
for i in $(seq 500 2000); do echo "queryuser $i" | rpcclient -U "" -N [TARGET] 2>/dev/null | grep -i "User Name"; done
```

# Kerbrute

Kerberos is the primary authentication protocol for MS Windows domains, unlike NTLM which relies on a challenge system, Kerberos uses a ticket-based system. Running a user list acquired via `enum4linux` or `rpcclient` through Kerbrute will show which users are real, active AD users. Basic syntax is: `kerbrute userenum --dc [TARGET] -d [DOMAIN] [USERLIST]`.

# Password Spraying

Before starting an attack, its important to know the password policy for the target. This allows you to see information about the minimum password length, complexity and number of failed attempts that will lock an account. There are a few ways to check this:

- `rpcclient -U "" [TARGET] -N -> getdompwinfo`
- `crackmapexec smb [TARGET] --pass-pol`

<br/>`crackmapexec` can also be used to perform the attack using: `crackmapexec smb [TARGET] -u [USERLIST] -p [PASSWORDLIST]`
