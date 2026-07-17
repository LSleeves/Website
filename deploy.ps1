# Deploy gannonrutty.com — builds the image FIRST, swaps the container only if
# the build succeeds, so a broken build can never take the site down.
# Usage: & .\deploy.ps1   (from C:\Users\ganno\homelab\gannonrutty)

# docker writes build progress to stderr; under EAP 'Stop' PowerShell 5.1 treats
# that as a terminating error and aborts. Fail on the real exit code instead.
$ErrorActionPreference = 'Continue'
Set-Location (Split-Path -Parent $MyInvocation.MyCommand.Path)

$name  = 'gannonrutty-website'
$image = 'gannonrutty-website'

Write-Host "==> Building $image" -ForegroundColor Cyan
docker build -t $image .
if ($LASTEXITCODE -ne 0) { Write-Host "BUILD FAILED - old container left running" -ForegroundColor Red; exit 1 }

Write-Host "==> Swapping container" -ForegroundColor Cyan
docker stop $name 2>$null | Out-Null
docker rm $name 2>$null | Out-Null
docker run -d --name $name --restart=always -p 3000:3000 $image | Out-Null

Start-Sleep -Seconds 4
docker ps --filter "name=$name" --format '{{.Names}}  {{.Status}}  {{.Ports}}'
try {
  $r = Invoke-WebRequest -Uri 'http://localhost:3000' -TimeoutSec 15 -UseBasicParsing
  Write-Host "Smoke test: HTTP $($r.StatusCode)" -ForegroundColor Green
} catch {
  Write-Host "Smoke test FAILED: $($_.Exception.Message)" -ForegroundColor Red
  docker logs $name --tail 20
  exit 1
}
