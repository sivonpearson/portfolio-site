import * as React from "react";
import { Link, HeadFC, PageProps } from "gatsby";
import ProjectPage from "../../components/ProjectPage";

const DisasterForecastingPage: React.FC<PageProps> = () => {
  return (
    <ProjectPage title="Climate-Change Disaster Forecasting Tool">
      Hello World
    </ProjectPage>
  );
};

export default DisasterForecastingPage;

export const Head: HeadFC = () => <title>Sivon Pearson | Projects</title>;
