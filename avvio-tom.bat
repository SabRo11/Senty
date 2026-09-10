@echo off
setlocal

cd /d "C:\Users\tommaso.tacchino\OneDrive - Havas\Documents\GitHub\Senty"

echo.
echo ================================
echo   Avvio locale progetto Senty
echo ================================
echo.

where npm >nul 2>&1
if errorlevel 1 (
echo ERRORE: npm non trovato.
echo Verifica che Node.js sia installato e presente nel PATH.
pause
exit /b 1
)

if not exist "node_modules" (
echo Dipendenze non trovate. Eseguo npm install...
echo.
call npm install

```
if errorlevel 1 (
    echo.
    echo ERRORE durante npm install.
    pause
    exit /b 1
)
```

) else (
echo Dipendenze gia installate.
)

echo.
echo Avvio Vite...
echo URL: http://localhost:5173
echo Premi CTRL+C per fermare il server.
echo.

start "" "http://localhost:5173"
call npm run dev

endlocal