---
title: OSQuery Basics
layout: notes
---

# Interactive Mode

To use OSQuery in interactive mode, simply type `osqueryi` in the terminal. `.help` can be used to list commands. `.tables` will list all tables which can be queried, for example to check tables associated with processes, you can use `.tables process`. A tables schema can be called using `.schema [TABLE_NAME]`. When you know the schema, you can then use SQL to query the table, for example:

```sql
SELECT gid, uid, description, username, directory FROM users;
```

# Schema Documentation

Schema documentation can be found [here](https://osquery.io/schema/5.5.1/).

# Creating SQL Queries
## Explore Installed Programs

```sql
SELECT * FROM programs LIMIT 1;
```

<br/>This will select all results from the programs table, but limit the displayed results to the first result only. You can select specific columns with:

```sql
SELECT name, version, install_location, install_data FROM programs LIMIT 1;
```

## Count

You can see how many entries in a table are returned using:

```sql
SELECT count(*) FROM programs;
```
## Where

You can use a `WHERE` clause to narrow down your result list:

```sql
SELECT * FROM users WHERE username='James';
```

<br/>The following filter options can be used in a `WHERE` clause:

- `=`: equal
- `<>`: not equal
- `>`, `>=`: greater than, greater than or equal to
- `<`, `<=`: less than, less than or equal to
- `BETWEEN`: between a range
- `LIKE`: pattern wildcard search
- `%`: wildcard, multiple characters
- `_`: wildcard, one character

## Matching Wildcard Rules

- `%:` match all files and folders for one level
- `%%:` match all files and folders recursively
- `%abc`: match all within-level ending in 'abc'
- `abc%`: match all within-level starting with 'abc'

## Matching Examples

- `/Users/%/Library`: monitor for changes to every user's Library folder, but not the contents within
- `/Users/%/Library/`: monitor for changes to files within each Library folder, but not the contents of their subdirectories
- `/Users/%/Library/%`: same, changes to files within each Library folder
- `/Users/%/Library/%%`: monitor changes recursively within each Library
- `/bin/%sh`: monitor the bin directory for changes ending in sh

## Joining Tables

Two tables can be joined based on a column shared by both tables, for example, the following two queries:

```sql
SELECT uid, pid, name, path FROM processes;

SELECT uid, username, description FROM users;
```

<br/>These can then be joined using:

```sql
SELECT p.pid, p.name, p.path, u.username FROM processes p JOIN users u on u.uid=p.uid LIMIT 10;
```