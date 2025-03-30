import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

type Props = {
  size?: string;
};

const SocialLinks = ({ size = "1rem" }: Props) => {
  return (
    <>
      <a
        href="https://github.com/sivonpearson"
        className="social place-content-baseline"
        rel="noopener noreferrer"
        target="_blank"
      >
        <FaGithub size={size} />
      </a>
      <a
        href="https://www.linkedin.com/in/sivon-pearson-59157a214/"
        className="social place-content-baseline"
        rel="noopener noreferrer"
        target="_blank"
      >
        <FaLinkedin size={size} />
      </a>
    </>
  );
};

export default SocialLinks;
