# Run Frontend and Backend in separate PowerShell windows

Write-Host "Starting Frontend..." -ForegroundColor Green
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$PSScriptRoot\frontend'; npm run init; npm run dev"

Write-Host "Starting Backend..." -ForegroundColor Green
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$PSScriptRoot\backend'; pip install -r requirements.txt; python app.py"

Write-Host "Both frontend and backend are starting in separate terminals..." -ForegroundColor Cyan


# .\run.ps1  -> to run this command
