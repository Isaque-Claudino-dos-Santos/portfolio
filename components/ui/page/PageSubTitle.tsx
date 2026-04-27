import Badge from "../Badge";
import { StarDetail } from "../details/StarDetail";
import { WandDetail } from "../details/WandDetail";

export type PageSubTitleProps = {
  title: string;
  description?: string;
};

export function PageSubTitle(props: PageSubTitleProps) {
  const { title, description = "" } = props;

  return (
    <div>
      <div className="flex items-center gap-5">
        <StarDetail scale={0.5} totalTips={16} />

        <div className="flex w-full flex-col">
          <div className="flex w-full items-center justify-between">
            <h2 className="font-gelasio text-6xl font-bold uppercase">
              {title}
            </h2>
            <div className="flex items-center gap-5">
              <WandDetail />
              <Badge className="font-gelasio first-letter:uppercase">
                {description}
              </Badge>
            </div>
          </div>

          <div className="flex h-1 items-center justify-between gap-5">
            <div className="bg-foreground h-full w-10 rounded-full" />
            <div className="bg-foreground h-full w-full rounded-full" />
            <div className="bg-foreground h-full w-20 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
