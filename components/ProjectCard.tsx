import { ProjectDetail } from "../models/ProjectDetails";
import { ArcDetail } from "./ui/details/ArcDetail";
import Card from "./ui/Card";
import { Title } from "./ui/Title";
import { Link } from "./ui/Link";

type ProjectCardProps = {
  project: ProjectDetail;
};

export function ProjectCard(props: ProjectCardProps) {
  const { project } = props;

  return (
    <Card className="relative flex flex-col items-center justify-center gap-5 rounded-3xl">
      <ArcDetail repeat={["outline", "solid"]} className="top-5 left-5" />

      <Title size="md" className="font-gelasio font-bold uppercase">
        {project.name}
      </Title>

      <p className="font-gelasio first-letter:uppercase">
        {project.description}
      </p>

      <Link href={project.repositoryLink}>acessar repositorio</Link>
    </Card>
  );
}
