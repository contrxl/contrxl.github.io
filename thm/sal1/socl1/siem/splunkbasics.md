---
title: Splunk Basics
layout: notes
---

# Components

Splunk has three main components: Forwarder, Indexer and Search Head.

## Forwarder

A lightweight agent installed on the endpoint to be monitoring, tasked with collecting data and sending it to the Splunk instance. Some key data sources are:

- Web server generating web traffic
- Windows machine generating Windows Event Logs, PowerShell and Sysmon data
- Linux host generating host-centric logs
- Database generating DB connection requests, responses and errors

## Indexer

Processes data received from forwarders, normalises data into field-value pairs, determines its datatype and stores it as an event.

## Search Head

Allows users to search indexed logs using Splunk Search Processing Language. 