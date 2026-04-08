import AboundMeCard from "./components/AboundMeCard";
import ContactCard from "./components/ContactCard";
import ExperienceAndEducationsCard from "./components/ExperienceAndEducationsCard";
import { PacManGame } from "./components/PacManGame";
import PhotoSelfCard from "./components/PhotoSelfCard";
import { ProjectCard } from "./components/ProjectCard";
import SkillsCard from "./components/SkillsCard";
import { ThanksCard } from "./components/ThanksCard";
import Card from "./components/ui/Card";
import { ArcDetail } from "./components/ui/details/ArcDetail";
import { LateralDetail } from "./components/ui/details/LateralDetail";
import { Link } from "./components/ui/Link";
import { NoiseBG } from "./components/ui/NoiseBG";
import { PageContainer } from "./components/ui/page/PageContainer";
import { PageMainTitle } from "./components/ui/page/PageMainTitle";
import { PageSubTitle } from "./components/ui/page/PageSubTitle";
import PageTitle from "./components/ui/page/PageTitle";
import { Section } from "./components/ui/page/Section";
import { Title } from "./components/ui/Title";

export default function Home() {
  return (
    <>
      <div className="flex h-svh items-center justify-center">
        <ArcDetail repeat={["outline", "solid"]} className="top-5 left-5" />
        <ArcDetail repeat={["solid", "outline"]} className="top-5 right-5" />

        <PageMainTitle />
      </div>

      <Section container={{ withLateralDetails: false }}>
        <div className="grid h-full grid-cols-[2fr_2fr_3fr] gap-5">
          <NoiseBG />
          <PhotoSelfCard />
          <ExperienceAndEducationsCard />
          <SkillsCard />
          <AboundMeCard />
          <ContactCard />
        </div>
      </Section>

      <div className="relative px-5">
        <NoiseBG />
        <div className="flex h-72 w-full items-center justify-center">
          <PageTitle title="projetos" description="projetos pessoal" />
        </div>

        <div className="relative flex h-svh flex-col gap-5">
          <PageContainer>
            <div className="p-5">
              <PageSubTitle
                title="bibliotecas e estudos"
                description="pacote npm, packagist e estudos com diversas linguagens e frameworks"
              />
            </div>
            <div className="grid grid-cols-3 gap-3">
              <ProjectCard
                project={{
                  name: "lara traits",
                  description:
                    "pacote NPM que permite utilizar traits semelhante ao PHP mas no Javascript/Typescript.",
                  repositoryLink:
                    "https://github.com/Isaque-Claudino-dos-Santos/lara-traits",
                }}
              />
              <ProjectCard
                project={{
                  name: "lara bind",
                  description:
                    "adiciona decorator @bind para definição de scopo em class, muito comun para quem utiliza Typescript com decorator de forma avançado.",
                  repositoryLink: "https://www.npmjs.com/package/lara-bind",
                }}
              />
              <ProjectCard
                project={{
                  name: "merge array into object (MAIO)",
                  description:
                    "pacote PHP para mesclar informações de uma array em uma class/object, muito util para utilização de DTO como boa pratica funciona com PHP puro ou framework como Laravel.",
                  repositoryLink: "https://www.npmjs.com/package/lara-bind",
                }}
              />
            </div>
          </PageContainer>
        </div>

        {/* TODO: refactor */}

        <Section
          topTitle={{
            title: "sobre",
            description: "desenvolvimento desse portfolio",
          }}
          subTitle={{
            title: "créditos e desenvolvimento",
          }}
        >
          <div className="font-gelasio flex flex-col gap-10 py-5">
            <Card className="rounded-full">
              <ArcDetail
                repeat={["outline"]}
                className="top-1/2 right-5 -translate-y-1/2"
              />
              <Title size="md" className="uppercase">
                desenvolvedor
              </Title>
              <p className="capitalize">isaque claudino dos santos</p>
            </Card>

            <Card className="rounded-full">
              <ArcDetail
                repeat={["outline"]}
                className="top-1/2 right-5 -translate-y-1/2"
              />

              <Title size="md" className="uppercase">
                Tecnologia
              </Title>
              <p className="capitalize">NextJS</p>
            </Card>
            <Card className="flex justify-between rounded-full">
              <div className="flex flex-col">
                <Title size="md" className="uppercase">
                  Desing
                </Title>
                <p className="capitalize">Khoi Pham</p>
              </div>
              <Link href="https://www.behance.net/gallery/219942373/PORTFOLIO-KHOI-PHAM?tracking_source=search_projects|design+portfolio&l=4">
                PORTFOLIO | KHOI PHAM
              </Link>
            </Card>
          </div>
        </Section>

        <Section container={{ withLateralDetails: false }}>
          <PacManGame />

          <ArcDetail repeat={["outline", "solid"]} className="top-5 left-5" />
          <ArcDetail repeat={["solid", "outline"]} className="top-5 right-5" />
          <ThanksCard />
        </Section>
      </div>
    </>
  );
}
