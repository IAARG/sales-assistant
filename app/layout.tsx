import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "IAARG - Sales Assistant",
  description: "Seu assistente de vendas inteligente",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
