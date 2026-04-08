import { usePersonalInfo } from "@/app/hooks/use-personal-info";
import Badge from "../Badge";
import { useSiteMetadata } from "@/app/hooks/use-site-metadata";

export function PageMainTitle() {
  const currentYear = new Date().getUTCFullYear();
  const { fullName } = usePersonalInfo();
  const { pageTitle } = useSiteMetadata();

  return (
    <div className="flex w-max flex-col gap-2">
      <div className="flex items-center gap-1">
        <Badge size="xs" />
        <Badge type="outline" size="xs" className="font-gelasio italic">
          {currentYear}
        </Badge>
      </div>

      <div className="relative">
        <div className="absolute top-15 -left-5 h-20 w-90 rounded-full bg-black/20 backdrop-blur-xs" />
        <div className="absolute -top-5 -right-10 h-20 w-65 rounded-full bg-black/20 backdrop-blur-xs" />
        <h1 className="font-gelasio text-9xl font-bold uppercase">
          {pageTitle}
        </h1>
      </div>

      <div className="flex items-center gap-1 self-end">
        <Badge size="lg" type="solid" className="light" />
        <Badge
          size="lg"
          type="solid"
          className="light font-dancing-script capitalize"
        >
          {fullName}
        </Badge>
      </div>
    </div>
  );
}
