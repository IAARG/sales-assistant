import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { pergunta } = await req.json();

  const resposta = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: 'gpt-4',
      messages: [{ role: 'user', content: pergunta }],
    }),
  });

  const dados = await resposta.json();
  const mensagem = dados.choices?.[0]?.message?.content || 'Sem resposta.';

  return NextResponse.json({ resposta: mensagem });
}
