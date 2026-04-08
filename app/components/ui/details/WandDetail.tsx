import { cn } from "tailwind-variants";

export type WandDetailProps = {
  className?: string;
};
export function WandDetail(props: WandDetailProps) {
  const { className } = props;

  return (
    <div className={cn("flex items-center justify-center", className)}>
      <div className="bg-foreground h-2 w-2 rounded-full" />
      <div className="bg-foreground h-0.5 w-15 rounded-full" />
    </div>
  );
}
