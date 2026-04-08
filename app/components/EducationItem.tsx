import { Education } from "../models/Education";
import Badge from "./ui/Badge";

export type EducationItemProps = {
  education: Education;
};

export default function EducationItem(props: EducationItemProps) {
  const { education } = props;

  return (
    <div>
      <Badge className="font-gelasio italic">{education.year}</Badge>
      <h3 className="font-gelasio font-bold text-lg">{education.area}</h3>
      <p className="font-gelasio text-sm">{education.description}</p>
    </div>
  );
}
