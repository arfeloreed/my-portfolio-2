import React, { useState } from "react";
import Loader from "react-loaders";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPython,
  faCss3Alt,
  faGitAlt,
  faHtml5,
  faSquareJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
// components
import AnimateLetters from "../AnimateLetters";

function About() {
  const [letterClass, setLetterClass] = useState("text-animate");

  setTimeout(() => {
    setLetterClass("text-animate-hover");
  }, 3000);

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimateLetters
              letterClass={letterClass}
              strArray={["A", "b", "o", "u", "t", " ", "m", "e"]}
              idx={15}
            />
          </h1>

          <p>
            I'm a very ambitious Full Stack Developer looking for a role in an established
            IT company with the opportunity to work with the latest technologies on
            challenging and diverse projects.
          </p>
          <p>
            I'm confident, naturally curious, perpetually working on improving my skills
            and loved to handle challenging problems one at a time.
          </p>
          <p>
            In my free time, I'm an avid reader and enjoy losing myself in a good book. I
            also have a passion for baking and love experimenting with new recipes in the
            kitchen. These hobbies have given me a well rounded perspective and help me
            approach each challenge with a creative and problem solving mindset. Whether
            working on a project or whipping up a batch of cookies, I'm always striving to
            bring my best effort and attention to detail.
          </p>
        </div>

        <div className="stage-cube-con">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faSquareJs} color="#efd81d" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faPython} color="#42b4e6" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faReact} color="#5ed4f4" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faHtml5} color="#f06529" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faCss3Alt} color="#28a4d9" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#ec4d28" />
            </div>
          </div>
        </div>
      </div>

      <Loader type="pacman" />
    </>
  );
}

export default About;
