import * as React from "react";
import { Link, HeadFC, PageProps } from "gatsby";
import ProjectPage from "../../components/ProjectPage";
import { ProjectData } from "../../components/ProjectCard";
import { FaGithub } from "react-icons/fa";

export const projectData: ProjectData = {
  title: "Snake Game & Neural Networks",
  imageName: "nnsg.png",
  description:
    "Python script that evolves neural networks to optimize Snake gameplay.",
  tags: ["Python", "Machine Learning", "NumPy", "pygame"],
  pagelink: "projects/neuralnetworksnakegame",
  githublink: "https://github.com/sivonpearson/GNN-Snake-Game",
};

const SnakeNNPage: React.FC<PageProps> = () => {
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
              <FaGithub size={"2.0rem"} />
            </a>
          )}
        </div>
        <div className="leading-loose">
          <h2>Overview</h2>
          <p>
            This project leverages{" "}
            <strong>Genetic Neural Networks (GNNs)</strong> to train artificial
            agents to play the classic game <strong>Snake</strong> using an
            evolutionary approach. Instead of traditional supervised learning or
            reinforcement learning, the agents evolve through a{" "}
            <strong>genetic algorithm</strong>, simulating natural selection to
            gradually improve their gameplay. Over successive generations, the
            agents develop strategies to increase their survival time and
            maximize food collection, ultimately mastering the game.
          </p>
          <h2>Features</h2>
          <ul>
            <li>
              <strong>Evolutionary Learning</strong>: Agents evolve through
              natural selection, with genetic operations like crossover and
              mutation helping create new generations of players.
            </li>
            <li>
              <strong>Dynamic Scoring</strong>: Agents are evaluated based on
              their performance, with better performers being selected for
              breeding the next generation.
            </li>
            <li>
              <strong>Visualization</strong>: Real-time visual representation of
              agents as they play, showcasing their increasing competency over
              time.
            </li>
            <li>
              <strong>Autonomous Training</strong>: The system automatically
              trains the agents over multiple generations, improving their
              gameplay without human intervention.
            </li>
          </ul>
          <h2>Implementation</h2>
          <ul>
            <li>
              <strong>Algorithm</strong>: The core of the project is a genetic
              algorithm that guides the evolution of agents. Each agent is
              represented by a neural network, and their performance is based on
              how well they play Snake, measured by survival time and food
              collection.
            </li>
            <li>
              <strong>Neural Networks</strong>: The agents' brains are simple
              feed-forward neural networks that take the game state (e.g., Snake
              position, food location) as input and output the agent's next
              move.
            </li>
            <li>
              <strong>Genetic Operations</strong>: The top-performing agents are
              selected based on fitness (performance) and used to create
              offspring through crossover and mutation, introducing new genetic
              material into the population.
            </li>
            <li>
              <strong>Visualization</strong>: Built using Python libraries such
              as Pygame for real-time visualization, showing agents in action
              and providing visual feedback on their improvement.
            </li>
          </ul>
          <h2>Challenges & Solutions</h2>
          <ul>
            <li>
              <strong>Exploration vs. Exploitation</strong>: A key challenge in
              evolutionary algorithms is balancing exploration (introducing
              genetic diversity) with exploitation (focusing on the
              best-performing agents). This was addressed by carefully tuning
              the selection and mutation rates.
            </li>
            <li>
              <strong>Fitness Evaluation</strong>: Determining how to evaluate
              and score agents was tricky, as performance can vary greatly from
              one agent to another. The scoring system was designed to reward
              agents for surviving longer and eating more food.
            </li>
            <li>
              <strong>Performance Scaling</strong>: As the population grew and
              generations increased, the system had to be optimized to ensure
              training remained efficient and scalable.
            </li>
          </ul>
          <h2>What I Learned</h2>
          <p>
            This project deepened my understanding of genetic algorithms, neural
            network training, and evolutionary computation. It was a great
            hands-on experience in applying machine learning techniques to game
            AI, and it helped me appreciate the power of unsupervised training
            methods in solving complex problems. It also provided valuable
            insights into algorithm design and how different learning approaches
            can be used to tackle real-world challenges.
          </p>
          <h2>GitHub</h2>
          <li>
            View the source code{" "}
            <a
              href={projectData.githublink}
              className="social underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              here
            </a>
            .
          </li>
        </div>
      </div>
    </ProjectPage>
  );
};

export default SnakeNNPage;

export const Head: HeadFC = () => <title>Sivon Pearson | Projects</title>;
