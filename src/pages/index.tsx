import * as React from "react";
import { Link, type HeadFC, type PageProps } from "gatsby";
import { useWindowScrollPositions } from "../scripts/WindowScrollPosition";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { setColorTheme } from "../scripts/ColorTheme";
import { Color } from "../scripts/Color";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Contact from "../components/Contact";
import ProjectCard from "../components/ProjectCard";
import projectcards from "../data/ProjectCards";
import Backdrop from "../components/Backdrop";

const gradient: [number, Color][] = [
  [0, new Color(255, 0, 0)],
  [0.5, new Color(0, 255, 0)],
  [1, new Color(0, 0, 255)],
];

const IndexPage: React.FC<PageProps> = () => {
  // const { scrollY } = useWindowScrollPositions();

  // setColorTheme(gradient, scrollY);

  // console.log(scrollY);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
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
        <nav className="py-6 w-full flex flex-no-wrap items-center justify-between sticky top-0">
          <div className="flex w-full flex-wrap items-center justify-between px-12 text-lg">
            <AnchorLink to="#top" className="">
              Sivon | Software Developer
            </AnchorLink>
            <div className="relative flex gap-4 items-center">
              <AnchorLink to="#about" className="">
                About
              </AnchorLink>
              <AnchorLink to="#work" className="">
                Work
              </AnchorLink>
              <AnchorLink to="#projects" className="">
                Projects
              </AnchorLink>
              <AnchorLink to="#contact" className="">
                Contact
              </AnchorLink>
            </div>
          </div>
        </nav>
        <div className="px-20">
          <div className="">
            <text className="text-5xl">
              Hi, my name <br /> is <text className="font-bold">Sivon</text>.
            </text>
            <p className="text-l">
              I develop automation tools, web applications, and machine learning
              tools.
            </p>
          </div>
          <div id="about">
            <h2>About Me.</h2>
            <p className="max-w-3xl">
              I'm a software developer passionate about building efficient,
              scalable, and user-friendly applications. With experience in web
              development, application programming, and machine learning
              libraries, I enjoy solving complex problems and bringing ideas to
              life through clean, maintainable code. Whether working on web
              applications, backend systems, or innovative side projects, I'm
              always eager to learn and improve. Let's create something awesome
              together!
            </p>
          </div>
          <div id="work">
            <h2>Work Experience.</h2>
          </div>
          <div id="projects">
            <h2>Projects.</h2>
            <Carousel
              swipeable={true}
              draggable={true}
              showDots={false}
              responsive={responsive}
              ssr={true} // means to render carousel on server-side.
              infinite={false}
              // autoPlay={this.props.deviceType !== "mobile" ? true : false}
              autoPlay={false}
              autoPlaySpeed={3000}
              keyBoardControl={true}
              customTransition="all .5"
              transitionDuration={500}
              containerClass="carousel-container"
              removeArrowOnDeviceType={["tablet", "mobile"]}
              // deviceType={this.props.deviceType}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
            >
              {projectcards.map((projectcard, index) => (
                <ProjectCard {...projectcard} key={index} />
              ))}
            </Carousel>
          </div>
          <div id="contact">
            <h2>Contact.</h2>
            <Contact />
          </div>
        </div>
      </Backdrop>
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <title>Sivon Pearson - Software Developer</title>
);
