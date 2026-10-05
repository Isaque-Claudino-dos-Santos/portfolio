import Image from "next/image";
import foxIcon from "./icon.png";

const projects = [
  {
    number: "01",
    name: "Lara Traits",
    kind: "Biblioteca · TypeScript",
    description:
      "Uma biblioteca para trabalhar com traits em projetos JavaScript e TypeScript.",
    href: "https://www.npmjs.com/package/lara-traits",
    action: "Ver no npm",
    visual: "project-visual--violet",
    symbol: "trait",
    chips: ["TypeScript", "JavaScript", "NPM"],
  },
  {
    number: "02",
    name: "Inet API",
    kind: "Framework · Java",
    description:
      "Framework em Java com rotas, middlewares e estrutura própria para APIs.",
    href: "https://github.com/Isaque-Claudino-dos-Santos/inet-api",
    action: "Ver no GitHub",
    visual: "project-visual--lime",
    symbol: "{ }",
    chips: ["Java", "API", "Framework"],
  },
  {
    number: "03",
    name: "UQuiz",
    kind: "Projeto web · Quiz",
    description: "Uma experiência de quiz publicada e disponível para jogar.",
    href: "https://isaque-claudino-dos-santos.github.io/uQuiz/",
    action: "Abrir projeto",
    visual: "project-visual--pink",
    symbol: "?",
    chips: ["JavaScript", "Web", "GitHub Pages"],
  },
  {
    number: "04",
    name: "TagHub",
    kind: "Projeto web · Programação",
    description: "Projeto de programação web criado durante a formação.",
    href: "https://isaque-claudino-dos-santos.github.io/TagHub/",
    action: "Abrir projeto",
    visual: "project-visual--blue",
    symbol: "#",
    chips: ["HTML", "CSS", "Web"],
  },
  {
    number: "05",
    name: "IMC Calculator",
    kind: "Projeto web · Calculadora",
    description: "Uma calculadora de IMC simples, direta e disponível online.",
    href: "https://isaque-claudino-dos-santos.github.io/IMC/",
    action: "Abrir projeto",
    visual: "project-visual--orange",
    symbol: "÷",
    chips: ["JavaScript", "Web", "GitHub Pages"],
  },
];

const skills = [
  "PHP",
  "Laravel",
  "Node.js",
  "React",
  "TypeScript",
  "JavaScript",
  "Java",
  "SQL & NoSQL",
  "AWS",
  "APIs REST",
];

function ArrowUpRight() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className="icon-arrow"
    >
      <path d="M5 15 15 5M6 5h9v9" />
    </svg>
  );
}

