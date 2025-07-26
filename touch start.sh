#!/bin/bash
npm run dev & 
sleep 3
echo ""
echo "✅ Acesse seu app aqui:"
gp url 3000
gp preview $(gp url 3000)
