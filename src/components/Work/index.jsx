import React, { useState } from "react";
import Loader from "react-loaders";
// assets
import todoImage from "../../assets/images/todo.webp";
import bookKeepingImg from "../../assets/images/booknotes-1.webp";
import keeperImg from "../../assets/images/keeper-2.webp";
import blogDjangoImg from "../../assets/images/blog-django.webp";
import blogFlaskImg from "../../assets/images/blog-flask.webp";
// components
import AnimateLetters from "../AnimateLetters";

function Work() {
  const [letterClass, setLetterClass] = useState("text-animate");
  const projects = ["M", "y", " ", "P", "r", "o", "j", "e", "c", "t", "s"];

  setTimeout(() => {
    setLetterClass("text-animate-hover");
  }, 3000);

  return (
    <>
      <div className="container work-page">
        <div className="heading-con">
          <h1>
            <AnimateLetters letterClass={letterClass} strArray={projects} idx={15} />
          </h1>
        </div>

        <div className="projects-con">
          <div className="card">
            <div className="card-image">
              <img src={todoImage} alt="todo web app" />
            </div>

            <div className="card-text">
              <h2>Todo Web App</h2>
              <p>Made of HTML5, CSS3 and plain JS.</p>
              <a href="https://arfeloreed.github.io/" target="_blank" rel="noreferrer">
                See demo.
              </a>
            </div>
          </div>

          <div className="card">
            <div className="card-image">
              <img src={bookKeepingImg} alt="booknotes web app" />
            </div>

            <div className="card-text">
              <h2>Booknotes Web App</h2>
              <p>Made with NodeJs and EJS templating.</p>
              <a
                href="https://booknotes-i03b.onrender.com/"
                target="_blank"
                rel="noreferrer"
              >
                See demo.
              </a>
            </div>
          </div>

          <div className="card">
            <div className="card-image">
              <img src={keeperImg} alt="keeper web app" />
            </div>

            <div className="card-text">
              <h2>Keeper Web App</h2>
              <p>Made with ReactJs and NodeJs.</p>
              <a
                href="https://keeper-ol3w.onrender.com/"
                target="_blank"
                rel="noreferrer"
              >
                See demo.
              </a>
            </div>
          </div>

          <div className="card">
            <div className="card-image">
              <img src={blogDjangoImg} alt="blog web app" />
            </div>

            <div className="card-text">
              <h2>Blog Web App</h2>
              <p>Made with Django and Jinja templating.</p>
              <a
                href="https://arfeloreed.pythonanywhere.com/"
                target="_blank"
                rel="noreferrer"
              >
                See demo.
              </a>
            </div>
          </div>

          <div className="card">
            <div className="card-image">
              <img src={blogFlaskImg} alt="blog web app" />
            </div>

            <div className="card-text">
              <h2>Blog Web App</h2>
              <p>Made with Flask and Jinja templating.</p>
              <a
                href="https://reedtorz.pythonanywhere.com/"
                target="_blank"
                rel="noreferrer"
              >
                See demo.
              </a>
            </div>
          </div>
        </div>
      </div>

      <Loader type="pacman" />
    </>
  );
}

export default Work;
