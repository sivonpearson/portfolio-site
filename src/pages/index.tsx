import * as React from "react";
import { Link, type HeadFC, type PageProps } from "gatsby";
import Contact from "../components/Contact";
import ProjectCard from "../components/ProjectCard";
import projectdata from "../data/ProjectData";
import Backdrop from "../components/Backdrop";
import Timeline from "../components/Timeline";
import workdata from "../data/WorkData";
import JumpingLetters from "../components/JumpingLetters";
import ResumeDownload from "../components/ResumeDownload";
import { AppearingComp, SlideLeftComp } from "../components/FadingComps";

// TODO:
// Add responsiveness
// Add Personal Project pictures
// Add more padding to the bottom of the project pages
// Fix overall formatting
// Fix Project page grid overlap when webpage is made smaller; min-width?
// Fix header formatting so it doesn't block any buttons
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
        <div className="flex flex-col px-20 space-y-[75vh]">
          <span className="h-dvh">
            <p className="text-5xl leading-snug">
              Hi, my name <br /> is <strong>Sivon</strong>.
            </p>
            <br />
            <p className="text-4xl text-balance leading-relaxed">
              I develop automation tools, web applications, and machine learning
              tools.
            </p>
            <div className="bottom-0">
              <JumpingLetters
                text={"SCROLL"}
                amplitude={"3px"}
                speed={"0.75s"}
              />
            </div>
          </span>
          <span id="about">
            <AppearingComp amountVisible={1.0} animDuration={1.0}>
              <h2>About Me</h2>
            </AppearingComp>

            <SlideLeftComp amountVisible={0.75} animDuration={1.5}>
              <p className="max-w-3xl leading-loose">
                I'm a <strong>software developer</strong> passionate about
                building efficient, scalable, and user-friendly applications.
                With experience in <strong>web development</strong>,{" "}
                <strong>application programming</strong>, and{" "}
                <strong>machine learning</strong>, I enjoy solving complex
                problems and bringing ideas to life through clean, maintainable
                code. Whether working on web applications, backend systems, or
                innovative side projects, I'm always eager to learn and improve.{" "}
                <strong>Let's create something awesome together!</strong>
              </p>
            </SlideLeftComp>
          </span>
          <span id="work">
            <AppearingComp amountVisible={1.0} animDuration={1.0}>
              <div className="flex justify-between">
                <h2>Work Experience</h2>
                <ResumeDownload />
              </div>
            </AppearingComp>
            <Timeline workdata={workdata} />
          </span>
          <span id="projects">
            <AppearingComp amountVisible={1.0} animDuration={1.0}>
              <h2>Projects</h2>
            </AppearingComp>
            <div className="grid grid-cols-3 grid-auto-columns-1/3 gap-2">
              {/* <div className="w-full flex flex-wrap items-str"> */}
              {projectdata.map((projectcard, index) => (
                <ProjectCard {...projectcard} key={index} />
              ))}
            </div>
          </span>
          <span id="contact">
            <AppearingComp amountVisible={1.0} animDuration={1.0}>
              <h2>Contact</h2>
            </AppearingComp>
            <Contact />
          </span>
        </div>
      </Backdrop>
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Sivon Pearson | Portfolio</title>;
