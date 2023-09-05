import React from "react";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs";
import me from "../assets/logo.png";

const Home = () => {
  return (
    <div id="home" style={{ marginBottom: "180px" }}>
      <section>
        <div>
          <h1>
            Hi, I Am <br /> Piyush Kr. Singh
          </h1>

          <Typewriter
            options={{
              strings: ["A Developer", "A Designer", "A Problem Solver"],
              autoStart: true,
              loop: true,
              cursor: "",
              wrapperClassName: "typewriterpara",
            }}
          />

          <div>
            <a href="mailto:raunaksingh4099@gmail.com">Hire Me</a>
            <a href="#work">
              Projects <BsArrowUpRight />
            </a>
          </div>

          <article>
            <p>10+</p>
            <span>Team Members</span>
          </article>

          <aside>
            <article>
              <p>20+</p>
              <span>Projects Done</span>
            </article>

            <article data-special>
              <p>Contact</p>
              <span>raunaksingh4099@gmail.com</span>
            </article>
          </aside>
        </div>
      </section>
      <section>
        <img src={me} alt="Piyush" />
      </section>
      <BsChevronDown />
    </div>
  );
};

export default Home;
