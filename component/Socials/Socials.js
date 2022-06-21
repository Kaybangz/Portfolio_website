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

      <motion.a href="/devcalebs_resume.pdf" download transition={{ duration: 2, ease: "easeInOut", delay: 0.8, yoyo: 5 }}
          animate={{ rotate: 360 }}>
        <button
          
        >
          <BsFillFileEarmarkTextFill
            className={SocialsStyle.socials_main_icons}
          />
        </button>
      </motion.a>


      <motion.a
          href="https://github.com/Kaybangz"
          target="_blank"
          rel="noopener noreferrer"
          transition={{ duration: 2, ease: "easeInOut", delay: 1, yoyo: 5 }}
        animate={{ rotate: 360 }}
        >
      <button>
        
          <AiFillGithub className={SocialsStyle.socials_main_icons} />
        
      </button>
      </motion.a>


      <motion.a
          href="https://www.linkedin.com/in/igcaleb/"
          target="_blank"
          rel="noopener noreferrer"
          transition={{ duration: 2, ease: "easeInOut", delay: 1.2, yoyo: 5 }}
        animate={{ rotate: 360 }}
        >
      <button
      >
        
          <AiFillLinkedin className={SocialsStyle.socials_main_icons} />
        
      </button>
      </motion.a>


      <motion.a
          href="https://twitter.com/IgKaybangz"
          target="_blank"
          rel="noopener noreferrer"
          transition={{ duration: 2, ease: "easeInOut", delay: 1.4, yoyo: 5 }}
        animate={{ rotate: 360 }}
        >
      <button
        
      >
        
          <AiFillTwitterCircle className={SocialsStyle.socials_main_icons} />
        
      </button>
      </motion.a>

      <motion.a
          href="mailto:devCaleb96@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          transition={{ duration: 2, ease: "easeInOut", delay: 1.6, yoyo: 5 }}
        animate={{ rotate: 360 }}
        >
      <button
        
      >
        
          <SiGmail className={SocialsStyle.socials_main_icons} />
        
      </button>
      </motion.a>
    </main>
  );
};

export default Socials;
