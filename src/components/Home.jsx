import React, { useRef } from "react";
import { animate, motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs";
import me from "../assets/logo.png";

const Home = ({ ratio }) => {
  const clientCount = useRef(null);
  const projectCount = useRef(null);

  const animationClientsCount = () => {
    animate(0, 100, {
      duration: 1,
      onUpdate: (v) => {
        if (clientCount.current) {
          clientCount.current.textContent = v.toFixed();
        }
      },
    });
  };
  const animationProjectsCount = () => {
    animate(0, 500, {
      duration: 1,
      onUpdate: (v) => {
        if (projectCount.current) {
          projectCount.current.textContent = v.toFixed();
        }
      },
    });
  };

  const animations = {
    h1: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
    },
  };
  return (
    <div id="home" style={{marginBottom : "180px"}}>
      <section>
        <div>
          <motion.h1 {...animations.h1}>
            Hi, I Am <br /> Piyush Kr. Singh
          </motion.h1>

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
            <p>
              10+
              {ratio < 1 && (
                <motion.span
                  whileInView={animationClientsCount}
                  ref={clientCount}
                ></motion.span>
              )}
            </p>
            <span>Team Members</span>
          </article>

          <aside>
            <article>
              <p>
              20+
                {ratio < 1 && (
                  <motion.span
                    ref={projectCount}
                    whileInView={animationProjectsCount}
                  >
                    +
                  </motion.span>
                )}
              </p>
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
