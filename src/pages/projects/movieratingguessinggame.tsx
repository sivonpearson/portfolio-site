import * as React from "react";
import { Link, HeadFC, PageProps } from "gatsby";
import ProjectPage from "../../components/ProjectPage";

const MovieGuessProject: React.FC<PageProps> = () => {
  return (
    <ProjectPage title="Movie Rating Guessing Game">Hello World</ProjectPage>
  );
};

export default MovieGuessProject;

export const Head: HeadFC = () => <title>Sivon Pearson | Projects</title>;
