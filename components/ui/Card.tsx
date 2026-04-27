import { PropsWithChildren } from "react";
import { cn } from "tailwind-variants";
export default function Card(
  props: PropsWithChildren & { className?: string },
) {
  return (
    <div
      className={cn(
        "text-foreground border-foreground relative overflow-hidden border p-5 sepia-30 bg-black/30 backdrop-blur-sm",
        props.className,
      )}
    >
      {props.children}
    </div>
  );
}
