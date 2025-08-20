import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IAARG – Seu assistente de vendas inteligente",
  description: "Assistente de vendas com IA em tempo real",
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
