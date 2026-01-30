---
title: Putting it all Together
layout: notes
---

# Other Components
## Load Balancers

If a website needs to have high availability or if traffic starts to increase, one server may no longer do the job. A load balancer provides a failover if a server becomes unresponsive and allows websites to handle traffic load. Load balancers will also perform period checks to ensure everything is running correctly.

## CDN (Content Delivery Networks)

Allows you to host static files from your website like JS, CSS, images or videos. When a user requests one of these, the CDN works out where the nearest server is and sends the request there.

## Databases

Webservers can communicate with databases to store and recall data from them.

## WAF (Web Application Firewall)

A WAF sits between the client and the web server to protect it from hacking or DoS attacks. If a request is deemed a potential attack, it will be dropped.

# How Web Servers Work
## What is a web server?

A web server is a software that listens for incoming connections and then utilises the HTTP protocol to deliver web content to its clients. The most common software is Apache, Nginx, IIS and NodeJS.

## Virtual Hosts

Web servers can host multiple websites with different domain names by using virtual hosts. The web server software checks the hostname being requested and matches it against its virtual hosts. Virtual hosts can have their root directory mapped to different hard drive locations.

## Static vs Dynamic Content

Static content is content that never changes, like pictures, JavaScript, CSS etc. These are files served directly from the webserver with no changes made. Dynamic content is content which can change with different requests. For example, a blog site showing latest entries. These changes are performed in the backend of the website.

## Scripting and Backend Languages

Some backend languages are: PHP, Python, Ruby, NodeJS, Perl. These can interact with databases, call external services, process user data and so on.