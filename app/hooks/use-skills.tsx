import IconLaravel from "../components/ui/svg/IconLaravel";
import IconReact from "../components/ui/svg/IconReact";
import { TechSkill } from "../models/TechSkill";

export function useSkills() {
  const techSkills: TechSkill[] = [];

  techSkills.push({
    name: "laravel",
    score: 5,
    icon: IconLaravel,
  });

  techSkills.push({
    name: "react",
    score: 4,
    icon: IconReact,
  });

  return {
    techSkills,
    softSkills: [
      "comunicação clara",
      "trabalho em equipe",
      "pensamento crítico",
      "proatividade",
      "gestão de tempo",
      "adaptabilidade",
      "resolução de problemas",
      "inteligência emocional",
      "aprendizado contínuo",
      "responsabilidade (ownership)",
      "kanban e scrum",
      "azure, jira e github project",
    ],
  };
}
