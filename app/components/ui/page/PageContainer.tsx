import { PropsWithChildren } from "react";
import { LateralDetail } from "../details/LateralDetail";

export type PageContainerProps = {
  withLateralDetails?: boolean;
} & PropsWithChildren;

export function PageContainer(props: PageContainerProps) {
  const { children, withLateralDetails = true } = props;

  return (
    <div className="h-full">
      {withLateralDetails && <LateralDetail className="top-1/2 left-5" />}
      <div className="px-30 h-full">{children}</div>
      {withLateralDetails && <LateralDetail className="top-1/2 right-5" />}
    </div>
  );
}
