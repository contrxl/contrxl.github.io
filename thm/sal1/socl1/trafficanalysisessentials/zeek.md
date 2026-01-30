---
title: Zeek
layout: notes
---

#  Network Monitoring vs Network Security Monitoring

- Network monitoring is focused on IT assets like uptime, device health and connection quality.
- Network security monitoring focuses on anomalies like rogue hosts, encrypted traffic, suspicious service and port usage.

# Zeek vs Snort

<table>
  <tr>
    <th></th>
    <th>Zeek</th>
    <th>Snort</th>
  </tr>
  <tr>
    <td>Capabilities</td>
    <td>NSM and IDS framework focused on network analysis. Event-based detection.</td>
    <td>IDS/IPS system. Signature and packet-based detection.</td>
  </tr>
  <tr>
    <td>Cons</td>
    <td>Hard to use. Analysis done out of Zeek, manually or by automation.</td>
    <td>Hard to detect complex threats.</td>
  </tr>
  <tr>
    <td>Pros</td>
    <td>Provides in-depth traffic visibility. Useful for threat hunting. Able to detect complex threats. Has scripting language and supports event correlation. Easy to read logs.</td>
    <td>Easy to write rules. Cisco supported rules. Community support.</td>
  </tr>
  <tr>
    <td>Common Use Case</td>
    <td>Network monitoring. In-depth traffic investigation. Intrusion detection in chained events.</td>
    <td>IDS and IPS. Stop known attacks/threats.</td>
  </tr>
</table>

# Architecture

Has two primary layers:

- Event Engine: where packets are processed and responsible for describing the event.
- Policy Script Interpreter: where semantic analysis is conducted, responsible for describing event correlations with Zeek scripts.

# Outputs

Zeek provides over 50 log files under seven different categories. The logs will be stored in the current working directly, or if Zeek is run as a service, in `/opt/zeek/logs/`.

# Basic Management

- `zeek -v`: check version
- `zeekctl [status|start|stop]`: controls for Zeek service, the only way to listen to live network traffic is to use Zeek as a service.

<br/>The main parameters are:

<table>
  <tr>
    <th>Parameter</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>-r</td>
    <td>Reading option, read/process a pcap</td>
  </tr>
  <tr>
    <td>-C</td>
    <td>Ignore checksum errors</td>
  </tr>
  <tr>
    <td>-v</td>
    <td>Version info</td>
  </tr>
  <tr>
    <td>zeekctl</td>
    <td>ZeekControl module</td>
  </tr>
  <tr>
    <td>-s</td>
    <td>Specify a signature file</td>
  </tr>
</table>

# Zeek Logs

Log files are generated according to traffic data. Logs will be generated for every connection in the wire.

<table>
  <tr>
    <th>Category</th>
    <th>Description</th>
    <th>Log Files</th>
  </tr>
  <tr>
    <td>Network</td>
    <td>Network protocol logs</td>
    <td>conn.log, dce_rpc.log, dhcp.log, dnp3.log, dns.log, ftp.log, http.log, irc.log, kerberos.log, modbus.log, modbus_register_change.log, mysql.log, ntlm.log, ntp.log, radius.log, rdp.log, rfb.log, sip.log, smb_cmd.log, smb_files.log, smb_mapping.log, smtp.log, snmp.log, socks.log, ssh.log, ssl.log, syslog.log, tunnel.log</td>
  </tr>
  <tr>
    <td>Files</td>
    <td>File analysis logs</td>
    <td>files.log, ocsp.log, pe.log, x509.log</td>
  </tr>
  <tr>
    <td>NetControl</td>
    <td>Network control and flow logs</td>
    <td>netcontrol.log, netcontrol_drop.log, netcontrol_shunt.log, netcontrol_catch_release.log, openflow.log</td>
  </tr>
  <tr>
    <td>Detection</td>
    <td>Detection and possible indicator logs</td>
    <td>intel.log, notice.log, notice_alarm.log, signatures.log, traceroute.log</td>
  </tr>
  <tr>
    <td>Network Observations</td>
    <td>Network flow logs</td>
    <td>known_certs.log, known_hosts.log, known_modbus.log, known_services.log, software.log</td>
  </tr>
  <tr>
    <td>Miscellaneous</td>
    <td>Additional logs for external alerts, inputs or failures </td>
    <td>barnyard2.log, dpd.log, unified2.log, unknown_protocols.log, weird.log, weird_stats.log</td>
  </tr>
  <tr>
    <td>Zeek Diagnostic</td>
    <td>Zeek diagnostic logs</td>
    <td>broker.log, capture_loss.log, cluster.log, config.log, loaded_scripts.log, packet_filter.log, print.log, prof.log, reporter.log, stats.log, stderr.log, stdout.log</td>
  </tr>
</table>
 	 	
Some of the most commonly used logs and their update frequencies are:

