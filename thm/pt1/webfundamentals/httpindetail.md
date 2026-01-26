---
title: HTTP in Detail
layout: notes
---

# What is HTTP(S)?

HTTP was developed by Tim Berners-Lee and his team between 1989-1991. It is the set of rules for communicating with web servers for transmitting webpage data. HTTPS is the secure version of HTTP, this data is encrypted.
Requests and Responses

A URL is an instruction on how to access a resource on the internet. A URL has a few components:

- Scheme: this instructions on what protocol to use for access the resource, like HTTP, HTTPS, FTP.
- User: Some services need authentication to log in, a username and password can be used to login.
- Host: Domain name or IP of the server to be accessed.
- Port: Port to connect to, usually 80 for HTTP or 443 for HTTPS.
- Path: File name or location of the resource to access.
- Query String: Extra bits of information that can be sent to the path.
- Fragment: Reference to a location on the actual page requested. Commonly used for pages with long content.

# HTTP Methods

HTTP methods are a way for the client to show their intended action when making a request. The most common methods are:

- `GET`: used for getting information from a web server
- `POST`: used for submitting data to the web server and potentially creating new records
- `PUT`: used for submitting data to a web server to update information
- `DELETE`: used for deleting information/records

# HTTP Status Codes

<table>
  <tr>
    <th>Status Code Range</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>100-199 Information Response</td>
    <td>Sent to tell the client the first part of their request has been accepted and they should continue. Not very common anymore.</td>
  </tr>
  <tr>
    <td>200-299 Success</td>
    <td>Used to tell the client their request was successful.</td>
  </tr>
  <tr>
    <td>300-399 Redirection</td>
    <td>Used to redirect their request to another resource.</td>
  </tr>
  <tr>
    <td>400-499 Client Errors</td>
    <td>Used to inform the client that there was an error with their request.</td>
  </tr>
  <tr>
    <td>500-599 Server Errors</td>
    <td>Reserved for errors on server-side and usually indicates a serious problem with the server.</td>
  </tr>
</table>

Some of the most common HTTP responses are:

<table>
  <tr>
    <th>Status Code</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>200 OK</td>
    <td>Request completed</td>
  </tr>
  <tr>
    <td>201 Created</td>
    <td>A resource has been created</td>
  </tr>
  <tr>
    <td>301 Moved Permanently</td>
    <td>Redirects client browser to a new webpage or tells search engines the page has moved</td>
  </tr>
  <tr>
    <td>302 Found</td>
    <td>Similar to 301, but is only a temporary change</td>
  </tr>
  <tr>
    <td>400 Bad Request</td>
    <td>Tells the browser something was wrong or missing in their request</td>
  </tr>
  <tr>
    <td>401 Not Authorised</td>
    <td>Not allowed to view this resource without authorisation</td>
  </tr>
  <tr>
    <td>403 Forbidden</td>
    <td>You do not have permission to view the resource whether logged in or not</td>
  </tr>
  <tr>
    <td>405 Method Not Allowed</td>
    <td>Resource does not allow this method request, for example, if a GET request is sent when a POST request was expected</td>
  </tr>
  <tr>
    <td>404 Page Not Found</td>
    <td>Page does not exist</td>
  </tr>
  <tr>
    <td>500 Internal Service Error</td>
    <td>Server has encountered an error that it does not know how to handle</td>
  </tr>
  <tr>
    <td>503 Service Unavailable </td>
    <td>Cannot handle your request as it is overloaded or down for maintenance</td>
  </tr>
</table>	
 	
# Headers

Some common headers that are sent from the client are:

- `Host`: providing the host header lets you tell the website which one you require
- `User-Agent`: tells the website your browser version and software, helps it format the website for your browser
- `Content-Length`: tells the website how much data to expect in the web request
- `Accept-Encoding`: tells the web server what types of compression methods the browser supports
- `Cookie`: data sent to the server to help remember your information

<br/>Some common headers that are returned to the client are:

- `Set-Cookie`: information to store which gets sent back to the web server on each request
- `Cache-Control`: how long to store the content of the response in the browser's cache before it requests it again
- `Content-Type`: tells the client what type of data is being returned i.e. HTML, CSS, JavaScript etc.
- `Content-Encoding`: what method has been used to compress the data to make it smaller

# Cookies

A small piece of data stored on your computer, cookies are saved when you receive a `"Set-Cookie"` header from a server. In each request, you will send the cookie back to the web server to remind it who you are. Cookies can be used for many purposes but are most commonly used for website authentication. 