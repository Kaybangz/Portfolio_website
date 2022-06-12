import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import { BsFillFileEarmarkTextFill } from "react-icons/bs";
import { motion } from "framer-motion";
import SocialsStyle from "../../styles/Socials.module.css";



const Socials = () => {
  return (
    <main className={SocialsStyle.socials_main}>
      <motion.button
        transition={{duration: 2, ease: 'easeInOut', delay: .8, yoyo: 5}}
        animate={{ rotate: 360 }}
      >
        <a href="#" target="_blank" rel="noopener noreferrer"></a>
        <BsFillFileEarmarkTextFill
          className={SocialsStyle.socials_main_icons}
        />
      </motion.button>

      <motion.button
        transition={{duration: 2, ease: 'easeInOut', delay: 1, yoyo: 5}}
        animate={{ rotate: 360 }}
      >
        <a href="https://github.com/Kaybangz" target="_blank" rel="noopener noreferrer">
          <AiFillGithub className={SocialsStyle.socials_main_icons} />
        </a>
      </motion.button>

      <motion.button
        transition={{duration: 2, ease: 'easeInOut', delay: 1.2, yoyo: 5}}
        animate={{ rotate: 360 }}
      >
        <a
          href="https://www.linkedin.com/in/igcaleb/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillLinkedin className={SocialsStyle.socials_main_icons} />
        </a>
      </motion.button>

      <motion.button
        transition={{duration: 2, ease: 'easeInOut', delay: 1.4, yoyo: 5}}
        animate={{ rotate: 360 }}
      >
        <a href="#" target="_blank" rel="noopener noreferrer">
          <AiFillTwitterCircle className={SocialsStyle.socials_main_icons} />
        </a>
      </motion.button>

      <motion.button
        transition={{duration: 2, ease: 'easeInOut', delay: 1.6, yoyo: 5}}
        animate={{ rotate: 360 }}
      >
        <a href="mailto:devCaleb96@gmail.com" target="_blank" rel="noopener noreferrer">
        <SiGmail className={SocialsStyle.socials_main_icons} />
        </a>
      </motion.button>
    </main>
  );
};

export default Socials;