<table>
  <tr>
    <th>Update Frequency</th>
    <th>Log Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>Daily</td>
    <td>known_hosts.log</td>
    <td>Hosts that completed TCP handshakes</td>
  </tr>
  <tr>
    <td>Daily</td>
    <td>known_services.log</td>
    <td>List of used services</td>
  </tr>
  <tr>
    <td>Daily</td>
    <td>known_certs.log</td>
    <td>List of SSL certificates</td>
  </tr>
  <tr>
    <td>Daily</td>
    <td>software.log </td>
    <td>List of software used</td>
  </tr>
  <tr>
    <td>Per Session</td>
    <td>notice.log</td>
    <td>Anomalies detected by Zeek</td>
  </tr>
  <tr>
    <td>Per Session</td>
    <td>intel.log</td>
    <td>Traffic with malicious patterns</td>
  </tr>
  <tr>
    <td>Per Session</td>
    <td>signatures.log</td>
    <td>List of triggered signatures</td>
  </tr>
</table>

Logs can typically be categorised as follows:

<table>
  <tr>
    <th>Overall Info</th>
    <th>Protocol  Based</th>
    <th>Detection</th>
    <th>Observation</th>
  </tr>
  <tr>
    <td>conn.log</td>
    <td>http.log</td>
    <td>notice.log</td>
    <td>known_host.log</td>
  </tr>
  <tr>
    <td>files.log</td>
    <td>dns.log</td>
    <td>signatures.log</td>
    <td>known_services.log</td>
  </tr>
  <tr>
    <td>intel.log</td>
    <td>ftp.log</td>
    <td>pe.log</td>
    <td>software.log</td>
  </tr>
  <tr>
    <td>loaded_scripts.log</td>
    <td>ssh.log</td>
    <td>traceroute.log</td>
    <td>weird.log</td>
  </tr>
</table>
 	 	 		 	
# Processing Zeek Logs
## Basics

- `history`: view command history
- `!10`: execute the tenth command in history
- `!!`: execute the previous command

## Read File

- `cat sample.txt`: read sample.txt
- `head sample.txt`: read first ten lines of sample.txt
- `tail sample.txt`: read last ten lines of sample.txt

## Find & Filter

- `cat test.txt | cut -f 1`: cut the first field
- `cat test.txt | cut -c1`: cut the first column
- `cat test.txt | grep 'keywords'`: filter keywords
- `cat test.txt | sort`: sort alphabetically
- `cat test.txt | sort -n`: sort numerically
- `cat test.txt | wc -l`: count line numbers
- `cat test.txt | uniq`: eliminate duplicates
- `cat test.txt | nl`: show line numbers

## Advanced

- `cat test.txt | sed -n '11p'`: print line 11
- `cat test.txt | sed -n '10,15p'`: print lines between 10-15
- `cat test.txt | awk 'NR < 11 {print $0}`: print lines below 11
- `cat test.txt | awk 'NR == 11 {print $0}`: print line 11

## Special

- `cat signatures.log | zeek-cut uid`: find specific fields of Zeek logs

## Samples

- `sort | uniq`: sort alphabetically and remove duplicates
- `sort | uniq -c`: sort alphabetically, remove duplicates and count occurrences for each value
- `sort -nr`: sort numerically and recursively
- `rev`: reverse string characters
- `cut -d '.' -f 1-2`: split string on every period and print the first two fields
- `grep -v 'test'`: display lines that don't match 'test'
- `grep -v -e 'test1' -e 'test2'`: display lines that don't match one or both of 'test1'/'test2'.
- `grep -rin Testvalue1 * | column -t | less -S`: search "Testvalue1" everywhere, organise column spaces and view output with less.

# Zeek Signatures

Zeek supports signatures to have rules and event correlations to find noteworthy network activity. They use low-level pattern matching and cover conditions like Snort, however, they are not the primary detection point. Zeek signatures can be broken down as follows:

<table>
  <tr>
    <th>Signature id</th>
    <th>Unique Name</th>
  </tr>
  <tr>
    <td>Conditions</td>
    <td>Header: filtering packet headers for source and destination address, protocol, and port number. Content: filtering packet payload for specific value/pattern.</td>
  </tr>
  <tr>
    <td>Action</td>
    <td>Default Action: create "signatures.log" in case of signature match. Additional action: trigger a Zeek script.</td>
  </tr>
</table>

The most common filters and conditions for signatures are:

<table>
  <tr>
    <th>Condition Field</th>
    <th>Available Filters</th>
  </tr>
  <tr>
    <td>Header</td>
    <td>src-ip: Source IP
dst-ip: Destination IP
src-port: Source port
dst-port: Destination port
ip-proto: Target protocol, supports TCP, UDP, ICMP, ICMP6, IP, IP6</td>
  </tr>
  <tr>
    <td>Content</td>
    <td>payload: Packet payload
