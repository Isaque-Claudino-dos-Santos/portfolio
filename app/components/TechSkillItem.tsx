import { TechSkill } from "../models/TechSkill";
import Badge from "./ui/Badge";

export type TechSkillItemProps = {
  skill: TechSkill;
};

export function TechSkillItem(props: TechSkillItemProps) {
  const { skill } = props;
  const maxScore = 5;

  return (
    <div className="flex items-center gap-2">
      <skill.icon className="w-12 h-12" />
      <div className="flex flex-col gap-5">
        <div>
          <h3 className="font-gelasio font-bold text-xl capitalize">{skill.name}</h3>

          <div className="flex gap-1">
            {new Array(maxScore).fill(null).map((_, i) => (
              <Badge
                className={i < skill.score ? "light" : "dark"}
                size="xs"
                key={i}
                type={i < skill.score ? "solid" : "outline"}
              />
            ))}
          </div>
        </div>

        <div className="w-7 h-0.5 rounded-full bg-foreground" />
      </div>
    </div>
  );
}
