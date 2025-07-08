#!/bin/bash

# Copies all PDFs from Zotero's storage into a clean folder on Desktop
mkdir -p ~/Desktop/ZoteroPDFsClean
find ~/Zotero/storage -name "*.pdf" -exec cp "{}" ~/Desktop/ZoteroPDFsClean \;
