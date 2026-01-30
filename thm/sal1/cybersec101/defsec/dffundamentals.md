---
title: Digital Forensics Fundamentals
layout: notes
---

# Digital Forensics Methodology

The National Institute of Standards and Technology (NIST) defines a general process for every case:

1. Collection: data collection, identify all devices from which data can be collected. It is necessary to ensure data is not tampered with while collecting and to maintain proper documentation.
2. Examination: data needs to be filtered to extract data of interest.
3. Analysis: analyse data by correlating with evidence to draw conclusions. Depends upon case scenario and available data.
4. Reporting: digital report is prepared containing methodology and detailed findings.

<br/>As part of collection, many categories of evidence may be collected, such as:

- Computer Forensics: investigating computers
- Mobile Forensics: mobile devices, call records, GPS locations etc.
- Network Forensics: includes entire affected network, like traffic logs
- Database Forensics: critical data stored in databases
- Cloud Forensics: data stored on cloud infrastructure
- Email Forensics: emails investigated to determine if they are part of phishing or fraudulent campaigns

# Evidence Acquisition

Forensics team need authorisation from correct authority before collecting any data, any evidence collected without approval will be inadmissible. It is important to maintain a chain of custody document, this document contains details like:

- Description of evidence
- Name of individuals who gathered it
- Data and time of collection
- Storage location of each piece of evidence
- Access times and individual record of who accessed the evidence
- Write-blockers are essential tools when accessing hard drives or other data that must not be modified.

# Windows Forensics

Forensic images can be taken of Windows systems, these are bit-by-bit copies, there are two categories:

- Disk Image: contains all data present on the storage device of the system, data is non-volatile, meaning it would survive even after a restart.
- Memory Image: data inside the systems RAM, this data is volatile. Memory image should be prioritised before any shutdown takes place which would delete volatile data.
- Popular tools for this are:
- FTK Imager: widely used for taking images of Windows OS, offers a GUI for creating the image and can be used for acquisition and analysis.
- Autopsy: open-source forensics platform, allows disk images to be imported and analysed.
- DumpIt: allows you to create memory images with a CLI and some commands.
- Volatility: open-source tool for analysing memory images, offers some useful plugins.
