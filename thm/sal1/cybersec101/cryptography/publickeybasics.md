---
title: Public Key Cryptography Basics
layout: notes
---
# RSA

RSA is based on the mathematically difficult problem of factoring a large number. Multiplying two large prime numbers is easy, but finding factors of a huge number requires a lot of compute. For example, its quite hard to find the factors of $16676449494295486767649$. In reality, this number would be much larger, usually in excess of 300 digits, making it infeasible for a computer to determine the factorisation of the product. In action, RSA looks like:

Bob chooses two primes: $p=157$, and $q=199$. He calculates:

$$
\begin{align}
n = p * q \\
n = 157 * 199 \\
n = 31243
\end{align}$$

With:

$$
   \begin{align}
   ϕ(n) = n - p - q + 1 \\
   ϕ(n) = 31243 - 157 - 199 + 1 \\
   ϕ(n) = 30888
   \end{align}$$

Bob selects $e=163$  such that $e$ is relatively prime to $ϕ(n)$. He also selects $d=379$ where:

$$\begin{align}
e * d = 1 \pmod {ϕn} \\
e * d = 163 * 379 \\
e * d = 61777 \pmod {ϕn} \\
61777 \pmod {30888} = 1
\end{align}$$

The public key is then $(n,e)$ i.e. $(31243,163)$ and the private key is $(n,d)$ i.e. $(31243, 379)$. 

To encrypt $x =13$, Alice calculates and sends:

$$\begin{align}
   y = x^e \pmod n \\
   y = 13^{163} \pmod {31243} \\ 
   y = 16341
   \end{align}$$

To decrypt this, Bob calculates:

$$\begin{align}
   x = y^d \pmod n \\
   x = 16341^{379} \pmod {31243} \\ 
   x = 13
   \end{align}$$

## RSA In CTFs

CTFs often require breaking or calculating variables in RSA algorithms. Tools are available for this like `RsaCtfTool` and `rsatool`. You need to know the main variables in these challenges: $p$, $q$, $m$, $n$, $e$, $d$ and $c$.

- $p$ and $q$ are large prime numbers.
- $n$ is the product of $p$ and $q$.
- The public key is $n$ and $e$.
- The private key is $n$ and $d$.
- $m$ is the original plaintext.
- $c$ is the ciphertext.

# Diffie-Hellman

Key exchange aims to establish a secret between two parties, it allows two parties to establish a shared secret over an insecure channel. This shared key can then be used for symmetric encryption in subsequent communications.

Alice and Bob generate secrets A & B independently. They have some common material, C. We assume that when secrets are combined, they cannot be separated. We assume the order in which they combine does not matter. Alice and Bob combine their secrets to form AC and BC. They send these to each other and combine the received part with their secret to create two identical keys ABC. The exact process is:

1. Alice and Bob agree on public variables, a large prime number $p$ and $a$ generator $g$, where $0 < g < p$. These values are disclosed publicly, as an example, we will use $p=29$ and $g=3$.
2. Each party chooses a private integer, Alice chooses $a=13$ and Bob chooses $b=15$, these represent their private keys and must not be disclosed.
3. Alice calculates $A = g^{a mod p} = 3^{13 mod 29} = 19$. Bob calculates $B = {g^b mod p} = 3^{15 mod 29} = 26$. These are their public keys.
4. They send the keys to each other in the key exchange.
5. The shared secret is calculated. Alice uses $B^{a mod p} = 26^{13 mod 29} = 10$ and Bob calculates $A^{b mod p} = 19^{15 mod 29} = 10$. Both calculations have the same outcome, $g^{ab mod p} = 10$.

# SSH

By default, ssh-keygen is the program used to generate RSA SSH keys. The following algorithms are available:

- DSA (Digital Signature Algorithm)
- ECDSA (Elliptic Curve Digital Signature Algorithm)
- ECDSA-SK (ECDSA with Security Key)
- Ed25519 (Edwards Curve Digital Signature Algorithm with Curve 25519)
- Ed25519-SK (Ed25519 with Security Key)

# Digital Signatures and Certificates

Digital signatures can be generated with your private key using asymmetric cryptography. The simplest form of digital signature is encrypting a document with your private key, to verify this, the recipient can decrypt it with your public key. Certificates are used by websites to prove that they are the real site.

# PGP and GPG

PGP (Pretty Good Privacy) is software that implements encryption for encrypting files and performing digital signing. GPG is an open source implementation of the OpenPGP standard.