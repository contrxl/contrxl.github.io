---
title: KAPE
layout: notes
---

Kroll Artifact Parser and Executor parses and extracts Windows forensics artifacts. It takes targets and copies them in two passes. The first pass copies files it can which are not locked by the OS, the second pass uses raw disk reads to bypass OS locks and copy files. Copied files are saved with original timestamps and metadata in a similar directory structure.

# Target Options

Targets are artifacts to be collected from a system/image and copied to a desired destination. KAPE defines targets using `.tkape` files which contain info about the artifact you wish to collect.

# Compound Targets

These are compounds of multiple targets. These help collect multiple targets in a single command, examples of compound targets are `!BasicCollection`, `!SANS_triage` and `KAPEtriage`. Compound targets can be viewed in `KAPE\Targets\Compound`.

# !Disabled

This is a list of targets to keep in the KAPE instance, but not in the active targets list.

# !Local

Targets that should not sync with the KAPE GitHub repository, these are targets specific to your environment.

# Module Options

Modules run specific tools against the provided set of files, their goal is to run a command and store the output as `.csv` or `.txt`. Modules are understood as files with `.mkape` extensions. The bin directory contains executables which are not natively present on most systems.

# GUI

Select `Target Options` to allow changing of the target source. The Flush option will clear the target destination, so be careful with usage. `Add %d` will append date info to the directory name, `Add %m` will append machine info to the directory. Volume Shadow Copies can be processed by enabling `Process VSCs`. A `Base Name` must be provided for all created files.

# CLI

KAPE must be run as admin, a basic example of CLI usage is:

```shell
kape.exe --tsource C: --target KapeTriage --tdest [DEST] --mdest [MODULE] --module [MODULE_NAME]
```

<br/>Full CLI usage and switches can be investigated using `kape.exe`.