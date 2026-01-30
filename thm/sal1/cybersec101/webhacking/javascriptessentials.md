---
title: JavaScript Essentials
layout: notes
---

# Essential Concepts
## Variables

There are three ways to declare a variable in JS:

- `var`
- `let`
- `const`
    
<br/>`var` is function-scoped, while `let` and `const` are block-scoped which allows better control over variable visibility in specific code blocks.

## Data Types

Data types define the type of value a variable can hold, examples include: string, number, boolean, null, undefined and object.

## Functions

A function is a block of code designed to perform a specific task, in JS this looks like:

```javascript
function PrintResult(rollNum) {
	alert("Username with roll number " + rollNum + " has passed.");
}
for (let i = 0; i < 100; i++) {
	PrintResult(rollNumbers[i])
}
```

## Loops

Loops allow a code block to run multiple times, common loops are `for, while` and `do..while`.

## Request-Response Cycle

This is simply when a users browser sends a request to a web server and it responds with the requested information.

# Overview

JS is an interpreted language, meaning code is executed directly in browser without compilation. Some sample code building blocks are below:

```javascript
// Hello, World! program
console.log("Hello, world!");

// Variable and data type
let age = 25; //Number

// Control Flow Statement
if (age >= 18) {
	console.log("You are an adult.");
} else {
	console.log("You are a minor.");
}

// Function
function greet(name) {
	console.log("Hello, " + name + "!");
}

// Call the function
greet("Bob");
```

<br/>A simple JS program that adds two numbers would look like:

```javascript
let x = 5;
let y = 10;
let result = x + y;
console.log("The result is: " + result);
```

# Internal JavaScript

JavaScript can be embedded directly in HTML with `<script>` tags. These are placed inside the `<head>` section if they need to load before the page content is rendered, or in the `<body>` section if they need to interact with elements loaded on the page. The above example program can be embedded in a HTML file like so:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Internal JS</title>
</head>
<body>
    <h1>Addition of Two Numbers</h1>
    <p id="result"></p>
    <script>
        let x = 5;
        let y = 10;
        let result = x + y;
        document.getElementById("result").innerHTML = "The result is: " + result;
    </script>
</body>
</html>
```

<br/>The JS interacts with the HTML by selecting the element `<p>` with the `id="result"` and updating its content with `document.getElementById("result").innerHTML`, this is then executed when the browser loads the file.

# External JavaScript

This refers to creating and storing JS code in a separate file with a `.js` extension. Continuing with the above example, you would place the following in a file called something like `script.js`:

```javascript
let x = 5;
let y = 10;
let result = x + y;
document.getElementById("result").innerHTML = "The result is: " + result;
```

The following HTML file will then call this script when it loads:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>External JS</title>
</head>
<body>
    <h1>Addition of Two Numbers</h1>
    <p id="result"></p>
    
    <!-- Link to external JS file -->
    <script src="script.js"></script>
</body>
</html>
```

# Verifying Internal or External JS

Inside a pages source code, any internal JS will appear directly within `<script>` tags, whereas any external JS will appear as `<script src="source.js">`.

# Abusing Dialogue Functions

JS provides built-in functions like alert, prompt, and confirm to facilitate user interaction.
Alert

The alert function displays a message in a dialogue box with an "OK" button, typically to convey messages or warnings to users. For example:

```javascript
alert("Hello user!");
```

<br/>Would simply display a popup that reads "Hello user!".

## Prompt

The prompt function asks the user for input, it returns the entered value when the user clicks "OK" or null if they click "Cancel". The prompt function can be used like so:

```javascript
name = prompt("What is your name?");
alert("Hello " + name);
```

<br/>This will prompt the user to enter their name, then display an alert box saying hello.

## Confirm

This displays a dialogue box with "OK" and "Cancel" as options, it returns true if "OK" is clicked, or false if "Cancel" is clicked. For example:

```javascript
confirm("Do you want to continue?")
```

This will display the message "Do you want to continue?" alongside "OK" and "Cancel" buttons.


## Exploiting the Functionality

Bad actors could exploit this functionality by sending malicious files to create inconveniences or worse. A simple example of this is a file with the following contents:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Hacked!</title>
</head>
<body>
    <script>
        for (let i = 0; i < 3; i++) {
            alert("Hacked!");
        }
    </script>
</body>
</html>
```

<br/>When opened, this displays "Hacked!" in an alert box 3 times, the user is forced to click "OK" on each alert before they can close the page.

# Bypassing Control Flow Statements

One of the most used conditionals is if-else which allows code to be executed based on true/false conditions. An example of a simple if-else conditional that checks a users age is:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Age Verification</title>
</head>
<body>
    <h1>Age Verification</h1>
    <p id="message"></p>
    <script>
        age = prompt("What is your age?")
        if (age >= 18) {
            document.getElementById("message").innerHTML = "You are an adult" }   else {
            document.getElementById("message").innerHTML = "You are a minor"
        }
    </script>
</body>
</html>
```

This code checks the users age and returns a message based on their input. If a developer had implemented this as above, it would be easy to bypass, as you could see the condition requirements directly in the source and therefore change your input to meet the desired condition.

# Minified Files

Minification is the process of compressing a JS file by removing all unnecessary characters like spaces, line breaks, comments and even shortening variable names. JS files can be obfuscated/minified by putting the code through https://codebeautify.org/javascript-obfuscator. Similarly, they can be deobfuscated using: https://obf-io.deobfuscate.io/.

# Best Practice

- Avoid relying on solely client-side validation, users can disable or manipulate this, so it is essential to also validate server-side.
- Refrain from adding untrusted libraries. Including JS scripts blindly from external sources can open your app up to vulnerabilities.
- Avoid hardcoding secrets.
- Minify and obfuscate your JavaScript code to reduce load times and make it hard for attackers to understand the logic.
