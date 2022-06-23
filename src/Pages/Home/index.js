import "../Home/style.css";
import React, { useRef } from "react";
import { BsWhatsapp } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

export default function Home() {
  const form = useRef();

  const projects = [
    {
      path: "/TodoList",
      title: "To Do List",
      description: "Lista de tarefas feita utilizando react e use state hook",
    },
    {
      path: "/SkyBartender",
      title: "Sky Bartender",
      description:
        "Site para empresa de Bartenders utilizando react e router doon",
    },
  ];

  const sendEmail = (e) => {
    e.preventDefault();
    toast.loading("Sending email...");

    emailjs
      .sendForm(
        "service_zrqdj07",
        "template_d8fvcie",
        form.current,
        "PY4j2p76F0SaJt--5"
      )
      .then(
        (result) => {
          toast.dismiss();
          toast.success("Email sent successfully :)");
          document.getElementById("emailForm").reset();
        },
        (error) => {
          toast.dismiss();
          toast.error("Ops, something went wrong :(");
        }
      );
  };

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
                    <div className="projectTitle">{project.title}</div>
                    <div>{project.description}</div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
      <div className="contact">
        <div>
          <h1 className="titleContact">Contact Me</h1>
        </div>
        <div className="links">
          <div className="link">
            <a
              className="link"
              href="https://api.whatsapp.com/send?phone=5519992559375"
              draggable="false"
            >
              <BsWhatsapp />
            </a>
            <a
              className="link"
              href="https://www.instagram.com/vini_celio/"
              draggable="false"
            >
              <BsInstagram />
            </a>

            <a
              href="mailto:vinihcalmeida@gmail.com"
              className="link"
              draggable="false"
            >
              <AiOutlineMail />
            </a>
          </div>
          <div className="email">
            <form ref={form} id="emailForm" onSubmit={sendEmail}>
              <input
                name="name"
                className="input"
                type="text"
                placeholder="Your Full Name"
                requiered
              />
              <input
                name="email"
                className="input"
                type="email"
                placeholder="Your Email"
                required
              />
              <textarea
                name="message"
                className="messageInput"
                type="text"
                placeholder="Your Message"
                required
              />
              <button type="submit" className="sendEmailButton">
                Send Email
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
