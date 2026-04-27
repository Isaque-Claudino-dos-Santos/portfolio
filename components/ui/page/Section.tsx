import { PropsWithChildren } from "react";
import { NoiseBG } from "../NoiseBG";
import PageTitle, { PageTitleProps } from "./PageTitle";
import { PageSubTitle, PageSubTitleProps } from "./PageSubTitle";
import { PageContainer, PageContainerProps } from "./PageContainer";

export type SectionProps = {
  topTitle?: PageTitleProps;
  subTitle?: PageSubTitleProps;
  container?: PageContainerProps;
} & PropsWithChildren;

export function Section(props: SectionProps) {
  const { children, subTitle, topTitle, container } = props;
  return (
    <section className="relative">
      {topTitle && (
        <div className="flex h-72 w-full items-center justify-center">
          <PageTitle {...topTitle} />
        </div>
      )}

      <div className="relative h-svh flex-col gap-5">
        <PageContainer {...container}>
          {subTitle && (
            <div className="py-5">
              <PageSubTitle {...subTitle} />
            </div>
          )}
          {children}
        </PageContainer>
      </div>
    </section>
  );
}
