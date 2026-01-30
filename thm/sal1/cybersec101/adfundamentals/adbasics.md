---
title: Active Directory Basics
layout: notes
---


# Windows Domains

A Windows domain is a group of users and computers under the administration of a given business. The idea behind this is to centralise the administration of common components of a Windows network in a single repository called Active Directory (AD). The server that runs these AD services is called a Domain Controller (DC). The main advantages of having a configured Windows domain are:

- Centralised Identity Management: all users can be configured from AD with minimal effort
- Managing Security Policies: policies can be configured directly from AD and applied to users/computers across the network as needed

# Active Directory
## Users

One of the most common object types in AD. Known as a security principal, meaning they can be authenticated by the domain and assigned privileges over resources. Users can be used to represent two types of entities:

- People: persons in your organisation that need access to the network
- Services: service users only have privileges to run their specific service (IIS, MSSQL etc.)

## Machines

Each machine has a machine object, these are also considered security principals and are assigned accounts. The machine accounts are assigned local administrator and are not supposed to be accessed by anyone except the machine itself. These accounts are easily recognised as they usually consist of the computer name followed by a dollar sign, e.g. `PC01` and `PC01$`

## Security Groups

Several groups are created by default in a domain which can be used to grant specific privileges to users:

<table>
  <tr>
    <th>Security Group</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>Domain Admins</td>
    <td>Admin privilege over the entire domain, can administer any computer including the DCs</td>
  </tr>
  <tr>
    <td>Server Operators</td>
    <td>Can administer DCs, cannot change admin group memberships</td>
  </tr>
  <tr>
    <td>Backup Operators</td>
    <td>Allowed to access any file, used to perform backups</td>
  </tr>
  <tr>
    <td>Account Operators</td>
    <td>Can create or modify other accounts in domain</td>
  </tr>
  <tr>
    <td>Domain Users</td>
    <td>Includes all existing accounts in the domain</td>
  </tr>
  <tr>
    <td>Domain Controllers</td>
    <td>Includes all existing DCs on the domain</td>
  </tr>
</table>

## Organisational Units (OUs)

There are five default OUs created by Windows:

1. Builtin: default groups available to any Windows host
2. Computers: any machine which joins the network goes here by default
3. Domain Controllers: default OU that contains DCs in your network
4. Users: default users and groups that apply to a domain-wide context
5. Managed Service Accounts: holds accounts used by services in the domain

<br/>OUs are used for applying policies to users and computers, including specific configurations whilst security groups are used to grant permissions over resources.

# Authentication Methods
## Kerberos Authentication

This is the default method for any recent versions of Windows. With Kerberos, the following process occurs:

1. The user sends their username and timestamp encrypted using a key derived from their password to the Key Distribution Center (KDC). The KDC creates and returns a Ticket Granting Ticket (TGT) to the user which allows them to request additional tickets to other services. It also provides the user with a session key, which allows them to generate following requests. The TGT is encrypted wit the krbtgt account's password hash. The encrypted TGT contains the session key as part of its contents.
2. A user uses their TGT to ask the KDC for a Ticket Granting Service (TGS). TGS allow connections to the specific service they were requested for. To request a TGS, the user sends their username, timestamp (encrypted using the session key) along with the TGT and Service Principal Name (SPN) indicating the service and server to access. The KDC will send back a TGS with a service session key. The TGS is encrypted using a key derived from the Service Owner Hash. The Service Owner is the user or machine account which the service runs under. The TGS holds a copy of the Service Session key on its encrypted contents.
3. The TGS can now be set to the desired service to authenticate and establish a connection.

## NetNTLM Authentication

1. The client sends an authentication request to the server.
2. The server generates a random number and sends it as a challenge to the client.
3. The client combines their NTLM password hash with the challenge and returns it to the server.
4. The server forwards this to the Domain Controller.
5. The DC uses this to recalculate the response the compares it to the original, if they match, the client is authenticated.
6. The server forwards the authentication result to the client.

# Trees, Forests and Trusts
## Trees

AD supports integrating multiple domains to allow your network to be partitioned into independent units. For example, if you have two domains sharing the same namespace like example.local they can be joined into a tree. If this was then split into two subdomains for UK and US, it could be a tree with the root domain example.local and two subdomains `uk.example.local` and `us.example.local`. This allows better control over who can access what resource in the domain, for example, UK users would have no control over US users. The Enterprise Admins security group is involved here, and grants a user administrative privileges over all of an enterprises domains.

## Forests

Domains can also be configured in different namespaces, if you acquired a new company called `example2.local`, you could have different trees for each company, this is known as a forest.

## Trust Relationships

A trust relationship between domains would allow you authorise a user from `example.local` to access files or resources on domain `example2.local`. A one-way trust relationship is simply where Domain A trusts Domain B, meaning a user on Domain B is authorised to access resources on Domain A. A two-way trust allows mutual authorisation between domains and is established by default when several domains are joined under a tree or forest.