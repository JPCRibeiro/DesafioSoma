
import PageTitle from "../PageTitle";
import { Loader, PageContainer } from "./ApiPageLayout.styled";

export default function PageLayout({ title, subtitle, icon, isLoading, children }) {
  return (
    <div>
      <PageTitle title={title} subtitle={subtitle} icon={icon} />
      <PageContainer>
        {isLoading ? (
          <Loader>
            <span></span>
            <span></span>
            <span></span>
          </Loader>
        ) : (
          children
        )}
      </PageContainer>
    </div>
  );
}