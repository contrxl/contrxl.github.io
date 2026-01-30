---
title: Hashing Basics
layout: notes
---

# Hash Functions

A hash function takes some input data of any size and creates a summary or digest of the data. The output has a fixed size. Hash collisions can occur when two inputs give the same output. Hash functions are designed to avoid these as best as possible.

# Insecure Password Storage for Authentication

- Storing Passwords in Plaintext: the famous one is RockYou - passwords were stored in plaintext and leaked, they are now available on Kali Linux as rockyou.txt.
- Using an Insecure Encryption Algorithm: Adobe's data breach led to passwords being leaked as they used a deprecated encryption format, and password hints were stored in plaintext.
- Using an Insecure Hash Function: LinkedIn had a data breach in 2012, they were using SHA-1 to store passwords and no salting was used.

# Using Hashing for Secure Password Storage

Storing passwords as hashes is good, but presents a problem, if two users have the same password and the hash is cracked, they now have access to more than one account. This can lead to the creation of a rainbow table - this is a table mapping hashes to plaintext. To protect against rainbow tables, a salt is added to the start of end of the hash. This means every user has a different hash even if they have the same password.

# Recognising Password Hashes

On Linux, hashes are stored in `/etc/shadow`. This file contains password information, each line contains nine fields split by colons. The passwords are saved in the format of `$prefix$options$salt$hash`. Some of the most common prefixes for Unix style hashes are:

<table>
  <tr>
    <th>Prefix</th>
    <th>Algorithm</th>
  </tr>
  <tr>
    <td>\$y$</td>
    <td>yescrypt</td>
  </tr>
  <tr>
    <td>\$gy$</td>
    <td>gost-yescrypt</td>
  </tr>
  <tr>
    <td>\$7$</td>
    <td>scrypt</td>
  </tr>
  <tr>
    <td>\$2b\$, \$2y\$, \$2a\$, \$2x\$</td>
    <td>bcrypt</td>
  </tr>
  <tr>
    <td>\$6$</td>
    <td>sha512crypt</td>
  </tr>
  <tr>
    <td>\$md5$</td>
    <td>summd5</td>
  </tr>
  <tr>
    <td>\$1$</td>
    <td>md5crypt</td>
  </tr>
</table>
 	
On Windows, hashes are hashed with NTLM and are visually identical to MD5 and MD4 hashes. Hashes are stored in the SAM (Security Accounts Manager).