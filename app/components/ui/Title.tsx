import { PropsWithChildren } from "react";
import { cn, tv } from "tailwind-variants";

export type TitleProps = {
  size?: "sm" | "md" | "lg";
  className?: string
} & PropsWithChildren;

export function Title(props: TitleProps) {
  const { size = 'lg', children,className } = props

  const title = tv({
    variants: {
      size: {
        sm: "text-sm",
        md: "text-lg",
        lg: "text-3xl",
      },
    },
  });

  return (
    <>
      {size == "lg" && <h1 className={cn(className, title({ size }))}>{children}</h1>}
      {size == "md" && <h2 className={cn(className, title({ size }))}>{children}</h2>}
      {size == "sm" && <h3 className={cn(className, title({ size }))}>{children}</h3>}
    </>
  );
}
