---
title: Web Application Basics
layout: notes
---

# Overview

- Front end:
    1. HTML: foundational aspect, set of instructions or code for a browser
    2. CSS: standard appearances like colours, text and layouts
    3. JS: enables complex activity allowing choices and decisions
- Back end:
    1. Databases store, modify and retrieve information
    2. Infrastructure underpins apps like servers, storage and networking devices
    3. WAF is optional but helps defend servers

# Anatomy of a URL

Uniform Resource locators have various parts:

- Scheme: protocol used to access a site, like HTTP/HTTPS.
- User: some URLs include login details like usernames for sites that require authentication.
- Host/Domain: tells you which website you are accessing, each domain must be unique.
- Port: port number directs browser to right service on web server.
- Path: points to specific file or page on server you are trying to access.
- Query String: part of URL beginning with a question mark, used for search terms of form inputs.
- Fragment: starts with a hashtag and is used to point to a specific section of a webpage

# HTTP Messages

These are packets of data exchanged between client and server. HTTP requests are send by the user to trigger actions, and HTTP responses are sent by the server as responses. Each HTTP message follows a specific format:

- Start Line: like a message introduction, for example: `POST /login HTTP/1.1`
- Headers: key-value pairs providing extra info, they give instructions to the client and server, for example: `Host: tryhackme.com`
- Empty Line: divider that splits the header from the message body
- Body: where actual data is stored like `username=username&password=password`

# HTTP Request Line and Methods

The request line is the first line of a request, and tells the server what kind of request it is dealing with, it has three parts: the HTTP method, the URL path and the HTTP version. The HTTP method tells the server what action the user wants to perform, there are many methods:

- `GET`: used to fetch data from the server without making changes
- `POST`: sends data to the server to create or update something
- `PUT`: replaces or updates something on the server
- `DELETE`: removes something from the server
- `PATCH`: updates part of a resource
- `HEAD`: only retrieves headers rather than full content
- `OPTIONS`: tells you what methods are available
- `TRACE`: like options but used for debugging, is often disabled
- `CONNECT`: used to create a secure connection

<br/>The URL path tells the server where to find the resource the user is asking for. Finally, the HTTP version shows the protocol version used for communication.

# HTTP Request Headers and Body

Some common request headers are:

<table>
  <tr>
    <th>Header</th>
    <th>Example</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>Host</td>
    <td>Host: tryhackme.com</td>
    <td>Specifies name of web server</td>
  </tr>
  <tr>
    <td>User-Agent</td>
    <td>User-Agent: Mozilla\5.0</td>
    <td>Shares info about the browser the request comes from</td>
  </tr>
  <tr>
    <td>Referer</td>
    <td>Referer: https://www.google.com</td>
    <td>Indicates the URL the request came from</td>
  </tr>
  <tr>
    <td>Cookie</td>
    <td>Cookie: user_type=student</td>
    <td>Info the server previously asked to store</td>
  </tr>
  <tr>
    <td>Content-Type</td>
    <td>Content-Type: application/json</td>
    <td>Describes type of format data in request</td>
  </tr>
</table>

The request body can contain many forms of data. Some common ones are:

- URL Encoded (`application/x-www-form-urlencoded`): data is structured in key-value pairs, pairs are separated by an ampersand and special characters are percent encoded. For example: `name=contrxl&age=20&country=US`.
- Form Data (`multipart/form-data`): allows multiple blocks to be sent where each block is split by a boundary string, this is defined in the header request. For example:

```
Content-Type: multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW

----WebKitFormBoundary7MA4YWxkTrZu0gW
Content-Disposition: form-data; name="username"

aleksandra
----WebKitFormBoundary7MA4YWxkTrZu0gW
Content-Disposition: form-data; name="profile_pic"; filename="aleksandra.jpg"
Content-Type: image/jpeg

[Binary Data Here representing the image]
----WebKitFormBoundary7MA4YWxkTrZu0gW--
```

<br/>
- JSON (`application/json`): data can be sent using JSON structure. For example:

```json
{
	"name":"Contrxl",
	"age":20,
	"country":"US"
}
```

<br/>
- XML (`application/xml`): data is structured in opening and closing tags, the tags can be nested. For example:

```xml
<user>
	<name>Contrxl</name>
	<age>20</age>
	<country>US</country>
</user>
```

# HTTP Response Status Line and Status Codes

When a server sends back a response, it includes a status code and short explanation (or reason phrase) into how the server handled the request. The first line in every response is called a status line and provides:

- HTTP Version
- Status Code (a three digit number indicating the outcome of your request)
- Reason Phrase (a human readable explanation of the code)

<br/>Status codes fall into 5 main categories:

1. Informational (100-199): server has received request and is waiting for the rest.
2. Successful (200-299): everything worked as expected.
3. Redirection (300-399): the resource has moved to a different location.
4. Client Error (400-499): a problem occurred with your request.
5. Server Error (500-599): the server had an error while trying to fulfil the request.
    
<br/>Some of the most common status codes are:

1. 100 (Continue): server is ready for next part of request
2. 200 (OK): request successful
3. 301 (Moved Permanently): resource has moved to a new URL
4. 404 (Not Found): server couldn't find the resource
5. 500 (Internal Server Error): something went wrong on server end

# HTTP Response Headers and Body

Some response headers are crucial for making sure the HTTP response works correctly, some important ones are:

- `Date`: shows exact date and time the response was generated
- `Content-Type`: tells the client what kind of content it is getting
- `Server`: shows what kind of server software is handling the request
- `Set-Cookie`: sends cookies from server to client (these should have the HttpOnly and Secure flags)
- `Cache-Control`: tells client how long it can cache the response before checking with server
- `Location`: used in redirection responses to tell the server where to go next

# Security Headers
## Content-Security-Policy (CSP)

CSP header provides an additional layer to help prevent XSS. An example CSP header looks like:

```
Content-Security-Policy: default-src 'self'; script-src 'self' https://cdn.tryhackme.com; style-src 'self'
```

<br/>This uses:

- `default-src`: specifies default source 'self', which means only the current website
- `script-src`: specifies policy where scripts can be loaded from
- `style-src`: specifies policy for where CSS style sheets can be loaded from

## Strict-Transport-Security (HSTS)

Ensures web browsers always connect over HTTPS, for example:

```
Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
```

<br/>This uses:

- `max-age`: expiry time in seconds
- `includeSubDomains`: applies this setting to all subdomains
- `preload`: browsers use preload lists to enforce HSTS before even their first visit

## X-Content-Type-Options

Used to instruct browsers not to guess the MIME type of a resource and only use the Content-Type header, for example:

```
X-Content-Type-Options: nosniff
```

<br/>This instructs the browser not to sniff or guess the MIME type.

## Referrer-Policy

This controls the amount of info sent to the destination server when a user is redirected from the source, some examples are:

- `Referrer-Policy: no-referrer`
- `Referrer-Policy: same-origin`
- `Referrer-Policy: strict-origin`
- `Referrer-Policy: strict-origin-when-cross-origin`

<br/>These mean:

- `no-referrer`: prevents any info being sent
- `same-origin`: only sends when the destination is the same origin as the source
- `strict-origin`: only sends when the protocol remains the same e.g. HTTPS>HTTPS
- `strict-origin`-when-cross-origin: same as strict except for same origin requests which send the full URL path
