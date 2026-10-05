import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://isaque-claudino-dos-santos.github.io/portfolio/"),
  title: "Isaque dos Santos — Desenvolvedor Full-Stack",
  description:
    "Isaque Claudino dos Santos é desenvolvedor full-stack em Colombo, Paraná. Conheça seus projetos, habilidades em PHP, Laravel, Node.js, React e TypeScript, e entre em contato.",
  keywords: [
    "Isaque Claudino dos Santos",
    "desenvolvedor full-stack",
    "desenvolvedor web",
    "Colombo",
    "Paraná",
    "PHP",
    "Laravel",
    "Node.js",
    "React",
    "TypeScript",
  ],
  authors: [{ name: "Isaque Claudino dos Santos" }],
  creator: "Isaque Claudino dos Santos",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "Isaque dos Santos",
    title: "Isaque dos Santos — Desenvolvedor Full-Stack",
    description:
      "Portfólio de Isaque Claudino dos Santos, desenvolvedor full-stack em Colombo, Paraná. Projetos, tecnologias e contato.",
  },
  twitter: {
    card: "summary",
    title: "Isaque dos Santos — Desenvolvedor Full-Stack",
    description:
      "Portfólio de Isaque Claudino dos Santos, desenvolvedor full-stack em Colombo, Paraná. Projetos, tecnologias e contato.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
