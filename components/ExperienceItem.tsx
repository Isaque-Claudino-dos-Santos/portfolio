import { Experience } from "../models/Experience";
import Badge from "./ui/Badge";

export type ExperienceItemProps = {
  experience: Experience;
};

export default function ExperienceItem(props: ExperienceItemProps) {
  const { experience } = props;

  return (
    <div>
      <Badge className="font-gelasio italic">
        {experience.year}
      </Badge>
      <h3 className="font-gelasio font-bold text-lg">
        {experience.enterprise}
      </h3>
      <p className="font-gelasio text-sm">{experience.description}</p>
    </div>
  );
}
