import React from "react";
import { Link } from "gatsby";
import { FaGithub } from "react-icons/fa";
import { StaticImage } from "gatsby-plugin-image";

type Props = {
  title: string;
  image: string;
  description: string;
  tags: string[];
  pagelink: string;
  githublink: string | null;
};

const tagColors = ["#FF0000", "#00FF00", "#0000FF"];

const ProjectCard = ({
  title,
  image,
  description,
  tags,
  pagelink,
  githublink,
}: Props) => {
  return (
    <Link to={`/${pagelink}`} className="relative max-w-24 max-h-32">
      <StaticImage
        src={image}
        layout="fixed"
        width={160}
        height={120}
        alt={""}
      />
      {githublink && (
        <a
          href={githublink}
          className="absolute right-5 z-10"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaGithub size={"1.5rem"} />
        </a>
      )}
      <h4>{title}</h4>
      <p>{description}</p>
      <div className="flex gap-3">
        {tags.map((tag, index) => (
          <p key={index} style={{ color: tagColors[index % tagColors.length] }}>
            {tag}
          </p>
        ))}
      </div>
    </Link>
  );
};

export default ProjectCard;
