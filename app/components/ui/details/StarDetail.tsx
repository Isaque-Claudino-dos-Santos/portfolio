import React from "react";
import { cn } from "tailwind-variants";

export type StarDetailProps = {
  scale?: number;
  totalTips?: number;
};

export function StarDetail(props: StarDetailProps) {
  const { scale = 0.4, totalTips = 8 } = props;

  return (
    <div
      style={{ scale }}
      className={cn("relative flex w-max items-center justify-center")}
    >
      <div className="bg-foreground rounded-full p-4" />

      {new Array(totalTips).fill(null).map((_, i) => (
        <React.Fragment key={i}>
          <div
            style={{
              transform: `rotate(${(i * 360) / totalTips}deg) translateX(10px)`,
            }}
            className="bg-foreground absolute h-2 w-20 rounded-r-[300%]"
          />
          <div
            style={{
              transform: `rotate(${(i * 360) / totalTips}deg) translateX(30px)`,
            }}
            className="bg-foreground absolute h-2 w-5 rounded-[300%]"
          />
          <div />
        </React.Fragment>
      ))}
    </div>
  );
}
