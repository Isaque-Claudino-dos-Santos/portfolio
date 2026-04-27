import Badge from "../Badge";
import { LateralDetail, LateralDetailStyle } from "../details/LateralDetail";
import { WandDetail } from "../details/WandDetail";

export type PageTitleProps = {
  title: string;
  description?: string;
};

export default function PageTitle(props: PageTitleProps) {
  const { description, title } = props;

  return (
    <div className="flex w-full items-center justify-between px-5">
      <LateralDetail style={LateralDetailStyle.STAR} className="relative" />

      <div className="flex flex-col items-center justify-center">
        <h1 className="font-gelasio text-9xl font-bold uppercase">{title}</h1>

        {description && (
          <div className="flex items-center gap-5">
            <WandDetail />
            <Badge
              type="outline"
              className="font-dancing-script capitalize"
              size="lg"
            >
              {description}
            </Badge>
            <WandDetail className="flex-row-reverse" />
          </div>
        )}
      </div>

      <LateralDetail style={LateralDetailStyle.STAR} className="relative" />
    </div>
  );
}
