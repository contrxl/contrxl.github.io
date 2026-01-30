---
title: OpenCTI
layout: notes
---

[OpenCTI](https://github.com/OpenCTI-Platform/opencti) is an open-source platform to help organisations manage CTI via storage, analysis, visualisation and presentation of threat campaigns and IOCs.

# OpenCTI Data Model

OpenCTI uses a variety of knowledge schemes, the main one is STIX2 (Structured Threat Information Expression). OpenCTI highlight services include:

- GraphQL API: connects clients to the database and messaging system
- Write Workers: Python processes to write queries asynchronously from RabbitMQ messaging system
- Connectors: Python processes to ingest, enrich or export data
- OpenCTI connectors fall under the following classes:
- External Input: ingests info from external sources
- Stream: consumes platform data stream
- Internal Enrichment: takes in new OpenCTI entities from user requests
- Internal Import File: extracts info from uploaded reports
- Internal Export File: exports info form OpenCTI to different formats