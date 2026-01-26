---
title: How Websites Work
layout: notes
---

There are two major components to a website:

1. Front End (Client Side): the way a browser renders a website
2. Back End (Server Side): a server which processes the request

# HTML

Websites are primarily created using:

- HTML
- CSS
- JavaScript

HyperText Markup Language (HTML) is the language websites are written in.
```html
    <html>
    	<head>
    			<title>Page Title</title>
    	</head>
    	<body>
    			<h1>Example Heading</h1>
    			<p>Example paragraph.</p>
    	</body>
    </html>
```
<br/>
The above is an example of HTML code, this has the following components:

- `<!DOCTYPE html>` - defines the page as a HTML5 document.
- `<html>` - root element of the page, all other elements follow this.
- `<head>` - contains information about the page, like title.
- `<body>` - defines the HTML document's body, only content in the body is shown in browser.
- `<h1>` - defines a large heading.
- `<p>` - defines a paragraph.

<br/>Tags can contain attributes, each element can have multiple attributes with its own purpose. Elements can also have an id attribute which is unique to it, each element must have different id's. IDs can be used for styling.

# JavaScript

JS is used to control the functionality of web pages - without JS, a page would not have interactive elements. JS can update pages in real time. It is added within page source code and can be loaded within `<script>` tags or can be included remotely via the `src` attribute.

# Sensitive Data Exposure

This occurs when a website doesn't protect clear-text information from the end user. For example, a developer may have forgotten to remove login credentials or hidden links from HTML source code.

# HTML Injection

This occurs when user input is displayed on a page, if the site fails to sanitise user input, an attacker could inject HTML into the website.