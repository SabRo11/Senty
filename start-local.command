#!/bin/bash

set -e

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$SCRIPT_DIR"

echo "Senty — avvio locale"
echo "Cartella progetto: $SCRIPT_DIR"

if ! command -v node >/dev/null 2>&1; then
  echo ""
  echo "Errore: Node.js non risulta installato."
  echo "Installa Node.js da https://nodejs.org/ e riprova."
  echo ""
  read -r -p "Premi Invio per chiudere..."
  exit 1
fi

if ! command -v npm >/dev/null 2>&1; then
  echo ""
  echo "Errore: npm non risulta disponibile."
  echo "Reinstalla Node.js da https://nodejs.org/ e riprova."
  echo ""
  read -r -p "Premi Invio per chiudere..."
  exit 1
fi

if [ ! -d "node_modules" ]; then
  echo ""
  echo "Dipendenze non trovate: eseguo npm install..."
  npm install
fi

echo ""
echo "Avvio del server locale..."
echo "Il browser dovrebbe aprirsi automaticamente."
echo "Per fermare il server: Ctrl+C"
echo ""

npm run dev -- --open

read -r -p "Premi Invio per chiudere..."
