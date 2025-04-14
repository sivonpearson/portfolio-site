import React from "react";
import { Link } from "gatsby";
import { FaGithub } from "react-icons/fa";
import ImageLoader from "./ImageLoader";
import { AppearingComp } from "./FadingComps";

export type ProjectData = {
  title: string;
  imageName: string;
  description: string;
  tags: string[];
  pagelink: string;
  githublink: string;
};

const tagColors = ["#FF0000", "#00FF00", "#0000FF"];

const ProjectCard = ({
  title,
  imageName,
  description,
  tags,
  pagelink,
  githublink,
}: ProjectData) => {
  return (
    <AppearingComp amountVisible={0.5} animDuration={1.5}>
      <div className="relative w-full h-full bg-black bg-opacity-10 hover:bg-opacity-50 transition-colors duration-300 align-middle shadow-2xl shadow-white">
        {githublink && (
          <a
            href={githublink}
            className="absolute top-2 right-2 z-50 object-cover social"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaGithub size={"1.5rem"} />
          </a>
        )}
        <Link to={`/${pagelink}`}>
          {/* <div className="flex justify-center pt-2 m-2">
          <ImageLoader imageName={imageName} />
        </div> */}
          <div className="relative p-2">
            <h4 className="text-balance text-center my-0">{title}</h4>
            <p className="leading-relaxed my-3">{description}</p>
            <div className="grid grid-cols-3 gap-1 h-max align-middle">
              {tags.map((tag, index) => (
                <p
                  key={index}
                  className="bg-black bg-opacity-50 rounded-3xl p-1 text-center h-fit justify-center align-middle"
                  style={{ color: tagColors[index % tagColors.length] }}
                >
                  {tag}
                </p>
              ))}
            </div>
          </div>
        </Link>
      </div>
    </AppearingComp>
  );
};

export default ProjectCard;
