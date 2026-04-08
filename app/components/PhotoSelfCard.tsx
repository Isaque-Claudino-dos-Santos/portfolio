import { usePersonalInfo } from "../hooks/use-personal-info";
import { ArcDetail } from "./ui/details/ArcDetail";
import Badge from "./ui/Badge";
import Card from "./ui/Card";

export default function PhotoSelfCard() {
  const { selfPhotoLink, fullName, skills } = usePersonalInfo();

  return (
    <Card className="relative row-span-2 flex overflow-hidden rounded-br-[100px]">
      <ArcDetail
        repeat={["solid", "outline", "solid"]}
        className="light bottom-5 left-5 z-5"
      />

      <img
        src={selfPhotoLink}
        alt="self"
        className="absolute top-0 left-0 h-full w-full object-cover brightness-40 sepia-55"
      />

      <div className="mb-10 flex flex-col gap-3 self-end">
        <Badge size="lg" type="outline" className="font-gelasio uppercase">
          {fullName}
        </Badge>

        <div className="flex gap-1">
          {skills.map((skill, i) => (
            <Badge key={i} type="outline" className="font-dancing-script">
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </Card>
  );
}
