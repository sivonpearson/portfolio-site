import React from "react";
import { Link } from "gatsby";
import { FaGithub } from "react-icons/fa";
import { StaticImage } from "gatsby-plugin-image";
import ImageLoader from "./ImageLoader";

type Props = {
  title: string;
  imageName: string;
  description: string;
  tags: string[];
  pagelink: string;
  githublink: string | null;
};

const tagColors = ["#FF0000", "#00FF00", "#0000FF"];

const ProjectCard = ({
  title,
  imageName,
  description,
  tags,
  pagelink,
  githublink,
}: Props) => {
  return (
    <Link
      to={`/${pagelink}`}
      // bg-black bg-opacity-0 hover:bg-opacity-50 ease-in-out transition-opacity duration-300
      className="relative max-w-32 max-h-64 p-12"
    >
      <div className="flex justify-center">
        <ImageLoader imageName={imageName} />
      </div>
      {githublink && (
        <a
          href={githublink}
          className="absolute top-0 right-5 z-10"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaGithub size={"1.5rem"} />
        </a>
      )}
      <div className="relative">
        <h4 className="text-balance">{title}</h4>
        <p className="leading-relaxed">{description}</p>
        <div className="flex gap-3 h-max align-middle">
          {tags.map((tag, index) => (
            <p
              key={index}
              className="bg-black bg-opacity-50 rounded-lg px-2 text-center h-fit justify-center align-middle"
              style={{ color: tagColors[index % tagColors.length] }}
            >
              {tag}
            </p>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
