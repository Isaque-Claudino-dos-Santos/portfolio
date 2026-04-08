import { Experience } from "../models/Experience";

export function useExperiences() {
  const experiences: Experience[] = [];

  function addExperience(data: Experience) {
    experiences.push(data);
  }

  addExperience({
    year: 2023,
    enterprise: "Aftersale",
    description:
      "Desenvolvimento de sistemas para troca e devolução de produtos, gerenciamento de microservices e aplicação de novas funcionalidades",
  });
  addExperience({
    year: 2025,
    enterprise: "Setup Tecnologia",
    description:
      "Desenvolvimento de sistemas para controle de cliente do advogado e busca de clientes",
  });

  return {
    experiences,
  };
}
