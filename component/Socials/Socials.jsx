import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import { BsFillFileEarmarkTextFill } from "react-icons/bs";
import { motion, Variants } from "framer-motion";
import { Box, keyframes } from "@chakra-ui/react";
import SocialsStyle from "../../styles/Socials.module.css";

const animationKeyframes = keyframes`
  0% { transform: scale(1) }
  50% { transform: scale(1.1)}
  100% { transform: scale(1) }
`;

const animation = `${animationKeyframes} 2s ease-in-out infinite`;
const animation2 = `${animationKeyframes} 3s ease-in-out infinite`;
const animation3 = `${animationKeyframes} 4s ease-in-out infinite`;
const animation4 = `${animationKeyframes} 5s ease-in-out infinite`;
const animation5 = `${animationKeyframes} 6s ease-in-out infinite`;

const Socials = () => {
  return (
    <main className={SocialsStyle.socials_main}>
      <Box
        className={SocialsStyle.button}
        as={motion.div}
        animation={animation}
      >
        <a href="#" target="_blank" rel="noopener noreferrer"></a>
        <BsFillFileEarmarkTextFill
          className={SocialsStyle.socials_main_icons}
        />
      </Box>

      <Box className={SocialsStyle.button} as={motion.div}
        animation={animation2}>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <AiFillGithub className={SocialsStyle.socials_main_icons} />
        </a>
      </Box>

      <Box className={SocialsStyle.button} as={motion.div}
        animation={animation3}>
        <a
          href="https://www.linkedin.com/in/igcaleb/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillLinkedin className={SocialsStyle.socials_main_icons} />
        </a>
      </Box>

      <Box className={SocialsStyle.button} as={motion.div}
        animation={animation4}>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <AiFillTwitterCircle className={SocialsStyle.socials_main_icons} />
        </a>
      </Box>

      <Box className={SocialsStyle.button} as={motion.div}
        animation={animation5}>
        <a href="#" target="_blank" rel="noopener noreferrer"></a>
        <SiGmail className={SocialsStyle.socials_main_icons} />
      </Box>
    </main>
  );
};

export default Socials;
