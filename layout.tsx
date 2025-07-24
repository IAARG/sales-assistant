// app/layout.tsx
import './globals.css';

export const metadata = {
  title: 'Sales Assistant',
  description: 'Assistente de vendas com IA em tempo real',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
