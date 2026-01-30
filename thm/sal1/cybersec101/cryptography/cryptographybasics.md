---
title: Cryptography Basics
layout: notes
---

# Symmetric Encryption

Uses the same key to encrypt and decrypt data, the key must be kept secret. This is also called private key cryptography. Communicating the key to a partner can be challenging because it requires a secure communication channel, and maintaining the keys secrecy can be difficult if there are many recipients. The following are examples of symmetric encryption:

- DES (Data Encryption Standard): adopted in 1977, uses a 56-bit key.
- 3DES: DES applied three times, making the key 168 bits (112 effective bits). Deprecated in 2019 and replaced with AES.
- AES (Advanced Encryption Standard): adopted in 2001, key size is 128, 192, or 256 bits.

# Asymmetric Encryption

Uses a pair of keys, one to encrypt and one to decrypt. Also called public key cryptography. Examples of this are RSA, Diffie-Hellman and Elliptic Curve Cryptography (ECC). The keys involved are known as public and private keys. Data encrypted with a public key can be decrypted with a private key. Tends to be slower than symmetric as keys are much larger.

# Basic Math
## XOR

Short for 'exclusive or'. This is a logical operation that plays a crucial role in computing and cryptographic applications. In binary, XOR compares two bits and returns 1 if they are different, 0 if they are the same. This operation is represented by ⊕ or ^.

<table>
  <tr>
    <th>A</th>
    <th>B</th>
    <th>A⊕B</th>
  </tr>
  <tr>
    <td>0</td>
    <td>0</td>
    <td>0</td>
  </tr>
  <tr>
    <td>0</td>
    <td>1</td>
    <td>1</td>
  </tr>
  <tr>
    <td>1</td>
    <td>0</td>
    <td>1</td>
  </tr>
  <tr>
    <td>1</td>
    <td>1</td>
    <td>0</td>
  </tr>
</table>

XOR has interesting properties making it useful in cryptography:

- A ⊕ A = 0 and A ⊕ 0 = 0 for any binary value A
- A ⊕ B = B ⊕ A
- (A ⊕ B) ⊕ C = A ⊕ (B ⊕ C)

<br/>XOR can be used as a basic symmetric encryption algorithm, consider the binary values $P$ and $K$, where $P$ is plaintext and $K$ is the secret key. The ciphertext is $C = P ⊕ K$.
If $C$ and $K$ are known, then $P$ can be recovered, because:
We know that: $C ⊕ K = (P ⊕ K) ⊕ K$
XOR is associative so: $(P ⊕ K) ⊕ K = P ⊕ (K ⊕ K)$
We know that: $K ⊕ K = 0$
So: $(P ⊕ K) ⊕ K = P ⊕ (K ⊕ K) = P ⊕ 0 = P$

## Modulo

Commonly written as $%$ or $mod$, the modulo operator $X%Y$ is the remainder when $X$ is divided by $Y$. Some examples:

- $25%5 = 0$, $25/5$ is $0$, no remainder.
- $23%6 = 5$, $23/6$ is $3$, remainder $5$.
- $23%7 = 2$, $23/7$ is $3$, remainder $2$.

<br/>Modulo is not reversible, the equation $x%5=4$ can have infinite values for $x$. Modulo always returns a positive result as the divisor, so for any integer $a$ and positive integer $n$, the result of $a%n$ will always be in range $0$ to $n - 1$.
