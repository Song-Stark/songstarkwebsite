# PowerShell script to check React server DOM packages
# Usage: .\check-react-packages.ps1

Write-Host "Checking React server DOM packages..." -ForegroundColor Cyan
Write-Host ""

# Check for react-server-dom packages
$packages = @("react-server-dom-parcel", "react-server-dom-turbopack", "react-server-dom-webpack")
$missingPackages = @()

foreach ($package in $packages) {
    $result = npm ls $package 2>&1
    if ($result -match "empty" -or $result -match "not found") {
        $missingPackages += $package
        Write-Host "$package : NOT FOUND" -ForegroundColor Yellow
    } else {
        Write-Host "$package : INSTALLED" -ForegroundColor Green
    }
}

Write-Host ""

if ($missingPackages.Count -gt 0) {
    Write-Host "Missing packages detected: $($missingPackages -join ', ')" -ForegroundColor Yellow
    Write-Host ""
    $install = Read-Host "Would you like to install missing packages? (y/n)"
    if ($install -eq "y" -or $install -eq "Y") {
        Write-Host "Installing packages..." -ForegroundColor Cyan
        foreach ($package in $missingPackages) {
            npm install $package --save-dev
        }
        Write-Host "Installation complete!" -ForegroundColor Green
    }
} else {
    Write-Host "All packages are installed." -ForegroundColor Green
}

Write-Host ""
Write-Host "Package check complete." -ForegroundColor Cyan

