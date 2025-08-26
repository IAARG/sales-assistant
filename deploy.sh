#!/bin/bash
set -e

# Instalar CLI do Vercel
npm install -g vercel

# Login no Vercel
echo ">> Abra o link no navegador e finalize o login no Vercel..."
vercel login

# Deploy forçado em produção
vercel --prod --force

