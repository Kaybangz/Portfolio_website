/* eslint-disable @next/next/no-img-element */
import ContainerSmall from "../../../component/Container/Container";
import HeroStyle from "../../../styles/Hero.module.css";
import { motion } from "framer-motion";
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
            <motion.h2
              initial={{ opacity: 0, y: 100 }}
              transition={{ duration: 2, ease: "easeInOut", type: "spring" }}
              animate={{ opacity: 1, y: 0 }}
            >
              Hi, my name is Caleb,
            </motion.h2>
            <motion.h1
              initial={{ opacity: 0, y: 100 }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                type: "spring",
                delay: 0.6,
              }}
              animate={{ opacity: 1, y: 0 }}
            >
              I am a Web developer based in Nigeria
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 100 }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                type: "spring",
                delay: 0.9,
              }}
              animate={{ opacity: 1, y: 0 }}
            >
              I work with the javascript react, react native and node frameworks
              to create modern, accessible, and fully responsive websites, web
              applications and mobile apps.
            </motion.p>
          </div>
        </section>

        <motion.section
          className={HeroStyle.sectionTwo}
          initial={{ opacity: 0, y: 100 }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            type: "spring",
            delay: 0.9,
          }}
          animate={{ opacity: 1, y: 0 }}
        >
          <img
            src="/hero_illustration.gif"
            alt="hero illustration"
            loading="eager"
          />
        </motion.section>
      </main>
    </ContainerSmall>
  );
};

export default Hero;
