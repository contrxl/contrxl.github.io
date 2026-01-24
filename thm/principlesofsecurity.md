---
title: Principles of Security
layout: notes
---
# Principles of Security

## CIA

- Confidentiality: ensures only intended recipients can access the data.
- Integrity: ensures the data cannot be altered, or alterations can be detected.
- Availability: ensures the system or service is available at need.

<br/>Going beyond these three main points, the following should also be considered:
- Authenticity: ensuring document/file/data is from the claimed source.
- Nonrepudiation: ensures the original source cannot deny that they are the original source.

## Parkerian Hexad

Donn Parker proposed this in 1998, it is a set of six security elements:

1. Availability
2. Utility
3. Integrity
4. Authenticity
5. Confidentiality
6. Possession

<br/>In addition to the above discussed elements, this adds:
- Utility: usefulness of the information.
- Possession: ensure information is protected form theft, unauthorised copying or controlling.

## DAD

- Disclosure: opposite of confidentiality.
- Alteration: opposite of integrity.
- Destruction/Denial: opposite of availability.

# Fundamental Concepts of Security Models
## Bell-LaPadula Model

- Simple Security Property: "no read up", this means a low security subject cannot read an object at a high security level.
- Star Security Property: "no write down", this means a subject at a high security level cannot write to an object at a low security level.
- Discretionary-Security Property: an access matrix used to allow read and write operations.

## Biba Model

- Simple Integrity Property: "no read down", this means a high integrity subject should not read from a lower integrity object.
- Star Integrity Property: "no write up", a lower integrity subject should not write to a high integrity object.

## Clark-Wilson Model

- Constrained Data Item (CDI): The data type whose integrity should be preserved.
- Unconstrained Data Item (UDI): All data types beyond CDI.
- Transformation Procedures (TPs): Programmed operations like read and write.
- Integrity Verification Procedures (IVPs): Check and ensure validity of CDIs.

## Defence In Depth

This is simply creating a security system of multiple levels. For example, have locked doors, security cameras and biometric recognition for employees.

## ISO/IEC 19249

Five architectural principles:

1. Domain Separation: each entity should have its own domain and be assigned a common set of security attributes.
2. Layering: relates to defence-in-depth. Systems structured into many abstract levels or layers can be secured at each layer.
3. Encapsulation: hide lower level implementations, preventing manipulation by providing higher level interfaces or APIs.
4. Redundancy: ensures integrity and availability.
5. Virtualisation: sharing a single set of hardware among multiple systems, provides sandboxing.

<br/>Five design principles:

1. Least Privilege: a person should have the minimum privilege to do their job and no more.
2. Attack Surface Minimisation: like disabling unneeded systems or services.
3. Centralised Parameter Validation: invalid inputs lead to exploits, always validate user inputs.
4. Centralised General Security Services: all security services should be centralised.
5. Prepare for Error and Exception Handling: always prepare, systems should be designed to fail safe, e.g. if a firewall fails it should block all traffic rather than allow.

# Zero Trust vs. Trust But Verify

- Trust But Verify: teaches that we should always verify even if an entity is trusted. Usually requires setting up logging mechanisms and going through logs to ensure everything is normal.
- Zero Trust: treats trust as a vulnerability, every entity is considered adversarial.