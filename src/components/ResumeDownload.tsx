import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { FiExternalLink } from "react-icons/fi";

const ResumeDownload: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "Resume.pdf" }) {
        publicURL
      }
    }
  `);

  if (!data.file) {
    // TODO: fix
    return <p className="text-red-500">Resume not found</p>;
  }

  return (
    <a
      href={data.file.publicURL}
      rel="noopener noreferrer"
      target="_blank"
      className="flex items-center gap-1 align-middle max-w-fit"
    >
      <h2 className="text-slate-200">
        Resume <FiExternalLink />
      </h2>
    </a>
  );
};

export default ResumeDownload;
