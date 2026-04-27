import { JSX, SVGProps } from "react";

export interface TechSkill {
  name: string;
  score: number;
  icon: (props: SVGProps<SVGElement>) => JSX.Element;
}
