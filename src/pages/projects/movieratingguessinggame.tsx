import * as React from "react";
import { Link, HeadFC, PageProps } from "gatsby";
import ProjectPage from "../../components/ProjectPage";
import { ProjectData } from "../../components/ProjectCard";
import { FaGithub } from "react-icons/fa";

export const projectData: ProjectData = {
  title: "Guess the Rating!",
  imageName: "mrgg.png",
  description:
    "Web game where users guess a movie's IMDb score based on its attributes like title, poster, and plot.",
  tags: ["React", "Vite", "TypeScript", "Tailwind"],
  pagelink: "projects/movieratingguessinggame",
  githublink: "https://github.com/sivonpearson/movie-rating-guessing-frontend",
};

const MovieGuessProject: React.FC<PageProps> = () => {
  return (
    <ProjectPage>
      <div>
        <div className="flex flex-center items-center align-middle justify-center gap-4">
          <h1 className="text-center">{projectData.title} </h1>
          {projectData.githublink && (
            <a
              href={projectData.githublink}
              className="social"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaGithub size={"2.5rem"} />
            </a>
          )}
        </div>
        <div className="leading-loose">
          <h2>Overview</h2>
          <p>
            This project is a fun and interactive game where users try to guess
            the <strong>IMDb rating</strong> of randomly selected movies based
            on key movie attributes. Each round presents players with a movie's
            <strong>title</strong>, <strong>poster</strong>,{" "}
            <strong>plot summary</strong>, <strong>director</strong>, and other
            relevant details—challenging them to estimate the rating as
            accurately as possible.
          </p>
          <p>
            Once a guess is submitted, the game reveals the actual IMDb score
            and calculates a score based on how close the guess was. The closer
            the player is to the real rating, the more points they earn. The
            game encourages pattern recognition and intuition about how
            different elements—like a director's reputation or a plot's
            originality—might influence a film's reception.
          </p>
          <p>
            Behind the scenes, the game pulls movie data from the{" "}
            <a
              href="https://www.omdbapi.com/"
              className="social underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              OMDb API
            </a>{" "}
            and incorporates a clean, responsive UI built for smooth user
            interaction. This project blends{" "}
            <strong>data-driven gameplay</strong>, <strong>design</strong>, and
            <strong>movie trivia</strong> into a unique experience that appeals
            to both film lovers and casual players alike.
          </p>
          <h2>Features</h2>
          <ul>
            <li>Randomly selected movies with visual and textual data</li>
            <li>Real-time scoring system based on guess accuracy</li>
            <li>Feedback after each guess, including the correct rating</li>
            <li>Clean and responsive user interface</li>
            <li>Replayable and addictive gameplay loop</li>
          </ul>
          <h2>Implementation</h2>
          <ul>
            <li>
              <strong>Frontend</strong>: Built with React and Tailwind CSS for a
              modern, responsive UI
            </li>
            <li>
              <strong>Movie Data</strong>: Fetched from the{" "}
              <a
                href="https://www.omdbapi.com/"
                className="social underline"
                rel="noopener noreferrer"
                target="_blank"
              >
                OMDb API
              </a>
            </li>
            <li>
              <strong>Logic</strong>: Dynamic scoring algorithm that calculates
              points based on distance from actual score
            </li>
            <li>
              <strong>State Management</strong>: Managed with React hooks for
              game flow and user input
            </li>
            <li>
              <strong>Design Considerations</strong>: Emphasis on clarity,
              accessibility, and user engagement
            </li>
          </ul>
          <h2>What I learned</h2>
          <p>
            This project helped me dive deeper into building interactive web
            apps, handling real-time user input, and designing simple but
            addictive game mechanics. I also gained experience integrating
            third-party data and improving UX through visual feedback and
            responsiveness.
          </p>
          <h2>Live Demo / GitHub</h2>
          <ul>
            <li>
              Play the game{" "}
              <a
                href="https://sivonpearson.github.io/movie-rating-guessing-frontend/"
                className="social underline"
                rel="noopener noreferrer"
                target="_blank"
              >
                here
              </a>
              .
            </li>
            <li>
              View the frontend source code{" "}
              <a
                href="https://github.com/sivonpearson/movie-rating-guessing-frontend"
                className="social underline"
                rel="noopener noreferrer"
                target="_blank"
              >
                here
              </a>{" "}
              and the backend source code{" "}
              <a
                href="https://github.com/sivonpearson/movie-rating-guessing-backend"
                className="social underline"
                rel="noopener noreferrer"
                target="_blank"
              >
                here
              </a>
              .
            </li>
          </ul>
        </div>
      </div>
    </ProjectPage>
  );
};

export default MovieGuessProject;

export const Head: HeadFC = () => <title>Sivon Pearson | Projects</title>;
