export const metadata = {
  title: "Sales Assistant",
  description: "Assistente de Vendas com IA",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <body>{children}</body>
    </html>
  );
}
