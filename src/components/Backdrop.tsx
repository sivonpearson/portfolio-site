import React from "react";
import BubbleBackground from "./BubbleBackground";
import { FaGithub, FaLinkedin } from "react-icons/fa";

type Props = {
  children: React.ReactNode | React.ReactNode[];
};

const Backdrop: React.FC<Props> = ({ children }: Props) => {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <BubbleBackground />

      {/* So that the whole screen is scrollable */}
      <div className="absolute top-0 w-screen h-screen flex items-center justify-center overflow-y-auto">
        <div className="grid grid-cols-1 fixed top-7 left-7 gap-5">
          <a
            href="https://github.com/sivonpearson"
            className="social place-content-baseline"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaGithub size={"3rem"} />
          </a>
          <a
            href="https://www.linkedin.com/in/sivon-pearson-59157a214/"
            className="social place-content-baseline"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaLinkedin size={"3rem"} />
          </a>
        </div>
        <div className="absolute top-0 z-10 w-full max-w-7xl p-4 bg-black bg-opacity-10 rounded-lg shadow-lg">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Backdrop;
