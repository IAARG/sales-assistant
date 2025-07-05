// app/layout.tsx
export const metadata = {
  title: "Assistente de Vendas",
  description: "Aplicação para auxiliar vendedores",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
