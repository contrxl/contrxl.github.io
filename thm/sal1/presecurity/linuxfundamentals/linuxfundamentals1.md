---
title: Linux Fundamentals Part 1
layout: notes
---

# Linux Background

Linux powers things like:

- Websites
- Car entertainment/control panels
- PoS systems like checkout tills and registers in shops
- Critical infrastructures like traffic light controllers or industrial sensors
- Linux is an umbrella term for multiple different OS variations based on UNIX.

# Running Your First Few Commands

The terminal in Linux is purely text based and allows you to perform all kinds of functions. Some very basic commands are:

<table>
  <tr>
    <th>Command</th>
    <th>Description</th>
    <th>Example</th>
  </tr>
  <tr>
    <td>echo</td>
    <td>Output any text provided</td>
    <td>echo Hello!</td>
  </tr>
  <tr>
    <td>whoami</td>
    <td>Find out what user you are logged in as</td>
    <td>whoami</td>
  </tr>
</table>

# Interacting with the Filesystem

<table>
  <tr>
    <th>Command</th>
    <th>Full Name </th>
    <th>Example</th>
  </tr>
  <tr>
    <td>ls</td>
    <td>listing</td>
    <td>ls .</td>
  </tr>
  <tr>
    <td>cd</td>
    <td>change directory</td>
    <td>cd ../</td>
  </tr>
  <tr>
    <td>cat</td>
    <td>concatenate</td>
    <td>cat file.txt</td>
  </tr>
  <tr>
    <td>pwd</td>
    <td>print working directory</td>
    <td>pwd</td>
  </tr>
</table>

# An Introduction to Shell Operators

<table>
  <tr>
    <th>Operator</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>&</td>
    <td>Allows you to run commands in the background</td>
  </tr>
  <tr>
    <td>&&</td>
    <td>Allows you to combine multiple commands in one line</td>
  </tr>
  <tr>
    <td>></td>
    <td>Redirector, take output from one command as input to another</td>
  </tr>
  <tr>
    <td>>></td>
    <td>Operator does same as > but appends output rather than replacing</td>
  </tr>
</table>