type ProjectData = {
  title: string;
  imageName: string;
  description: string;
  tags: string[];
  pagelink: string;
  githublink: string | null;
};

const projectcards: ProjectData[] = [
  {
    title: "Disaster Forecasting Tool",
    imageName: "ccft.png",
    description:
      "Web application that uses a temporal fusion transformer, which is trained on climate, disaster, and population data, to make predictions about the severity of future climate-change related disasters.",
    tags: ["Python", "PyTorch", "TypeScript", "React"],
    pagelink: "projects/disasterforecastingtool",
    githublink:
      "https://github.com/orgs/climate-change-forecasting-tool/repositories",
  },
  {
    title: "Movie Rating Guessing Game",
    imageName: "mrgg.png",
    description:
      "Web game where users guess the IMDB score of a random movie based on a number of the movie's attributes, such as its title, poster, plot, release year, etc.",
    tags: ["React", "Vite", "TypeScript", "Tailwind"],
    pagelink: "projects/movieratingguessinggame",
    githublink:
      "https://github.com/sivonpearson/movie-rating-guessing-frontend",
  },
  {
    title: "Snake Game & Neural Networks",
    imageName: "nnsg.png",
    description:
      "Python script which users can run a population of genetic neural networks on the game, 'Snake', to optimize how it is played.",
    tags: ["Python", "Machine Learning", "NumPy", "pygame"],
    pagelink: "projects/neuralnetworksnakegame",
    githublink: "https://github.com/sivonpearson/GNN-Snake-Game",
  },
];

export default projectcards;
