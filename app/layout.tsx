import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Isaque dos Santos — Desenvolvedor Full-Stack",
  description:
    "Portfólio de Isaque dos Santos, desenvolvedor full-stack em Colombo, Paraná. Projetos, tecnologias e formas de contato.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
