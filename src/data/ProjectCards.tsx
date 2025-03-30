type ProjectData = {
  title: string;
  image: string;
  description: string;
  tags: string[];
  pagelink: string;
  githublink: string | null;
};

const projectcards: ProjectData[] = [
  {
    title: "Climate-Change Forecasting Tool",
    image: "ccft.png",
    description:
      "Web application that uses a temporal fusion transformer, which is trained on climate, disaster, and population data, to make predictions about the severity of future climate-change related disasters.",
    tags: ["Python", "PyTorch", "TypeScript", "React"],
    pagelink: "projects/disasterforecastingtool",
    githublink:
      "https://github.com/orgs/climate-change-forecasting-tool/repositories",
  },
  {
    title: "Movie Rating Guessing Game",
    image: "mrgg.png",
    description:
      "Web application where users guess the IMDB score of a random movie based on a number of the movie's attributes, such as its title, poster, plot, release year, etc. Users are also scored on how close their guess is to the actual IMDB score.",
    tags: ["React", "Vite", "TypeScript", "Tailwind"],
    pagelink: "projects/movieratingguessinggame",
    githublink:
      "https://github.com/sivonpearson/movie-rating-guessing-frontend",
  },
  {
    title: "Neural Network Snake Game",
    image: "nnsg.png",
    description:
      "A Python script which users can run a population of genetic neural networks on the game, 'Snake', to optimize how it is played.",
    tags: ["Python", "Machine Learning", "NumPy", "pygame"],
    pagelink: "projects/neuralnetworksnakegame",
    githublink: "https://github.com/sivonpearson/GNN-Snake-Game",
  },
];

export default projectcards;
