import React, { useState } from "react";
import Backdrop from "./Backdrop";
import SecondaryHeader from "./SecondaryHeader";

type Props = {
  title: string;
  children: React.ReactNode;
};

const ProjectPage: React.FC<Props> = ({ title, children }: Props) => {
  return (
    <Backdrop>
      <SecondaryHeader />
      <h2 className="text-center">{title}</h2>
      {children}
    </Backdrop>
  );
};

export default ProjectPage;
