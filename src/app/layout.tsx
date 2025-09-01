import './globals.css'

export const metadata = {
  title: 'IAARG - Inteligência Artificial',
  description: 'Soluções inovadoras em IA',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body style={{ margin: 0, padding: 0, fontFamily: 'Arial' }}>
        {children}
      </body>
    </html>
  )
}
