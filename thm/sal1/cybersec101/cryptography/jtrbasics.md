---
title: JohnTheRipper Basics
layout: notes
---

# Basic Terms

Hashing functions are one-way, meaning it is easy to get the hash value of a given input, but hard to find the original input given the hash value. This has its roots in mathematics as $P$ vs $NP$. These are two classes of problem:

- $P$ (Polynomial Time): Class $P$ covers problems whose solutions can be found in polynomial time.
- $NP$ (Non-Deterministic Polynomial Time): Problems in this class are those with a given solution which can be checked quickly even though finding the solution itself can be hard.

# Cracking Basic Hashes

The basic syntax John uses is:

`john [options] [filepath]`

John has built in features to detect the hash it is given. To use automatic cracking, you can use:

`john --wordlist=[path] [path to file]`

If you are able to identify the format of the hash you are using, you can use:

`john --format=[format] --wordlist=[path] [path to file]`

You can check all available formats with:

`john --list=formats`

# Cracking Windows Authentication Hashes

NThash is the format that modern Windows OS uses to store user and service passwords. The SAM is used to store account info like usernames and hashed passwords, the SAM can be dumped with mimikatz or using the AD database NTDS.dit.

# Cracking Hashes from /etc/shadow

For John to understand `/etc/shadow` hashes, it must be combined with `/etc/passwd`, or unshadowed. The basic syntax to unshadow a file is:

`unshadow [path to passwd] [path to shadow]`

# Single Crack Mode

Single crack mode takes a username and tries to work out the password by changing letters and numbers within it, for example, the username "Markus" becomes:

- Markus1, Markus2, MaRKUS and so on

<br/>This technique is called word mangling. Johns implementation of this is compatible with GECOS (General Electric Comprehensive Operating System). The syntax for single crack mode is:

`john --single --format[format] [path to file]`

# Custom Rules

Password complexity is enforced in most organisations, but this can be exploited via custom rules in John, we can assume that most users will have passwords formatted like:

`Polopassword1!`

Custom rules are defined in `/etc/john/john.conf`. Example syntax for a rule is as follows:

The first line `[List.Rules:RULENAME]` is used to define the name of your rule. A regex style pattern can be used to define where the word will be modified:

- `Az`: takes the word and appends defined characters
- `A0`: takes the word and prepends defined characters
- `c`: capitalises the character positionally

<br/>Lastly, we must define which characters should be appended, prepended or included. This is done by adding character sets in square brackets where they should be used, some common examples are:

- `[0-9]`: numbers 0-9
- `[0]`: will only include number 0
- `[A-z]`: will include lower and uppercase
- `[A-Z]`: will only include uppercase
- `[a-z]`: will include only lowercase

<br/>Custom rules can be applied using the following syntax:

`john --wordlist=[path] --rule=[RuleName] [path to file]`

# Cracking Password Protected Zip Files

John can be used to crack password protected zip files with `zip2john`, the basic syntax for this is:

`zip2john [options] [zip file] > [output file]`

This can then be cracked using the normal syntax. The `rar2john` tool can be used in the same fashion to crack password protected RAR archives.

# Cracking SSH Key Passwords

`ssh2john` converts the `id_rsa` private key to a hash format John can work with. The syntax for this is:

`ssh2john [id_rsa private key] > [output file]`
