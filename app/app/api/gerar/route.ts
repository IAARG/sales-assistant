import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const { mensagem } = await req.json()

  return NextResponse.json({
    resposta: `Sugestão da IA: Tente focar no custo-benefício para "${mensagem}".`
  })
}
