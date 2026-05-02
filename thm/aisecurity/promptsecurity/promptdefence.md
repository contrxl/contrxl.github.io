---
title: Prompt Defence
layout: notes
---

# Defence in Depth

There is no single solution for prompt injection. Each layer of defence makes it harder for attackers to get through. The following layers should be considered for prompt defence:
- System Prompt Hardening: raise the bar at the instruction level
- Input Guardrails: catch malicious instructions before they reach the model
- Deployment Controls: limit what a compromised model can do
- Output Validation: treat model input as untrusted before it hits downstream systems

# System Prompt Hardening

<table>
  <tr>
    <th>Pattern</th>
    <th>What it does</th>
    <th>Why it matters</th>
  </tr>
  <tr>
    <td>Tight Scoping</td>
    <td>Define exactly what the model is for, and what it isn't for</td>
    <td>The narrower the defined role, the less leverage an attacker has</td>
  </tr>
  <tr>
    <td>Explicit Refusal Instructions</td>
    <td>Spell out how the model should handle override attempts</td>
    <td>Forces the attacker to work harder than with an undefended prompt</td>
  </tr>
  <tr>
    <td>Persona Restriction</td>
    <td>Explicitly disallow character adoption</td>
    <td>Directly address roleplay and grandma-style bypasses</td>
  </tr>
</table>

# Guardrails

The simplest form is a blocklist: a set of strings or regex patterns to reject a request. Catches the lowest-effort attacks. There are bypasses for this: base64 encoding, leetspeak, homoglyph attacks. The answer to filter evasion is using classifiers. These are models trained to recognise attack intent and not character sequences. Meta's Llama Prompt Guard 2 is a BERT-based classifier which takes input and labels it as benign or malicious.

Since this classifies semantic intent, it can catch variants it has never seen before. This can still be bypassed by dedicatd attackers. 

## Input vs. Output Guardrails

Guardrails operate at one of two points in a pipeline:
- Input Guardrails: Before the prompt reaches the model. 
- Output Guardrails: Run afer the model responds. Act as a safety net for what does get through.

<br />Providing the model with external content can bypass guardrails (indirect injection). The model would treat the content as context and it would arrive after the guardrails have already run.

# Securing Deployment

The principle of least privilege is a foundational concept in security. In the context or prompt injection, it determines the blast radius when an attacker succeeds. This same logic applies to any data the model can reach. If a RAG system pulls the entire document corpus, then an attacker with successful injection gets access to all of it. 

## LLM05:2025 Improper Output Handling

LLM output goes somewhere: renedered in a browser, sent to a database, handed to a function call. Unsanitised input could result in the model response becoming executable in whatever context receives it. The downstream consequences of this are classic vulnerabilites using a new attack path:
- LLM-generated JavaScript rendered in-browser -> XSS
- LLM-generated SQL executed without parameterisation -> SQLi
- LLM-output passed directly to `exec()` or shell functions -> RCE
