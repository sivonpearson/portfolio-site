import React, { useState } from "react";
import Backdrop from "./Backdrop";
import SecondaryHeader from "./SecondaryHeader";

type Props = {
  children: React.ReactNode | React.ReactNode[];
};

const ProjectPage: React.FC<Props> = ({ children }: Props) => {
  return (
    <Backdrop>
      <SecondaryHeader />
      {children}
    </Backdrop>
  );
};

export default ProjectPage;
