---
title: Linux Shells
layout: notes
---

# Types of Linux Shells

To see which shell you are using, you can use `echo $SHELL`. Available shells in your OS can be listed out with `cat /etc/shells`. You can switch shell temporarily by simply typing the name of your desired shell, or you can change permanently with `chsh -s /usr/bin/zsh`.

# Bourne Again Shell

This is the default for most distributions. Some of the key features of bash are:

- Widely used with scripting capabilities
- Offers tab completion
- Keeps history file and logs all commands

# Friendly Interactive Shell

Fish is not default in most distributions and focuses more on user-friendliness. Some key features of fish are:

- Offers very simple syntax
- Has spell correction
- Customisable command prompt
- Syntax highlighting based on command parts to help improve readability
- Provides scripting, tab completion and command history

# Z Shell

Combines functionalities of previous shells, has key features like:

- Advanced tab completion and scripting
- Auto spell correction
- Extensively customisable
- Provides tab completion, command history and several other features

# Shell Scripting and Components

A shell script is a set of commands that can be used to help automate repetitive tasks. All script files must have the extension `.sh`. Every script should start from shebang, the shebang line of a bash script is `#!/bin/bash`.

## Variables

A variable stores a value, in the below script, the variable name is used to display the name the user enters.

```bash
#!/bin/bash
echo "Whats your name?"
read name
echo "Hello, $name"
```

## Loops

A basic loop looks like:

```bash
#!/bin/bash
for i in {1..10};
do
echo $i
done
```

<br/>This loop will echo the numbers 1-10.

## Conditionals

A conditional statement will execute specific code only if a condition is satisfied. For example:

```bash
#!/bin/bash
echo "Enter your name:"
read name
if [ "$name" = "James" ]; then
	echo "Welcome $name! Here is your stuff."
else
	echo "Sorry $name! You are not authorised."
fi
```

## Comments

A comment can be added to help others understand the code by preceding a line of code with a `#`. 