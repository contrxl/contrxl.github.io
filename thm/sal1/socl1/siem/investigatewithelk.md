---
title: Investigating with ELK 101
layout: notes
---

# ElasticStack Overview

ElasticStack is the collection of open source components linked together to help users take data from any source.

## ElasticSearch

Full-text search and analytics engine for storing JSON-formatted documents. Supports RESTful API to interact with data.

## Logstash

Data processing engine to take data from different sources, apply a filter and normalise before sending to its destination. The log file is divided into three parts:

- Input: user defined source from which data is ingested
- Filter: user specified filter options to normalise the log ingested above
- Output: where the user wants the filtered data to send, can be a listening port, Kibana interface etc.

## Beats

Host based agent used to transfer/ship data from endpoints to ElasticSearch, each beat is a single-purpose agent sending specific data to the ElasticSearch.

# Kibana

A web based data visualisation which works with ElasticSearch to analyse the data stream in real time.

## Discover Tab

Lets you:

- Search for logs
- Investigate anomalies
- Apply filters based on search terms/time periods
- Kibana requires an index pattern to access data stored/ingested.

# KQL Overview

KQL is used to search ingested logs/documents. Kibana also supports Lucene Query Language.

## Free Text Search

Searching for a term with no other parameters will return all documents containing that term from any field.

## Wildcard

A wildcard can be used to match parts of the term/word.

## Logical Operators

The operators `AND`, `OR` and `NOT` can be used.

## Field Based Search

A field based search can be carried out using `FIELD: VALUE`.