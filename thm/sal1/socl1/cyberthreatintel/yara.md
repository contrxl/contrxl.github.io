---
title: Yara
layout: notes
---

# What is Yara?

Yara is a pattern matching tool that can be used on both binary and textual patterns. Rules are used to label these patterns and can be used to determine if a file is malicious.
Introduction

The proprietary language used by Yara is easy to pick up and hard to master, every yara command requires two arguments:

1. The rule file we create
2. Name of the file, directory or process to use the rule for
    
<br/>A yara rule that simply checks if a file/folder/PID exists would be:

```json
rule examplerule {
	condition: true
}
```

Executing this using `yara rule.yar somefile` would return `examplerule somefile`. If this was run against a file that did not exist, yara would return an error.

# Expanding on Yara Rules

Yara has various keywords, some of these are:

- Meta: reserved for descriptive information by the author of the rule, anything in this section does not influence what the rule checks for.
- Strings: search for a specific word or hexadecimal in files or programs, for example, to search for all files containing "Hello World!":

```json
rule helloworld_check{
	strings:
		$hello_world = "Hello World!"
}
```

<br/>This will only match if the string is literally "Hello World!", it will not match "HELLO WORLD!", to solve this, we can use `any of them`:

```json
rule helloworld_check{
	strings:
		$hello_world = "Hello World!"
		$hello_world_lc = "hello world!"
		$hello_world_uc = "HELLO WORLD!"

	condition:
		any of them
}
```

## Conditions 
    
Operators from regular programming languages can also be used, for example:

```json
rule helloworld_check{
	strings:
		$hello_world = "Hello World!"

	condition:
		$hello_world <= 10
}
```

<br/>This will only match if there are less than or equal to ten occurrences of "Hello World!". Combining keywords can be used like "and", "not", and "or", for example, to check if a file has a string and is a certain size:

```json
rule helloworld_check{
	strings:
		$hello_world = "Hello World!"

	condition:
		$hello_world and filesize < 10KB
}
```

# Other Tools and Yara

- LOKI: a free open-source IOC scanner, it detects based on 4 methods:
    1. File Name IOC
    2. Yara Rule
    3. Hash
    4. C2 Back Connect
- THOR Lite: multi-platform IOC and Yara scanner.
- FENRIR: Simple bash IOC checker.
- YAYA: Yet Another Yara Automation: open-source tool to help manage multiple YARA repositories.

# Creating Rules with [yarGen](https://github.com/Neo23x0/yarGen)

[yarGen](https://github.com/Neo23x0/yarGen) is a generator for Yara rules.