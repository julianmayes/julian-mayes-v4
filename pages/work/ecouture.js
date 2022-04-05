import styled from "styled-components";
import Link from "next/link";
import { projects } from "../../data/projects";
import { motion } from "framer-motion";
import { Hero } from "../../comps/Hero";
import { TextFadeUp } from "../../comps/TextFadeUp";
import { ImageFadeUp } from "../../comps/ImageFadeUp";
import { useRouter } from "next/router";

export default function Home({ size, scrollTop, dark, setHovering }) {
  const project = projects[4];
  const nextProject = projects[0];

  const router = useRouter();

  const handleClick = (e, href) => {
    e.preventDefault();
    setHovering(false);
    router.push(href);
  };

  const handleKeyDown = (e, href) => {
    if (e.key === "Enter") {
      e.preventDefault();
      router.push(href);
    }
  };

  return (
    <ContainerUI style={{ margin: "0 0 0 0" }} dark={dark}>
      <BorderUI>
        <Hero project={project} dark={dark} />

        <SectionUI align="center" justify="space-between" wrap="column">
          {TextFadeUp(
            "Ecouture is a interactive web app created to bring awarness to the sustainability of fast fashion."
          )}

          {ImageFadeUp("/eco-test.gif", "Homepage", dark)}
        </SectionUI>

        <SectionUI align="center" justify="space-between" wrap="column-reverse">
          {ImageFadeUp("/ecouture.gif", "Homepage", dark)}

          {TextFadeUp(
            "I was tasked with 3D modelling assets using blender and integrating Three.js to make interactive animations."
          )}
        </SectionUI>

        <SectionUI align="center" justify="center">
          <NextProject
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            tabIndex={0}
            onKeyDown={(e) => handleKeyDown(e, `${nextProject.name}`)}
            onClick={(e) => handleClick(e, `${nextProject.name}`)}
            dark={dark}
            style={{ margin: "0 0 20px 0" }}
            exit={{ opacity: 0 }}
            color={nextProject.color}
          >
            next project
          </NextProject>
        </SectionUI>
      </BorderUI>
    </ContainerUI>
  );
}

const breakPoint = "1200px";

const ContainerUI = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  z-index: 1000;
  color: ${(props) => (props.dark ? "white" : "black")};
  background: ${(props) => (props.dark ? "black" : "white")};
  overflow: hidden;
`;

const BorderUI = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  transition: 0.5s ease;
  position: relative;

  @media (max-width: 1000px) {
    max-height: none;
  }
`;

const MoveCont = styled(motion.div)`
  position: relative;
`;

const SectionUI = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 220px;
  text-align: ${(props) => props.justify};
  justify-content: ${(props) => props.justify};
  padding: 0 5%;
  align-items: ${(props) => props.align};
  position: relative;
  flex-direction: row;
  @media (max-width: ${breakPoint}) {
    flex-direction: ${(props) => props.wrap};
    justify-content: ${(props) => props.align};
  }
`;

const NextProject = styled(motion.div)`
  display: flex;
  align-items: center;
  font-size: calc(64px + 4vw);
  color: transparent;
  text-align: center;
  z-index: 100;
  -webkit-text-stroke: ${(props) => (props.dark ? "1px white" : "1px black")};

  &:hover {
    color: ${(props) => props.color};
    -webkit-text-stroke: 0;
  }
`;
