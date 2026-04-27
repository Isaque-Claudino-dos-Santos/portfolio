import { PropsWithChildren } from "react";

export type CardProps = {} & PropsWithChildren;

export default function Card(props: CardProps) {
  const { children } = props;

  return <div className="">{children}</div>;
}
