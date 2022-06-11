import ContainerSmall from "../../../component/ContainerSmall/ContainerSmall";
import SkillsStyle from "../../../styles/Skills.module.css";
import {SiJavascript, SiTypescript, SiNextdotjs, SiNodemon, SiMongodb, SiSolidity, SiWeb3Dotjs, SiRedux} from "react-icons/si";
import {FaReact} from "react-icons/fa"
import {TbBrandReactNative} from "react-icons/tb";
import {IoLogoNodejs} from 'react-icons/io';

const Skills = () => {
  return (
    <ContainerSmall>
      <main className={SkillsStyle.skills_main}>
        <h1>Tech Skills</h1>

        <section className={SkillsStyle.skills_section}>
          <div>
            <h2>Proficient in</h2>
            <p><SiJavascript/>Javascript</p>
            <p><SiTypescript/>Typescript</p>
            <p><FaReact/>React js</p>
            <p><SiNextdotjs/>Next js</p>
            <p><SiRedux/>Redux</p>
            <p><TbBrandReactNative/>React Native</p>
          </div>

          <div>
            <h2>Currently learning</h2>
            <p><IoLogoNodejs/>Node js</p>
            <p><SiNodemon/>Nodemon</p>
            <p><SiMongodb/>MongoDB</p>
          </div>

          <div>
            <h2>Will learn in the future</h2>
            <p><SiSolidity/>Solidity</p>
            <p><SiWeb3Dotjs/>Web3 js</p>
          </div>
        </section>
      </main>
    </ContainerSmall>
  );
};

export default Skills;
