@echo off
title Portfolio Imane Elkssimi - Serveur local
cd /d "%~dp0"
echo.
echo ================================================
echo   Demarrage du site... patientez 2 secondes.
echo ================================================
echo.

where npx >nul 2>&1
if %errorlevel%==0 (
    start "" http://localhost:3000
    npx --yes serve . -l 3000
    goto :eof
)

where python >nul 2>&1
if %errorlevel%==0 (
    start "" http://localhost:8080
    python -m http.server 8080
    goto :eof
)

where python3 >nul 2>&1
if %errorlevel%==0 (
    start "" http://localhost:8080
    python3 -m http.server 8080
    goto :eof
)

echo Aucun outil trouve (Node.js ou Python).
echo Solution la plus simple : fermez cette fenetre et
echo double-cliquez directement sur index.html a la place.
echo.
pause
