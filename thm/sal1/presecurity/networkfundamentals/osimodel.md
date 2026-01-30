---
title: The OSI Model
layout: notes
---

# What is the OSI Model?

The Open Systems Interconnection model is a critical framework dictating how all networked devices will send, receive and interpret data. The OSI model consists of seven layers, each layer has a different set of responsibilities. The model is laid out as follows:

(7.) Application
(6.) Presentation
(5.) Session
(4.) Transport
(3.) Network
(2.) Data Link
(1.) Physical

# 1. Physical

This layer references the physical components of hardware used in networking and is the lowest layer. Devices use electrical signals to transfer data between each other in a binary numbering system.

# 2. Data Link

This layer focuses on physical addressing, it receives a packet from the network layer including the IP address of the remote computer, and adds the MAC address of the receiving endpoint. Every network-enabled computer has a NIC which comes with a unique MAC address to identify it. MAC address are burnt into the card and can't be changed (but can be spoofed). The data link layer needs to present data in a format suitable for transmission.

# 3. Network

This layer handles routing & data reassembly. Some protocols at this layer determine the "optimal" path that data should take to reach a device, these include Open Shortest Path First (OSPF) and RIP (Routing Information Protocol). The factors which decide the route to take are:

- What path is shortest? i.e. has the least amount of devices the packet needs to travel across.
- What path is most reliable? i.e. have packets been lost on that path before?
- Which path has the faster physical connection? i.e. is one path using copper or fibre?

At this layer, everything is dealt with via IP addresses. Devices like routers capable of delivering packets using IP addresses are known as Layer 3 devices.

# 4. Transport

This layer plays a vital part in transmitting data across a network. When data is sent between devices, it follows one of two different protocols that are based upon several factors:

- TCP (Transmission Control Protocl)
- UDP (User Datagram Protocol)
- TCP is used for file sharing, internet browsing and sending emails. These services need data to be accurate and complete.

<table>
  <tr>
    <th>Advantages of TCP</th>
    <th>Disadvantages of TCP</th>
  </tr>
  <tr>
    <td>Guarantees accuracy of data</td>
    <td>Requires reliable connection between devices</td>
  </tr>
  <tr>
    <td>Capable of synchronising two devices</td>
    <td>Slow connection can bottleneck another device</td>
  </tr>
  <tr>
    <td>Performs more processes for reliability</td>
    <td>Significantly slower due to work done by devices using the protocol</td>
  </tr>
</table>

UDP is not as advanced as TCP, there is no synchronisation between devices. UDP is useful for protocols discovering devices like ARP and DHCP or for video streaming.

<table>
  <tr>
    <th>Advantages of UDP</th>
    <th>Disadvantages of UDP</th>
  </tr>
  <tr>
    <td>Much faster than TCP</td>
    <td>Does not care if data is received</td>
  </tr>
  <tr>
    <td>Leaves application layer to decide if there is control over how quickly packets are sent </td>
    <td></td>
  </tr>
  <tr>
    <td>Does not reserve a continuous connection on a device</td>
    <td>Unstable connection can result in terrible experience for the user</td>
  </tr>
</table>

# 5. Session

Once data has been correctly translated from the presentation layer (layer 6) the session layer will create and maintain the connection to the other computer for which the data is destined. A connection is established and a session is created, as long as the connection is active, so is the session. This is also responsible for closing the connection if it is unused or lost. Sessions are unique, meaning data cannot travel over different sessions.

# 6. Presentation

Standardisation occurs here, this layer acts as a translator for data to and from the application layer. Security features like data encryption occur here.

# 7. Application

This is the layer where protocols and rules are in place to determine how the user should interact with data sent or received. Applications like email clients, browsers or file server browsers provide a GUI whilst others provide web interfaces.