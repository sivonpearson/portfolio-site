import * as React from "react";
import { Link, HeadFC, PageProps } from "gatsby";
import ProjectPage from "../../components/ProjectPage";

const SnakeNNPage: React.FC<PageProps> = () => {
  return (
    <ProjectPage title="Neural Network Snake Game">Hello World</ProjectPage>
  );
};

export default SnakeNNPage;

export const Head: HeadFC = () => <title>Neural Network Snake Game</title>;
