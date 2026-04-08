import { useSkills } from "../hooks/use-skills";
import { TechSkillItem } from "./TechSkillItem";
import { ArcDetail } from "./ui/details/ArcDetail";
import Badge from "./ui/Badge";
import Card from "./ui/Card";
import { Title } from "./ui/Title";

export default function SkillsCard() {
  const { techSkills, softSkills } = useSkills();
  return (
    <Card className="relative flex flex-col gap-5 rounded-bl-[100px] row-span-3">
      <ArcDetail
        repeat={["solid", "outline", "outline"]}
        className="right-5 bottom-5 flex-col-reverse"
      />

      <div className="flex flex-col gap-2">
        <Title className="font-gelasio uppercase font-bold">tech skills</Title>
        <div className="grid grid-cols-2 gap-5">
          {techSkills.map((skill, i) => (
            <TechSkillItem key={i} skill={skill} />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Title className="font-gelasio uppercase font-bold">soft skills</Title>

        <div className="grid  grid-cols-3 gap-2">
          {softSkills.map((skill, i) => (
            <Badge key={i} className="font-dancing-script capitalize">
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </Card>
  );
}