http-request: Decoded HTTP requests
http-request-header: Client-side HTTP headers
http-request-body: Client-side HTTP request bodys
http-reply-header: Server-side HTTP headers
http-reply-body: Server-side HTTP request bodys
ftp: Command line input of FTP sessions</td>
  </tr>
  <tr>
    <td>Context</td>
    <td>same-ip: Filter source + destination for address duplication</td>
  </tr>
  <tr>
    <td>Action</td>
    <td>event: Signature match message</td>
  </tr>
  <tr>
    <td>Comparison Operators</td>
    <td>==, !=, <, <=, >, >=</td>
  </tr>
  <tr>
    <td>NOTE!</td>
    <td>Filters accept string, numeric and regex values</td>
  </tr>
</table>
 	
# Example: Cleartext HTTP Password

To match a password transmitted over HTTP:

```
signature http-password {
	ip-proto == tcp
	dst-port == 80
	payload /.*password.*/
	event "Cleartext password found!"
}

# signature: Signature name
# ip-proto: Filtering TCP connection
# dst-port: Filtering destination port 80
# payload: Filtering the "password" phrase
# event: Signature match message
```

# Example: FTP Brute-Force

To detect each failed login over FTP and each attempt with any username:

```
signature ftp-username {
	ip-proto == tcp
	ftp /.*USER.*/
	event "FTP Username Input Found!"
}
signature ftp-brute {
	ip-proto == tcp
	payload /.*530.*Login.*incorrect.*/
	event "FTP Brute-force Attempt!"
}
```

# Zeek Scripts

- Zeek base scripts are located at `/opt/zeek/share/zeek/base`, these scripts are not intended to be modified.
- User generated or modified scripts should be located at `/opt/zeek/share/zeek/site`.
- Policy scripts are located at `/opt/zeek/share/zeek/policy`.
- To automatically load/use a script in live mode, you must identify it, this configuration file is `/opt/zeek/share/zeek/site/local.zeek`.
- Zeek scripts use the `.zeek` extension, nothing located under the `zeek/base` directory should be modified. Scripts can be called in live mode by loading them with `load @/script/path` or `load @script-name`.

# Basic Scripts

A basic Zeek script that prints "Started"/"Stopped" when Zeek is run looks like:

```
event zeek_init()
	{
		print ("Started!");
	}
event zeek_done()
	{
		print ("Stopped!");
	}
```

<br/>To print bulk information about each new connection:

```
event new_connection(c: connection)
{
	print c;
}
```

<br/>To filter bulk information to show only source and destination host info:

```
event new_connection(c: connection)
{
	print ("############");
	print ("");
	print("New Connection Found!");
	print ("");
	print fmt ("Source Host: %s # %s --->", c$id$orig_h, c$id$orig_p);
	print fmt ("Destination Host: resp: %s # %s" <-- c$id$resp_h, c$id$resp_p);
}
```

# Use Scripts and Signatures

Scripts can refer to signature, for example, a script can be used to detect if the previous 'ftp-admin' rule has a hit:

```
event signature_match (state: signature_state, msg: string, data: string)
{
if (state$sig_id == "ftp-admin")
	{
		print ("Signature hit! --> #FTP-Admin ");
	}
}
```

# Load Local Scripts

All base scripts can be run using `local`:

```
zeek -C -r [file] local
```

<br/>Zeek will then generate additional log files like `loaded_scripts.log`, `capture_loss.log` etc. Specific scripts can also be specified by outlining the path:

```
zeek -C -r [file] [path/to/script]
```

# Load Frameworks
## File Framework: Hashes

Majority of frameworks are designed to be used in scripting, you can see the usage of frameworks with `load @ $PATH/base/frameworks/framework-name`. The `hash-all-files` framework looks like this:

```
# Enable MD5, SHA1 and SHA256 hashing for all files.

@load base/files/hash
event file_new(f: fa_file)
	{
		Files::add_analyzer(f, Files::ANALYZER_MD5);
		Files::add_analyzer(f, Files::ANALYZER_SHA1);
		Files::add_analyzer(f, Files::ANALYZER_SHA256);
	}
```

## File Framework: Extract Files

This can help extract files transferred, it will create a new folder called `extract_files` for the extracted files.

## Notice Framework: Intelligence

This works with data feeds to process and correlate events and identify anomalies.

# Zeek Package Manager

Zeek Package Manager helps install third-party scripts/plugins.

<table>
  <tr>
    <th>Command</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>zkg install [package_path]</td>
    <td>Install a package</td>
  </tr>
  <tr>
    <td>zkg install [git_url]</td>
    <td>Install a package</td>
  </tr>
  <tr>
    <td>zkg list</td>
    <td>List installed package</td>
  </tr>
  <tr>
    <td>zkg remove</td>
    <td>Remove installed package</td>
  </tr>
  <tr>
    <td>zkg refresh</td>
    <td>Check version updates for installed packages</td>
  </tr>
  <tr>
    <td>zkg upgrade</td>
    <td>Update installed packages</td>
  </tr>
</table> 	