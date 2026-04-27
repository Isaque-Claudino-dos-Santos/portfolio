import { useEducations } from "../hooks/use-educations";
import { useExperiences } from "../hooks/use-experiences";
import EducationItem from "./EducationItem";
import ExperienceItem from "./ExperienceItem";
import { ArcDetail } from "./ui/details/ArcDetail";
import Card from "./ui/Card";
import { Title } from "./ui/Title";

export default function ExperienceAndEducationsCard() {
  const { educations } = useEducations();
  const { experiences } = useExperiences();

  return (
    <Card className="flex flex-col gap-5 rounded-tr-[100px] row-span-3">
      <ArcDetail
        repeat={["solid", "outline", "solid"]}
        className="right-5 bottom-5"
      />

      <div className="flex flex-col gap-2">
        <Title className="font-gelasio font-bold uppercase">formações</Title>

        <div>
          {educations.map((education, i) => (
            <EducationItem key={i} education={education} />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <Title className="font-gelasio font-bold uppercase">escolaridade</Title>

        <div className="flex flex-col gap-1">
          {experiences.map((experience, i) => (
            <ExperienceItem key={i} experience={experience} />
          ))}
        </div>
      </div>
    </Card>
  );
}
