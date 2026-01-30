---
title: Linux Fundamentals Part 2
layout: notes
---

# Introduction to Flags and Switches

Most commands allow arguments to be provided. These are identified by a hyphen and a keyword known as a flag or a switch. For example, the `-a` flag can be used with `ls` to display all files & hidden folders. The manual pages are a great source of info for system commands and applications available on a machine, for example, `man ls` can be used to view the manual page for the ls command.

# Filesystem Interaction Continued

<table>
  <tr>
    <th>Command</th>
    <th>Full Name</th>
    <th>Purpose</th>
    <th>Example</th>
  </tr>
  <tr>
    <td>touch</td>
    <td>touch</td>
    <td>Create a file </td>
    <td>touch myfile.txt</td>
  </tr>
  <tr>
    <td>mkdir</td>
    <td>make directory</td>
    <td>Create a folder</td>
    <td>mkdir myfolder</td>
  </tr>
  <tr>
    <td>cp</td>
    <td>copy</td>
    <td>Copy a file or folder</td>
    <td>copy myfolder newplace</td>
  </tr>
  <tr>
    <td>mv</td>
    <td>move</td>
    <td>Move a file or folder</td>
    <td>mv myfolder myfolder2</td>
  </tr>
  <tr>
    <td>rm</td>
    <td>remove</td>
    <td>Remove a file or folder</td>
    <td>rm myfile.txt</td>
  </tr>
  <tr>
    <td>file</td>
    <td>file</td>
    <td>Determine the type of a file</td>
    <td>file myfile.txt</td>
  </tr>
</table>
	 	 		 	
# Permissions 101

There are three types of permissions in a Linux filesystem:

1. Read
2. Write
3. Execute

<br/>In Linux, permissions can be so granular that even if a user owns a file, if the permissions are set correctly, a group could also have the same permissions as the owner without affecting the owner. You can switch between users on Linux using `su`, for example, `su user2` will change you to `user2`.

# Common Directories
## /etc

This root directory is one of the most important root directories on the system. This is a commonplace location to store files used by your OS.

## /var

Short for variable data, this stores data that is frequently accessed or written by services or applications running on the system.

## /root

This is the home directory for the root system user.

## /tmp

This is volatile storage used for data which only needs to be accessed once or twice, this folder is cleared out on restart.