import "../Home/style.css";
import React from "react";

export default function Home() {
  const projects = [
    {
      path: "/TodoList",
      title: "To Do List",
      description: "Lista de taefas feita utilizando react e use state hook",
    },
    {
      path: "/SkyBartender",
      title: "Sky Bartender",
      description: "Lista de taefas feita utilizando react e array",
    },
  ];
  return (
    <div className="casa">
      <div className="cabeça">
        <p>Hello, I'm</p>
        <h1>Vinicius Almeida</h1>
        <p>FrontEnd Developer</p>
      </div>
      <div className="experience">
        <div className="frontEndSkills">
          <div className="titleExperience">
            <p>FrontEnd Skills</p>
          </div>
          <div className="skills">
            <p>CSS</p>
            <p>HTML</p>
            <p>JavaScript</p>
            <p>React</p>
            <p>Git</p>
          </div>
        </div>
        <div className="otherSkills">
          <div className="titleExperience">
            <p>Other Skills</p>
          </div>
          <div className="skills">
            <p>C++</p>
          </div>
        </div>
      </div>
      <div className="array">
        <div>
          <h1 className="titleProject">Projects</h1>
          <div className="allProjects">
            {projects.map((project) => {
              return (
                <a className="project" href={project.path}>
                  <div className="projectBackground">
                    <div>{project.title}</div>
                    <div className>{project.description}</div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
      <div>
        <h1>oi</h1>
      </div>
    </div>
  );
}
// https://api.whatsapp.com/send?phone=5519992559375
// https://www.instagram.com/vini_celio/
