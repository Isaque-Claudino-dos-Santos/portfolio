import { PropsWithChildren } from "react";
import { cn } from "tailwind-variants";
import { NoiseBG } from "./NoiseBG";
export default function Card(
  props: PropsWithChildren & { className?: string },
) {
  return (
    <div
      className={cn(
        "text-foreground border-foreground relative overflow-hidden border p-5 sepia-30",
        props.className,
      )}
    >
      <NoiseBG />
      {props.children}
    </div>
  );
}
