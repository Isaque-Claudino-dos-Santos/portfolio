import { PropsWithChildren } from "react";
import { tv, cn } from "tailwind-variants";

export type BadgeProps = {
  text?: string | number;
  type?: "solid" | "outline";
  size?: "xs" | "base" | "lg";
  className?: string;
} & PropsWithChildren;

export default function Badge(props: BadgeProps) {
  const { children, size, type, className } = props;

  const badge = tv({
    variants: {
      type: {
        solid: "bg-background text-foreground border-none",
        outline: "border-2 border-foreground text-foreground",
      },
      size: {
        xs: "min-w-5 min-h-5 text-xs",
        base: "min-w-7 min-h-7 text-base",
        lg: "min-w-10 min-h-10 text-lg",
      },
    },
    defaultVariants: { type: "outline", size: "base", color: "light" },
  });

  return (
    <div
      className={cn(
        className,
        badge({ type, size }),
        "relative rounded-full w-max overflow-hidden flex justify-center items-center",
      )}
    >
      {children && <p className="px-3 py-1 first-letter:uppercase">{children}</p>}
    </div>
  );
}
