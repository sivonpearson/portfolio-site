import * as React from "react";
import { Link, HeadFC, PageProps } from "gatsby";
import ProjectPage from "../../components/ProjectPage";
import { ProjectData } from "../../components/ProjectCard";
import { FaGithub } from "react-icons/fa";

export const projectData: ProjectData = {
  title: "Disaster Forecasting Tool",
  imageName: "ccft.png",
  description:
    "Web app using a Temporal Fusion Transformer to predict the severity of future climate-related disasters based on climate, disaster, and population data.",
  tags: ["Python", "PyTorch", "TypeScript", "React"],
  pagelink: "projects/disasterforecastingtool",
  githublink:
    "https://github.com/orgs/climate-change-forecasting-tool/repositories",
};

const DisasterForecastingPage: React.FC<PageProps> = () => {
  return (
    <ProjectPage>
      <div>
        <div className="flex flex-center items-center align-middle justify-center gap-4">
          <h1 className="text-center">
            Climate-Change Disaster Forecasting Tool
          </h1>
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
            A predictive web application designed to forecast the{" "}
            <strong>severity of climate-related disasters</strong>—including
            expected deaths, injuries, property damage, and disaster types—based
            on historical global climate and disaster data. This tool empowers
            policymakers, researchers, and emergency responders with
            forward-looking insights into potential climate change impacts in
            specific regions and timeframes.
          </p>
          <p>
            As the <strong>team lead</strong>, I guided the design and
            development of the entire system—from data ingestion to prediction
            interface. Our approach uses a{" "}
            <strong>Temporal Fusion Transformer (TFT)</strong>, a
            state-of-the-art deep learning model for time series forecasting, to
            make informed predictions about future disasters based on
            multi-dimensional climate and disaster data.
          </p>
          <h2>Features</h2>
          <ul>
            <li>
              Predicts key disaster metrics (deaths, injuries, damages, disaster
              type)
            </li>
            <li>Region-specific and time-specific forecasting interface</li>
            <li>
              Interactive frontend to input parameters and view predictions
            </li>
            <li>Scalable backend built for real-time model interaction</li>
            <li>
              Designed for use by scientists, policy analysts, and disaster
              management teams
            </li>
          </ul>
          <h2>Implementation</h2>
          <ul>
            <li>
              <strong>Machine Learning Model</strong>: Temporal Fusion
              Transformer trained on historical datasets including global
              climate patterns, past disaster records, geographical features,
              and more
            </li>
            <li>
              <strong>Backend</strong>: Built in Python using PyTorch Lightning,
              FastAPI for model-serving, and APIs to ingest real-world
              climate/disaster datasets
            </li>
            <li>
              <strong>Frontend</strong>: JavaScript-based interface for users to
              input target regions and forecast times, and visualize model
              predictions
            </li>
            <li>
              <strong>Team Workflow</strong>: Led collaborative development
              through Git, Agile sprints, and regular code/design reviews
            </li>
          </ul>
          <h2>Challenges & Solutions</h2>
          <ul>
            <li>
              <strong>Data Complexity</strong>: Managed high-dimensional,
              sparse, and heterogeneous data by pre-processing with
              normalization and feature engineering
            </li>
            <li>
              <strong>Model Interpretability</strong>: Incorporated attention
              visualizations from the TFT to give users insight into what
              factors influenced each prediction
            </li>
            <li>
              <strong>Real-Time Interaction</strong>: Optimized model inference
              and backend design to support responsive prediction generation
            </li>
          </ul>
          <h2>What I Learned</h2>
          <p>
            This project deepened my knowledge of advanced time series models
            and how to deploy them in real-world applications. I gained hands-on
            experience in MLOps, full-stack development, and leading a
            cross-functional team. Most importantly, it showed how machine
            learning can contribute to addressing one of the most pressing
            global challenges—climate change.
          </p>
          <h2>GitHub</h2>
          <li>
            View the backend source code{" "}
            <a
              href="https://github.com/climate-change-forecasting-tool/forecasting-tool-backend"
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

export default DisasterForecastingPage;

export const Head: HeadFC = () => <title>Sivon Pearson | Projects</title>;
