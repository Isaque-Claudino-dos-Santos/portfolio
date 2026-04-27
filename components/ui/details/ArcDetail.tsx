import { cn } from "tailwind-variants";
import Badge from "../Badge";

export type ArcDetailProps = {
  repeat: ("solid" | "outline")[];
  className?: string;
};
export function ArcDetail(props: ArcDetailProps) {
  const { repeat, className } = props;

  return (
    <div className={cn("absolute flex gap-2 text-xs", className)}>
      {repeat.map((type, i) => {
        return (
          <Badge
            key={i}
            size="xs"
            type={type}
            className={type == "solid" ? "light" : "dark"}
          />
        );
      })}
    </div>
  );
}
