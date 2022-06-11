/* eslint-disable @next/next/no-img-element */
import ContainerSmall from "../../../component/ContainerSmall/ContainerSmall";
import HeroStyle from "../../../styles/Hero.module.css";

import { Box } from "@chakra-ui/react";
import Socials from "../../../component/Socials/Socials";

const Hero = () => {
  return (
    <ContainerSmall>
      <main className={HeroStyle.hero_main}>
        <section className={HeroStyle.sectionOne}>
          <span className={HeroStyle.hero_socials}>
            <Socials />
          </span>

          <div>
            <h2>Hi, my name is Caleb,</h2>
            <h1>I am a Software Engineer based in Nigeria</h1>
            <p>
              I work with the javascript react, react native and node frameworks to
              create modern, accessible, and fully responsive websites, web applications and
              mobile apps.
            </p>
          </div>
        </section>

        <Box className={HeroStyle.sectionTwo}>
          <img src="/hero_illustration.gif" alt="hero illustration" loading="lazy" />
        </Box>
      </main>
    </ContainerSmall>
  );
};

export default Hero;
