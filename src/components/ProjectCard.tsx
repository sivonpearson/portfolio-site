import React from "react";
import { Link } from "gatsby";
import { FaGithub } from "react-icons/fa";
import ImageLoader from "./ImageLoader";

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
    <div className="relative w-80 h-full align-middle">
      {githublink && (
        <a
          href={githublink}
          className="absolute top-2 right-2 z-50 object-cover"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaGithub size={"1.5rem"} />
        </a>
      )}
      <Link
        to={`/${pagelink}`}
        className="inline w-full h-full p-2 bg-black bg-opacity-10 hover:bg-opacity-50 transition-colors duration-300 shadow-2xl shadow-white"
      >
        {/* <div className="flex justify-center">
          <ImageLoader imageName={imageName} />
        </div> */}
        <div className="relative">
          <h4 className="text-balance">{title}</h4>
          <p className="leading-relaxed">{description}</p>
          {/* <div className="flex gap-3 h-max align-middle"> */}
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
  );
};

export default ProjectCard;

// import React from "react";
// import { Link } from "gatsby";
// import { FaGithub } from "react-icons/fa";
// import ImageLoader from "./ImageLoader";

// export type ProjectData = {
//   title: string;
//   imageName: string;
//   description: string;
//   tags: string[];
//   pagelink: string;
//   githublink: string;
// };

// const tagColors = ["#FF0000", "#00FF00", "#0000FF"];

// const ProjectCard = ({
//   title,
//   imageName,
//   description,
//   tags,
//   pagelink,
//   githublink,
// }: ProjectData) => {
//   return (
//     <div className="relative w-80 h-full p-2 bg-black bg-opacity-10 hover:bg-opacity-50 transition-colors duration-300 align-middle shadow-2xl shadow-white">
//       {githublink && (
//         <a
//           href={githublink}
//           className="absolute top-2 right-2 z-50 object-cover"
//           rel="noopener noreferrer"
//           target="_blank"
//         >
//           <FaGithub size={"1.5rem"} />
//         </a>
//       )}
//       <Link to={`/${pagelink}`} className="p-2">
//         {/* <div className="flex justify-center">
//         <ImageLoader imageName={imageName} />
//       </div> */}
//         <div className="relative">
//           <h4 className="text-balance">{title}</h4>
//           <p className="leading-relaxed">{description}</p>
//           {/* <div className="flex gap-3 h-max align-middle"> */}
//           <div className="grid grid-cols-3 gap-1 h-max align-middle">
//             {tags.map((tag, index) => (
//               <p
//                 key={index}
//                 className="bg-black bg-opacity-50 rounded-3xl p-1 text-center h-fit justify-center align-middle"
//                 style={{ color: tagColors[index % tagColors.length] }}
//               >
//                 {tag}
//               </p>
//             ))}
//           </div>
//         </div>
//       </Link>
//     </div>
//   );
// };

// export default ProjectCard;
