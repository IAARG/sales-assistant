export const metadata = {
  title: 'IAARG - Sales Assistant',
  description: 'Sistema inteligente de consultoria de vendas',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
