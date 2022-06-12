/* eslint-disable @next/next/no-img-element */
import { useEffect } from "react";
import ContainerSmall from "../../../component/Container/Container";
import ProjectsStyle from "../../../styles/Projects.module.css";
import projectsData from "../../api/ProjectData";
import { BsCodeSlash } from "react-icons/bs";
import { GrView } from "react-icons/gr";
import { Link } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Projects = () => {
  const { ref, inView } = useInView();
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        translateX: 0,
        translateY: 0,
        opacity: 1,
      });
    }

    if (!inView) {
      animation.start({
        translateX: -100,
        translateY: -100,
        opacity: 0,
      });
    }
  }, [inView, animation]);

  return (
    <ContainerSmall>
      <main ref={ref} className={ProjectsStyle.projects_main}>
        <h1>Projects</h1>

        <section className={ProjectsStyle.projects_section}>
          {projectsData.map((project, index) => {
            return (
              <motion.div
                key={project.id}
                className={ProjectsStyle.projectContainer}
                animate={animation}
                transition={{ duration: 1, delay: index * 0.2 }}
              >
                <div className={ProjectsStyle.top}>
                  <h2>{project.name}</h2>
                  {project.status === "completed" ? (
                    <span
                      style={{
                        padding: "5px",
                        border: "1px solid rgb(87, 173, 1)",
                        borderRadius: "5px",
                        backgroundColor: "rgba(114, 209, 19, 0.644)",
                        fontWeight: "600",
                      }}
                    >
                      {project.status}
                    </span>
                  ) : (
                    <span
                      style={{
                        padding: "5px",
                        border: "1px solid rgb(173, 1, 10)",
                        borderRadius: "5px",
                        backgroundColor: "rgba(173, 1, 10, 0.548)",
                        fontWeight: "600",
                      }}
                    >
                      In progress
                    </span>
                  )}
                </div>

                <div className={ProjectsStyle.middle}>
                  <p>{project.description}</p>

                  <aside>
                    {project.status === "completed" && (
                      <motion.button
                        className={ProjectsStyle.iconBtn}
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.8 }}
                      >
                        <Link href={project.github}>
                          <BsCodeSlash className={ProjectsStyle.icon} />
                        </Link>
                      </motion.button>
                    )}

                    {project.status === "completed" && (
                      <motion.button
                        className={ProjectsStyle.iconBtn}
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.8 }}
                      >
                        <Link href={project.liveView}>
                          <GrView className={ProjectsStyle.icon} />
                        </Link>
                      </motion.button>
                    )}
                  </aside>
                </div>

                <div>
                  <h3
                    style={{
                      fontSize: "clamp(1.1rem, 3.8vw, 1.2rem)",
                      fontWeight: "600",
                      marginBottom: ".5rem",
                    }}
                  >
                    Built using
                  </h3>
                  <div className={ProjectsStyle.bottom}>
                    {project.tools.map((tool) => {
                      return (
                        <span key={tool} className={ProjectsStyle.tools}>
                          {tool}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </section>
      </main>
    </ContainerSmall>
  );
};

export default Projects;
