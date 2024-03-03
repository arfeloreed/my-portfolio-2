import React, { useState } from "react";
import Loader from "react-loaders";
// assets
import myLogo from "../../assets/images/my-brand";
import myPic from "../../assets/images/mypic .webp";
// components
import AnimateLetters from "../AnimateLetters";

function Home() {
  const [letterClass, setLetterClass] = useState("text-animate");
  const nameArray = [" ", "R", "e", "e", "d"];
  const jobArray = [
    "F",
    "u",
    "l",
    "l",
    " ",
    "s",
    "t",
    "a",
    "c",
    "k",
    " ",
    "d",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "e",
    "r",
    ".",
  ];

  setTimeout(() => {
    setLetterClass("text-animate-hover");
  }, 5000);

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <AnimateLetters letterClass={letterClass} strArray={nameArray} idx={15} />
            <br />
            <AnimateLetters letterClass={letterClass} strArray={jobArray} idx={19} />
          </h1>

          <h2>PERN Full Stack Developer/ JavaScript/ Python/ Django</h2>
        </div>

        <div className="images-con">
          <div className="brand-con">
            <img src={myLogo} alt="brand logo" />
          </div>
          <img src={myPic} alt="Reed's pic" className="profile-pic" />
        </div>
      </div>

      <Loader type="pacman" />
    </>
  );
}

export default Home;
