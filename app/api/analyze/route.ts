import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { text } = await request.json()

    const objections = [
      'muito caro', 'caro demais', 'não tenho interesse', 
      'preciso pensar', 'não posso agora', 'não tenho dinheiro'
    ]

    const foundObjections = objections.filter(obj => 
      text.toLowerCase().includes(obj)
    )

    const responses: { [key: string]: string } = {
      'muito caro': '💡 Sugestão: Mostre o valor e ROI do produto',
      'caro demais': '�� Sugestão: Ofereça parcelamento ou desconto',
      'não tenho interesse': '💡 Sugestão: Descobre a real necessidade',
      'preciso pensar': '💡 Sugestão: Agende follow-up para amanhã',
      'não posso agora': '💡 Sugestão: Ofereça trial gratuito',
      'não tenho dinheiro': '💡 Sugestão: Mostre opções de financiamento'
    }

    const analysis = foundObjections.map(obj => 
      responses[obj] || `Objeção: ${obj} - Desenvolva resposta personalizada`
    ).join('\n')

    return NextResponse.json({ 
      analysis: analysis || 'Nenhuma objeção detectada. Conversa positiva!',
      detected: foundObjections
    })

  } catch (error) {
    return NextResponse.json(
      { error: 'Erro na análise' },
      { status: 500 }
    )
  }
}
