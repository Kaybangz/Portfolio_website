/* eslint-disable @next/next/no-img-element */
// eslint-disable-next-line @next/next/no-img-element
import ContainerSmall from "../../../component/ContainerSmall/ContainerSmall";
import ProjectsStyle from "../../../styles/Projects.module.css";
import projectsData from "../../api/ProjectData";
import { BsCodeSlash } from "react-icons/bs";
import { GrView } from "react-icons/gr";
import { Link } from "@chakra-ui/react";

const Projects = () => {
  return (
    <ContainerSmall>
      <main className={ProjectsStyle.projects_main}>
        <h1>Projects</h1>

        <section className={ProjectsStyle.projects_section}>
          {projectsData.map((project) => {
            return (
              <div key={project.id} className={ProjectsStyle.projectContainer}>
                <div className={ProjectsStyle.top}>
                  <h2>{project.name}</h2>
                  {project.status === "completed" ? (
                    <span
                      style={{
                        padding: "5px",
                        border: "1px solid rgb(87, 173, 1)",
                        borderRadius: "5px",
                        backgroundColor: "rgba(114, 209, 19, 0.295)",
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
                        backgroundColor: "rgba(173, 1, 10, 0.219)",
                        fontWeight: "600",
                      }}
                    >
                      pending
                    </span>
                  )}
                </div>

                
                <img
                  src={project.image}
                  alt="project image"
                  className={ProjectsStyle.projects_img}
                  loading="lazy"
                />
                <div className={ProjectsStyle.middle}>
                  <p>{project.description}</p>

                  <aside>
                    {project.status === "completed" && (
                      <Link href={project.github}>
                        <BsCodeSlash className={ProjectsStyle.icons} />
                      </Link>
                    )}

                    {project.status === "completed" && (
                      <Link href={project.liveView}>
                        <GrView className={ProjectsStyle.icons} />
                      </Link>
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
              </div>
            );
          })}
        </section>
      </main>
    </ContainerSmall>
  );
};

export default Projects;
