import * as React from "react";
import { Link, type HeadFC, type PageProps } from "gatsby";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Contact from "../components/Contact";
import ProjectCard from "../components/ProjectCard";
import projectcards from "../data/ProjectCards";
import Backdrop from "../components/Backdrop";

const IndexPage: React.FC<PageProps> = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

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
          <span className="">
            <p className="text-5xl">
              Hi, my name <br /> is <strong>Sivon</strong>.
            </p>
            <p className="text-l">
              I develop automation tools, web applications, and machine learning
              tools.
            </p>
          </span>
          <span id="about">
            <h2>About Me.</h2>
            <p className="max-w-3xl leading-loose">
              I'm a software developer passionate about building efficient,
              scalable, and user-friendly applications. With experience in web
              development, application programming, and machine learning
              libraries, I enjoy solving complex problems and bringing ideas to
              life through clean, maintainable code. Whether working on web
              applications, backend systems, or innovative side projects, I'm
              always eager to learn and improve. Let's create something awesome
              together!
            </p>
          </span>
          <span id="work">
            <h2>Work Experience.</h2>
          </span>
          <span id="projects">
            <h2>Projects.</h2>
            <Carousel
              swipeable={true}
              draggable={true}
              showDots={false}
              responsive={responsive}
              infinite={false}
              // autoPlay={this.props.deviceType !== "mobile" ? true : false}
              autoPlay={false}
              autoPlaySpeed={3000}
              keyBoardControl={true}
              transitionDuration={1000}
              containerClass="carousel-container"
              removeArrowOnDeviceType={["tablet", "mobile"]}
              // deviceType={this.props.deviceType}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
              centerMode={true}
            >
              {projectcards.map((projectcard, index) => (
                <ProjectCard {...projectcard} key={index} />
              ))}
            </Carousel>
          </span>
          <span id="contact">
            <h2>Contact.</h2>
            <Contact />
          </span>
        </div>
      </Backdrop>
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Sivon Pearson | Portfolio</title>;
