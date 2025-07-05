export const metadata = {
  title: 'Assistente de Vendas',
  description: 'Sistema com IA para ajudar vendedores.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <body>{children}</body>
    </html>
  );
}
Criar layout.tsx na pasta app
Renomear pasta de aplicativo para app
