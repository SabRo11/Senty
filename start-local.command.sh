#!/bin/bash

cd "$(dirname "$0")" || exit 1

echo
echo "================================"
echo " Avvio locale progetto Senty"
echo "================================"
echo

if ! command -v npm >/dev/null 2>&1; then
    echo "ERRORE: npm non trovato."
    echo "Verifica che Node.js sia installato e presente nel PATH."
    echo
    read -r -p "Premi INVIO per chiudere..."
    exit 1
fi

if [ ! -d "node_modules" ]; then
    echo "Dipendenze non trovate. Eseguo npm install..."
    echo

    npm install

    if [ $? -ne 0 ]; then
        echo
        echo "ERRORE durante npm install."
        echo
        read -r -p "Premi INVIO per chiudere..."
        exit 1
    fi
else
    echo "Dipendenze gia installate."
fi

echo
echo "Avvio Vite..."
echo "URL previsto: http://localhost:5173"
echo "Premi CTRL+C per fermare il server."
echo

(
    for i in {1..60}; do
        if curl -s http://localhost:5173 >/dev/null 2>&1; then
            open "http://localhost:5173"
            exit 0
        fi
        sleep 1
    done

    echo "ATTENZIONE: Vite non ha risposto entro 60 secondi."
) &

npm run dev