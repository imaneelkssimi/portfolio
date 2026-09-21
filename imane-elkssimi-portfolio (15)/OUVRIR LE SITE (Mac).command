#!/bin/bash
cd "$(dirname "$0")"
echo "================================================"
echo "  Demarrage du site... patientez 2 secondes."
echo "================================================"
if command -v npx &> /dev/null; then
    (sleep 1 && open http://localhost:3000) &
    npx --yes serve . -l 3000
elif command -v python3 &> /dev/null; then
    (sleep 1 && open http://localhost:8080) &
    python3 -m http.server 8080
else
    echo "Aucun outil trouve (Node.js ou Python)."
    echo "Solution la plus simple : fermez cette fenetre et"
    echo "double-cliquez directement sur index.html a la place."
    read -p "Appuyez sur Entree pour fermer..."
fi
