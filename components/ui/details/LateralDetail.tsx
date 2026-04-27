import { cn } from "tailwind-variants";
import { StarDetail } from "./StarDetail";

export enum LateralDetailStyle {
  ARC,
  STAR,
}

export type LateralDetailProps = {
  className?: string;
  style?: LateralDetailStyle;
};

export function LateralDetail(props: LateralDetailProps) {
  const { className, style = LateralDetailStyle.ARC } = props;

  return (
    <div
      className={cn(
        "absolute flex h-1/3 w-5 flex-col items-center gap-4",
        className,
      )}
    >
      {style == LateralDetailStyle.ARC && (
        <div className="bg-foreground rounded-full p-1.5" />
      )}

      {style == LateralDetailStyle.STAR && <StarDetail scale={0.3} />}

      <div className="h-full min-h-30 w-full rounded-full border-2" />

      {style == LateralDetailStyle.ARC && (
        <div className="bg-foreground rounded-full p-1.5" />
      )}

      {style == LateralDetailStyle.STAR && <StarDetail scale={0.3} />}
    </div>
  );
}
