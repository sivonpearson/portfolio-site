import { ProjectData } from "../components/ProjectCard";

const projectdata: ProjectData[] = [
  {
    title: "Disaster Forecasting Tool",
    imageName: "ccft.png",
    description:
      "Web app using a Temporal Fusion Transformer to predict the severity of future climate-related disasters based on climate, disaster, and population data.",
    tags: ["Python", "PyTorch", "TypeScript", "React"],
    pagelink: "projects/disasterforecastingtool",
    githublink:
      "https://github.com/orgs/climate-change-forecasting-tool/repositories",
  },
  {
    title: "Guess the Rating!",
    imageName: "mrgg.png",
    description:
      "Web game where users guess a movie's IMDb score based on its attributes like title, poster, and plot.",
    tags: ["React", "Vite", "TypeScript", "Tailwind"],
    pagelink: "projects/movieratingguessinggame",
    githublink:
      "https://github.com/sivonpearson/movie-rating-guessing-frontend",
  },
  {
    title: "Snake Game & Neural Networks",
    imageName: "nnsg.png",
    description:
      "Python script that evolves neural networks to optimize Snake gameplay.",
    tags: ["Python", "Machine Learning", "NumPy", "pygame"],
    pagelink: "projects/neuralnetworksnakegame",
    githublink: "https://github.com/sivonpearson/GNN-Snake-Game",
  },
];

export default projectdata;
