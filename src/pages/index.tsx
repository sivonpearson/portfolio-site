import * as React from "react";
import { Link, type HeadFC, type PageProps } from "gatsby";
import Contact from "../components/Contact";
import ProjectCard from "../components/ProjectCard";
import projectdata from "../data/ProjectData";
import Backdrop from "../components/Backdrop";
import Timeline from "../components/Timeline";
import workdata from "../data/WorkData";
import JumpingLetters from "../components/JumpingLetters";

// TODO:
// Add responsiveness
// Ensure all css is exported to Github Pages correctly
// Add Personal Project pages
// Add Personal Project pictures
// Fix overall formatting
// Fix Project page grid overlap when webpage is made smaller
// Add Resume area
// Testimonials

const IndexPage: React.FC<PageProps> = () => {
  return (
    <div id="top">
      <Backdrop>
        <nav className="py-6 w-full flex flex-no-wrap items-center justify-between sticky top-0 z-50">
          <div className="flex w-full flex-wrap items-center justify-between px-12 text-lg">
            <Link to="/#top" className="header-primary">
              Sivon | Software Developer
            </Link>
            <div className="relative flex gap-2 items-center">
              <Link to="/#about" className="header-secondary">
                About
              </Link>
              <Link to="/#work" className="header-secondary">
                Work
              </Link>
              <Link to="/#projects" className="header-secondary">
                Projects
              </Link>
              <Link to="/#contact" className="header-secondary">
                Contact
              </Link>
            </div>
          </div>
        </nav>
        <div className="px-20">
          <span>
            <p className="text-5xl leading-snug">
              Hi, my name <br /> is <strong>Sivon</strong>.
            </p>
            <br />
            <br />
            <br />
            <p className="text-4xl text-balance leading-relaxed">
              I develop automation tools, web applications, and machine learning
              tools.
            </p>
          </span>
          <br />
          <br />
          <br />
          <span>
            <JumpingLetters text={"SCROLL"} amplitude={"3px"} speed={"0.75s"} />
          </span>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <span id="about">
            <h2 className="scrolling-appear">About Me</h2>
            <p className="max-w-3xl leading-loose scrolling-fade-in">
              I'm a <strong>software developer</strong> passionate about
              building efficient, scalable, and user-friendly applications. With
              experience in <strong>web development</strong>,{" "}
              <strong>application programming</strong>, and{" "}
              <strong>machine learning</strong>, I enjoy solving complex
              problems and bringing ideas to life through clean, maintainable
              code. Whether working on web applications, backend systems, or
              innovative side projects, I'm always eager to learn and improve.{" "}
              <strong>Let's create something awesome together!</strong>
            </p>
          </span>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <span id="work">
            <h2 className="scrolling-appear">Work Experience</h2>
            <Timeline workdata={workdata} />
          </span>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <span id="projects">
            <h2 className="scrolling-appear">Projects</h2>
            <div className="grid grid-cols-3 xs:grid-cols-1 gap-2 scrolling-appear">
              {projectdata.map((projectcard, index) => (
                <ProjectCard {...projectcard} key={index} />
              ))}
            </div>
          </span>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <span id="contact">
            <h2 className="scrolling-appear">Contact</h2>
            <Contact />
          </span>
        </div>
      </Backdrop>
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Sivon Pearson | Portfolio</title>;
