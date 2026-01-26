---
title: Upload Vulnerabilities
layout: notes
---

# Overwrite Existing Files

When files are uploaded to a server, checks should be carried out to ensure the file will not overwrite anything which already exists. This should also apply to protected files, for example, web pages should not be writeable to the user.

# RCE

Allows arbitrary code to be executed on the web server. Even though in most cases this will only allow commands to be executed as the www-data user, its still a serious vulnerability. In a web app, this tends to happen by uploading a program written in a language the server understands (like PHP, Python Django, JavaScript).

# Filtering

- Client-side: these are scripts running in the user's browser, mostly JavaScript. This means filtering occurs before the file is uploaded to the server, but since the filtering occurs on your device, it is trivial to bypass.
- Server-side: scripts running on the server. Traditionally PHP but now there are lots of widely used options. More difficult to bypass.
- There are a few common types of filtering/validation:
- Extension Validation: a filter that checks what the file extension of a file is and determines whether to allow/block.
- MIME Validation: Multipurpose Internet Mail Extension types are an identifier for files transferred over HTTPS. MIME types follow the format `<type>/<subtype>`.
- Magic Number Validation: a string of bytes at the beginning of file content which identify it. Unix systems use the magic number to verify the type of a file.
- File Length Filtering: used to prevent huge files being uploaded to the server. If a server expects only a file of a certain size to be uploaded, a filter may be in place to prevent larger uploads.
- File Name Filtering: files should always be unique, names should be sanitised of dangerous characters to prevent disruption.
- File Content Filtering: scan full contents of uploaded files to ensure its not spoofing extension, MIME and Magic Number.

# Bypass Client-Side Filtering

- Disable JavaScript in browser: if not required to load the site, this will bypass any client-side script filters.
- Intercept and Modify Incoming Page: incoming page can be stripped of its filter before it has a chance to run.
- Intercept and Modify File Upload: intercept uploaded file after it has already passed and been accepted by the incoming filter.
- Send the File Directly to Upload Point: using curl can post data directly to the page for handling the file uploads.- 