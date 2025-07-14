import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { pergunta } = await req.json();

  // Aqui você pode substituir por chamada real à OpenAI, por exemplo
  const sugestao = `Simulação de resposta para: "${pergunta}"`;

  return NextResponse.json({ resposta: sugestao });
}
