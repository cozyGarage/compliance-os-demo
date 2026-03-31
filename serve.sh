#!/bin/bash
# ComplianceOS — Quick local server
cd "$(dirname "$0")"
python3 -m http.server 8000
