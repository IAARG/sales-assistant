
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { pergunta } = await req.json();

  if (!pergunta) {
    return NextResponse.json({ resposta: 'Pergunta inválida.' }, { status: 400 });
  }

  const prompt = `Você é um especialista em vendas B2B. Dada a seguinte dúvida ou objeção de um cliente, gere uma resposta clara, curta e com foco em custo-benefício: "${pergunta}"`;

  const resposta = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
    },
    body: JSON.stringify({
      model: 'gpt-4',
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.7
    }),
  });

  const dados = await resposta.json();
  const texto = dados.choices?.[0]?.message?.content;

  return NextResponse.json({ resposta: texto });
}
