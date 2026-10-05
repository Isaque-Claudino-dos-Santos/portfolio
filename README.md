# Portfólio — Isaque dos Santos

Portfólio pessoal desenvolvido com Next.js e exportação estática.

## Desenvolvimento local

```bash
npm ci
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Build estático

```bash
npm run build
```

O site exportado fica na pasta `out/` e pode ser publicado em qualquer serviço
de hospedagem estática.

## Publicação no GitHub Pages

O workflow `.github/workflows/deploy.yml` executa lint, gera o site estático e
publica automaticamente a pasta `out/` no GitHub Pages a cada push para `main`.
Também é possível iniciar a publicação manualmente pela aba **Actions**.

Na primeira publicação, confira em **Settings → Pages** se a fonte de build
está configurada como **GitHub Actions**.

Para este repositório, a URL esperada é:

<https://isaque-claudino-dos-santos.github.io/portfolio/>

O `basePath` do repositório é aplicado durante o build do GitHub Actions para
que os arquivos estáticos e links funcionem no caminho do GitHub Pages.
