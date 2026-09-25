# Uruchom w PowerShell z katalogu projektu: ./INSTALL_CURSOR_SKILLS.ps1
$ErrorActionPreference = 'Stop'
Set-Location $PSScriptRoot

if (-not (Get-Command npx.cmd -ErrorAction SilentlyContinue)) {
    throw 'Brak npx. Zainstaluj Node.js, uruchom ponownie terminal i spróbuj ponownie.'
}

$steps = @(
    @{ Name = 'Impeccable'; Args = @('--yes', 'skills', 'add', 'pbakaus/impeccable', '-a', 'cursor', '-y', '--copy') },
    @{ Name = 'Taste Skill'; Args = @('--yes', 'skills', 'add', 'Leonxlnx/taste-skill', '--skill', 'design-taste-frontend', '-a', 'cursor', '-y', '--copy') },
    @{ Name = 'UI UX Pro Max'; Args = @('--yes', 'ui-ux-pro-max-cli', 'init', '--ai', 'cursor') },
    @{ Name = 'Vercel Agent Skills'; Args = @('--yes', 'skills', 'add', 'vercel-labs/agent-skills', '--skill', 'react-best-practices', '--skill', 'web-design-guidelines', '-a', 'cursor', '-y', '--copy') }
)

foreach ($step in $steps) {
    Write-Host "Instalacja: $($step.Name)"
    $arguments = $step.Args
    & npx.cmd @arguments
    if ($LASTEXITCODE -ne 0) {
        throw "Instalacja nie powiodła się: $($step.Name), kod: $LASTEXITCODE"
    }
}

Write-Host 'Gotowe. Przeładuj okno Cursora i sprawdź listę skilli.'
Write-Host 'HumanizerAI jest stroną WWW, nie skillem Cursor. Nie jest instalowany.'
