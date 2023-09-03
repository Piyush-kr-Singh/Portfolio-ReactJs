import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineArrowUp,
} from "react-icons/ai";
import mine from '../assets/mine.jpg';

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={mine}
          alt="Founder"
        />

        <h2>Piyush Kr. Singh</h2>
        <p>Consistency is the key to Success.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://www.linkedin.com/in/piyush-kumar-singh-902036248/" target={"blank"}>
            <AiFillLinkedin />
          </a>
          <a href="https://www.instagram.com/__singh_piyush__/" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://github.com/Piyush-kr-Singh" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
