type Education = {
  year: number;
  area: string;
  description: string;
};

export function useEducations() {
  const educations: Education[] = [];

  function addEducation(data: Education) {
    educations.push(data);
  }

  addEducation({
    year: 2025,
    area: "Análise e Desenvolvimento de Sistemas (ADS)",
    description:
      "Desenvolvimento de Sistemas, Planejamento de Projeto, Redes, Desenvolvimento com AI.",
  });

  return {
    educations,
  };
}
