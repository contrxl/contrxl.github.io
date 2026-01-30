---
title: SQLMap Basics
layout: notes
---

# SQLi Vulnerability

If input is improperly sanitised, an attacker could manipulate the input and write queries that would get executed in the database and perform the attackers desired actions.

# Automated SQLi

SQLMap is an automated tool for detecting and exploit SQLi vulnerabilities. The `--help` command lists all flags, and `--wizard` guides you through steps required if you are unsure or don't want to manually add flags. `--dbs` can be used to enumerate databases. `-D` can be used to select a known database, `--tables` can be used to extract all table names. `-T` can be used to select a known database and `--dump` can be used to dump all records, for example:

```bash
# Check for SQLi
sqlmap -u [url]/cat=1
# Get db names
sqlmap -u [url]/cat=1 --dbs
# Get table names
sqlmap -u [url]/cat=1 -D [db_name] --tables
# Dump known table
sqlmap -u [url]/cat=1 -D [db_name] -T [table_name] --dump
```