function ArrowDown() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className="icon-arrow-down"
    >
      <path d="M10 3v13m-5-5 5 5 5-5" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <header className="site-header">
        <a className="wordmark" href="#inicio" aria-label="Isaque, início">
          <span className="wordmark-mark">
            <Image src={foxIcon} alt="" className="fox-mark" unoptimized />
          </span>
          <span>isaque<span className="wordmark-dot">®</span></span>
        </a>

        <nav className="main-nav" aria-label="Navegação principal">
          <a href="#projetos">Projetos</a>
          <a href="#experiencia">Experiência</a>
          <a href="#ia">IA &amp; agilidade</a>
          <a href="#sobre">Sobre mim</a>
          <a href="#contato">Contato</a>
        </nav>

        <div className="header-contact" aria-label="Informações de contato">
          <a href="mailto:isaqueclaudino12@gmail.com">
            isaqueclaudino12@gmail.com
          </a>
          <a href="tel:+5541987929277">(41) 98792-9277</a>
        </div>

        <a
          className="header-cta"
          href="https://www.linkedin.com/in/isaque-claudino-santos"
          target="_blank"
          rel="noreferrer"
        >
          <span className="header-cta-label">Vamos conversar no LinkedIn</span>
          <span className="header-cta-label-mobile">Vamos conversar</span>
          <ArrowUpRight />
        </a>
      </header>

      <main id="inicio">
        <section className="hero page-width" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="eyebrow hero-eyebrow">
              <span className="status-dot" />
              DESENVOLVEDOR FULL-STACK <span className="eyebrow-slash">/</span>{" "}
              CURITIBA, PR
            </div>
            <h1 id="hero-title">
              Ideias em código.
              <br />
              <span>Impacto no mundo.</span>
            </h1>
            <p className="hero-description">
              Sou Isaque, desenvolvedor full-stack. Crio experiências digitais
              e sistemas que resolvem problemas de verdade — do primeiro
              componente à última linha da API.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projetos">
                Explorar projetos <ArrowDown />
              </a>
              <a
                className="button button-quiet"
                href="https://wa.me/5541987929277?text=Ol%C3%A1%2C%20Isaque!%20Encontrei%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar."
                target="_blank"
                rel="noreferrer"
              >
                Fale comigo no WhatsApp <ArrowUpRight />
              </a>
            </div>
            <div className="hero-footnote">
              <span className="footnote-line" />
              <span>Construindo para a web, sempre aprendendo.</span>
            </div>
          </div>

          <div className="hero-art" aria-hidden="true">
            <div className="art-noise" />
            <div className="art-grid" />
            <div className="art-sun" />
            <div className="art-ring art-ring--outer" />
            <div className="art-ring art-ring--inner" />
            <span className="art-spark art-spark--one">✳</span>
            <span className="art-spark art-spark--two">✳</span>
            <span className="art-label art-label--top">IDEIA → INTERFACE</span>
            <div className="art-terminal">
              <div className="terminal-top">
                <span className="terminal-lights">
                  <i />
                  <i />
                  <i />
                </span>
                <span>isaque.dev</span>
                <span className="terminal-menu">•••</span>
              </div>
              <div className="terminal-body">
                <span className="terminal-line">
                  <b>01</b> <i>const</i> developer = {"{"}
                </span>
                <span className="terminal-line terminal-indent">
                  <b>02</b> <i>stack:</i> [<em>“full”</em>, <em>“stack”</em>],
                </span>
                <span className="terminal-line terminal-indent">
                  <b>03</b> <i>mindset:</i> <em>“keep building”</em>
                </span>
                <span className="terminal-line">
                  <b>04</b> {"}"}
                  <span className="terminal-cursor" />
                </span>
              </div>
            </div>
            <div className="art-sticker art-sticker--code">&lt;/&gt;</div>
            <div className="art-sticker art-sticker--spark">✳</div>
            <span className="art-label art-label--bottom">FEITO COM CURIOSIDADE</span>
            <span className="art-coordinate">25° 21&apos; S · 49° 04&apos; W</span>
          </div>

          <a className="scroll-cue" href="#projetos">
            <span>ROLE PARA EXPLORAR</span>
            <ArrowDown />
          </a>
        </section>

        <div className="ticker" aria-label="Tecnologias: PHP, React, Laravel e APIs">
          <div className="ticker-track">
            {Array.from({ length: 8 }, (_, copy) => (
              <span className="ticker-group" key={copy} aria-hidden={copy > 0}>
                <span>PHP</span><i>✳</i><span>REACT</span><i>✳</i>
                <span>LARAVEL</span><i>✳</i><span>APIs REST</span><i>✳</i>
                <span>TYPESCRIPT</span><i>✳</i><span>NODE.JS</span><i>✳</i>
              </span>
            ))}
          </div>
        </div>

        <section
          className="projects-section page-width section-pad"
          id="projetos"
          aria-labelledby="projects-title"
        >
          <div className="section-heading">
            <div>
              <p className="eyebrow section-eyebrow">01 / TRABALHOS SELECIONADOS</p>
              <h2 id="projects-title">
                Do meu <span>universo</span>
                <br className="mobile-break" /> para o seu.
              </h2>
            </div>
            <a
              className="text-link"
              href="https://github.com/Isaque-Claudino-dos-Santos"
              target="_blank"
              rel="noreferrer"
            >
              Mais projetos no GitHub <ArrowUpRight />
            </a>
          </div>

          <article className="featured-project" aria-labelledby="manager-x-title">
            <div className="featured-visual" aria-hidden="true">
              <span className="featured-visual-grid" />
              <span className="featured-private">
                <span className="status-dot" /> PROJETO PRIVADO
              </span>
              <span className="featured-x">X</span>
              <span className="featured-orbit featured-orbit--one" />
              <span className="featured-orbit featured-orbit--two" />
              <span className="featured-window featured-window--back" />
              <span className="featured-window featured-window--front">
                <i />
                <i />
                <i />
                <b />
              </span>
              <span className="featured-visual-caption">
                UM PRODUTO. MUITOS CLIENTES.
              </span>
            </div>
            <div className="featured-info">
              <p className="eyebrow featured-eyebrow">
                PROJETO EM DESTAQUE <span>/</span> PLATAFORMA MULTI-TENANT
              </p>
              <h3 id="manager-x-title">Manager X</h3>
              <p className="featured-description">
                Uma plataforma para atender múltiplos clientes em um só
                sistema — flexível para operações simples e preparada para
                necessidades mais complexas. Cada cliente pode ter uma
                experiência front-end personalizada.
              </p>
              <ul className="featured-features">
                <li>Publicações e agendamentos</li>
                <li>Painel de controle por cliente</li>
                <li>Captação e gestão de leads</li>
                <li>Experiência front-end personalizada</li>
              </ul>
              <div className="featured-bottom">
                <ul className="project-chips" aria-label="Tecnologias do Manager X">
                  <li>Laravel</li>
                  <li>Next.js</li>
                  <li>Multi-tenant</li>
                </ul>
                <span className="private-note">Detalhes do projeto são privados</span>
              </div>
            </div>
          </article>

          <div className="project-grid">
            {projects.map((project) => (
              <a
                className="project-card"
                href={project.href}
                target="_blank"
                rel="noreferrer"
                key={project.number}
              >
                <div className={`project-visual ${project.visual}`}>
                  <span className="project-number">{project.number}</span>
                  <span className="project-symbol">{project.symbol}</span>
                  <span className="project-orbit project-orbit--one" />
                  <span className="project-orbit project-orbit--two" />
                  <span className="project-open">
                    <ArrowUpRight />
                  </span>
                  <span className="project-visual-caption">{project.kind}</span>
                </div>
                <div className="project-info">
                  <div className="project-title-row">
                    <h3>{project.name}</h3>
                    <span className="project-action">
                      {project.action} <ArrowUpRight />
                    </span>
                  </div>
                  <p>{project.description}</p>
                  <ul className="project-chips" aria-label="Tecnologias e tipo">
                    {project.chips.map((chip) => (
                      <li key={chip}>{chip}</li>
                    ))}
                  </ul>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section
          className="experience-section"
          id="experiencia"
          aria-labelledby="experience-title"
        >
          <div className="page-width experience-layout">
            <div className="experience-heading">
              <p className="eyebrow section-eyebrow">
                02 / EXPERIÊNCIA PROFISSIONAL
              </p>
              <h2 id="experience-title">
                Código com
                <br />
                <span>propósito real.</span>
              </h2>
              <p className="experience-intro">
                Experiência construindo produtos web, integrações e soluções
                para desafios de negócio.
              </p>
            </div>

            <div className="experience-list">
              <article className="experience-card">
                <div className="experience-meta">
                  <span className="experience-index">01</span>
                  <span className="experience-status">
                    <span className="status-dot" /> ATUAL
                  </span>
                </div>
                <div className="experience-details">
                  <p className="experience-company">Setup Tecnologia · Curitiba, PR</p>
                  <h3>Desenvolvedor Full-Stack</h3>
                  <p>
                    Desenvolvimento de sistema jurídico com Laravel e Vue.js.
                    Liderei a implementação da versão 2 do produto, contribuindo
                    para a reestruturação da arquitetura e das APIs REST com
                    princípios SOLID.
                  </p>
                  <p>
                    Também trabalhei em integrações com Pagar.me e Twilio, na
                    evolução contínua do produto e no crescimento técnico da
                    equipe.
                  </p>
                  <ul className="project-chips" aria-label="Tecnologias utilizadas">
                    <li>Laravel</li>
                    <li>Vue.js</li>
                    <li>REST API</li>
                    <li>Pagar.me</li>
                    <li>Twilio</li>
                  </ul>
                </div>
              </article>

              <article className="experience-card">
                <div className="experience-meta">
                  <span className="experience-index">02</span>
                  <span className="experience-status">EXPERIÊNCIA ANTERIOR</span>
                </div>
                <div className="experience-details">
                  <p className="experience-company">Aftersale · Curitiba, PR</p>
                  <h3>Desenvolvedor Full-Stack</h3>
                  <p>
                    Desenvolvimento de sistema de trocas e devoluções para
                    e-commerce, com integrações REST com VTEX, Pagar.me e
                    Correios.
                  </p>
                  <p>
                    Atuei com Laravel e React, testes automatizados com TDD e
                    documentação técnica, aplicando padrões de projeto e
                    princípios SOLID.
                  </p>
                  <ul className="project-chips" aria-label="Tecnologias utilizadas">
                    <li>Laravel</li>
                    <li>React</li>
                    <li>VTEX</li>
                    <li>Pagar.me</li>
                    <li>Correios</li>
                    <li>TDD</li>
                  </ul>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="ai-section" id="ia" aria-labelledby="ai-title">
          <div className="page-width ai-layout">
            <div className="ai-heading">
              <p className="eyebrow section-eyebrow">
                03 / ARQUITETURA, BOAS PRÁTICAS E INTELIGÊNCIA ARTIFICIAL
              </p>
              <h2 id="ai-title">
                IA com direção.
                <br />
                <span>Arquitetura para evoluir.</span>
              </h2>
              <p className="ai-intro">
                Arquitetura bem pensada, boas práticas e IA trabalham juntas:
                padrões de projeto dão estrutura ao código, enquanto a IA ajuda
                a explorar soluções e acelerar o desenvolvimento com qualidade.
              </p>
            </div>

            <div className="ai-principles">
              <article className="ai-principle">
                <span className="ai-index">01</span>
                <div>
                  <h3>Arquitetura antes da pressa</h3>
                  <p>
                    Entender o domínio e definir responsabilidades claras cria
                    uma base sustentável para evoluir o produto, com ou sem IA.
                  </p>
                </div>
              </article>
              <article className="ai-principle">
                <span className="ai-index">02</span>
                <div>
                  <h3>Padrões que mantêm consistência</h3>
                  <p>
                    Princípios SOLID, padrões de projeto e convenções do time
                    tornam o código mais legível, testável e simples de manter.
                  </p>
                </div>
              </article>
              <article className="ai-principle">
                <span className="ai-index">03</span>
                <div>
                  <h3>IA como parceira, com revisão humana</h3>
                  <p>
                    Uso sugestões de IA com contexto e senso crítico: reviso,
                    testo e valido cada mudança para garantir que respeite a
                    arquitetura e resolva o problema certo.
                  </p>
                </div>
              </article>
              <div className="ai-statement">
                <span className="ai-statement-mark">✳</span>
                <p>
                  IA acelera o desenvolvimento.{" "}
                  <strong>Boas decisões de arquitetura e engenharia sustentam
                  a entrega.</strong>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          className="about-section"
          id="sobre"
          aria-labelledby="about-title"
        >
          <div className="page-width about-layout">
            <div className="about-heading">
              <p className="eyebrow section-eyebrow">04 / UM POUCO SOBRE MIM</p>
              <h2 id="about-title">
                Gosto de pensar.
                <br />
                <span>Adoro construir.</span>
              </h2>
              <a
                className="text-link about-link"
                href="https://www.linkedin.com/in/isaque-claudino-santos"
                target="_blank"
                rel="noreferrer"
              >
                Vamos nos conectar <ArrowUpRight />
              </a>
            </div>
            <div className="about-details">
              <p className="about-copy">
                Trabalho entre o front-end e o back-end, transformando desafios
                em produtos digitais úteis. Tenho experiência com APIs,
                integrações de e-commerce e logística — sempre buscando
                soluções escaláveis, bem pensadas e simples de usar.
              </p>
              <div className="about-facts">
                <div className="about-fact">
                  <span className="fact-index">01</span>
                  <div>
                    <h3>No que acredito</h3>
                    <p>Bom código resolve problemas e aproxima pessoas.</p>
                  </div>
                </div>
                <div className="about-fact">
                  <span className="fact-index">02</span>
                  <div>
                    <h3>O que estou estudando</h3>
                    <p>Análise e Desenvolvimento de Sistemas · Estácio</p>
                  </div>
                </div>
                <div className="about-fact">
                  <span className="fact-index">03</span>
                  <div>
                    <h3>Onde sigo aprendendo</h3>
                    <p>Formações em tecnologia pela Alura.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="skills-section page-width"
          aria-labelledby="skills-title"
        >
          <div>
            <p className="eyebrow section-eyebrow">05 / FERRAMENTAS DO OFÍCIO</p>
            <h2 id="skills-title">Meu stack, sem mistério.</h2>
          </div>
          <ul className="skills-list">
            {skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </section>

        <section className="contact-section page-width" id="contato">
          <div className="contact-card">
            <div className="contact-glow" aria-hidden="true" />
            <div className="contact-content">
              <p className="eyebrow contact-eyebrow">06 / SUA PRÓXIMA IDEIA COMEÇA AQUI</p>
              <h2>
                Tem um desafio?
                <br />
                <span>Vamos conversar.</span>
              </h2>
              <p className="contact-copy">
                Um projeto, uma oportunidade ou só uma boa conversa sobre
                tecnologia. Minha caixa de entrada está aberta.
              </p>
              <a
                className="button button-contact"
                href="mailto:isaqueclaudino12@gmail.com"
              >
                isaqueclaudino12@gmail.com <ArrowUpRight />
              </a>
            </div>
            <div className="contact-orbit" aria-hidden="true">
              <span>✳</span>
              <i />
            </div>
          </div>
          <div className="contact-links">
            <a href="mailto:isaqueclaudino12@gmail.com">E-mail</a>
            <a href="tel:+5541987929277">Telefone</a>
            <a
              href="https://wa.me/5541987929277"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>
            <a
              href="https://www.linkedin.com/in/isaque-claudino-santos"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Isaque-Claudino-dos-Santos"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer page-width">
        <a className="wordmark footer-wordmark" href="#inicio">
          <span className="wordmark-mark">
            <Image src={foxIcon} alt="" className="fox-mark" unoptimized />
          </span>
          <span>isaque<span className="wordmark-dot">®</span></span>
        </a>
        <p>Feito com intenção, em Curitiba — PR.</p>
        <a className="back-to-top" href="#inicio">
          Voltar ao topo <ArrowUpRight />
        </a>
      </footer>

      <a
        className="resume-fab"
        href="curriculo-isaque-claudino-dos-santos.pdf"
        download="curriculo-isaque-claudino-dos-santos.pdf"
      >
        Baixar currículo <ArrowDown />
      </a>
    </>
  );
}
