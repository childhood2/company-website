# Commit Railway deployment changes. Run this, then push via GitHub Desktop.
Set-Location $PSScriptRoot
git add package.json README.md
if (Test-Path package-lock.json) { git add package-lock.json }
git status
git commit -m "Add Railway deployment support (serve, scripts, README)"
Write-Host "Done. Push via GitHub Desktop."
