#!/bin/bash

echo "🔐 Fazendo login na Vercel (se necessário)..."
vercel login

echo "✅ Login feito. Iniciando o deploy do projeto IAARG..."

# Entrar na pasta do projeto (ajuste se necessário)
cd "$(dirname "$0")"

# Rodar o deploy com confirmação e nome do projeto
vercel --prod --confirm --name iaarg-sales-assistant

echo "🚀 Deploy concluído!"
