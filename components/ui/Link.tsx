import { PropsWithChildren } from "react";
import { cn } from "tailwind-variants";

export type LinkProps = {
  href: string;
  className?: string;
} & PropsWithChildren;

export function Link(props: LinkProps) {
  const { className, href, children } = props;
  return (
    <a
      href={href}
      className={cn(
        "hover:bg-foreground/10 py w-max rounded-full border p-3 text-center capitalize duration-300",
        className,
      )}
      target="_blank"
    >
      {children}
    </a>
  );
}
