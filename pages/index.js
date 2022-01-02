import Scene from "../comps/Scene";
import styled from "styled-components";
import Projects from "../comps/Projects";
import { ContactForm } from "../comps/Contact";
import { Loader } from "../comps/Loader";
import { motion, AnimatePresence } from "framer-motion";

const ContainerUI = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  z-index: 1000;
  color: ${(props) => (props.dark ? "white" : "black")};
`;

const BorderUI = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  transition: 0.5s ease;
  position: relative;
  @media (max-width: 1000px) {
    max-height: none;
    width: 90%;
    padding: 0 0 100px 0;
  }
`;

const SectionUI = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: ${(props) => props.align};
  position: relative;
  flex-direction: column;
`;

const H1 = styled(motion.div)`
  display: flex;
  align-items: center;
  font-size: calc(64px + 4vw);
  line-height: 100px;
  color: transparent;
  -webkit-text-stroke: ${(props) => (props.dark ? "1px white;" : "1px black;")};
`;

const H2 = styled(motion.div)`
  display: flex;
  align-items: center;
  font-size: calc(18px + 1vw);
`;

const H3 = styled(motion.div)`
  display: flex;
  align-items: center;
  font-size: calc(24px + 1vw);
  width: 50%;
  @media (max-width: 1000px) {
    width: 100%;
  }
`;

export default function Home({
  size,
  scrollTop,
  position,
  setHovering,
  dark,
  loading,
}) {

  const TextFadeUp = (text) => {
    return (
      <H3
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{
          delay: 0.4,
          type: "ease",
        }}
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: 50, opacity: 0 },
        }}
      >
        {text}
      </H3>
    );
  };


  return (
    <AnimatePresence>
      <Loader loading={loading} />
      <ContainerUI
        dark={dark}
        style={{ margin: "100px 0 0 0" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, x: 1000 }}
        transition={{
          delay: 0.2,
          type: "ease",
        }}
      >
        <BorderUI /* style={{ top: size.width > 1000 ? -scrollTop / 25 : 0 }} */
        >
          <SectionUI>
            <H1
              style={{ margin: "0 0 50px 0" }}
              dark={dark}
              transition={{ delay: 2 }}
              initial={{ x: 0, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
            >
              Hi, I'm Julian
            </H1>
            <H2
              transition={{ delay: 2.4 }}
              initial={{ x: 0, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
            >
              I design and develop
            </H2>
          </SectionUI>
          <SectionUI align="flex-start">
          {TextFadeUp(
            "I'm a frontend developer and digital design student at BCIT."
          )}

          </SectionUI>
          <SectionUI align="flex-start">
          {TextFadeUp(
            "I'm currently learning React Native to further my development. And Blender to sharpen my design."
          )}
          </SectionUI>
          <SectionUI align="flex-start">
          {TextFadeUp(
            "Check out some of my recent projects below."
          )}
          </SectionUI>
          <SectionUI style={{ padding: "250px 0" }}>
            <Projects
              position={position}
              setHovering={setHovering}
              dark={dark}
            />
          </SectionUI>

          <SectionUI align="flex-start">
          {TextFadeUp(
            "Please get in touch if you would like to work together."
          )}
          </SectionUI>
          <SectionUI style={{ padding: "250px 0" }}>
            <ContactForm dark={dark} />
          </SectionUI>
        </BorderUI>
        <Scene scrollTop={scrollTop} position={position} dark={dark} />
      </ContainerUI>
    </AnimatePresence>
  );
}
