import { cn, tv } from "tailwind-variants";

export type NoiseBGProps = {
  variant?: "black" | "yellow";
};
export function NoiseBG(props: NoiseBGProps) {
  const { variant = "black" } = props;

  const container = tv({
    variants: {
      color: {
        black: "bg-black",
        yellow: "bg-foreground",
      },
    },
  });

  const img = tv({
    variants: {
      color: {
        black: "opacity-20",
        yellow: "opacity-20 brightness-150 sepia-100",
      },
    },
  });

  return (
    <div
      className={cn(
        "absolute top-0 left-0 -z-1 h-full w-full",
        container({ color: variant }),
      )}
    >
      <img
        src="/noise.jpg"
        className={cn(
          "object-cover h-full w-full opacity-50",
          img({ color: variant }),
        )}
      />
    </div>
  );
}
