import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faUser, faSuitcase, faBars } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faXTwitter,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
// assets
import myLogo from "../../assets/images/my-brand";

function Sidebar() {
  return (
    <div className="navbar">
      <Link className="logo" to="/">
        <img src={myLogo} alt="brand logo" />
      </Link>

      <nav>
        <NavLink to="/">
          <FontAwesomeIcon icon={faHouse} />
        </NavLink>
        <NavLink to="/about">
          <FontAwesomeIcon icon={faUser} className="about-link" />
        </NavLink>
        <NavLink to="/work">
          <FontAwesomeIcon icon={faSuitcase} className="work-link" />
        </NavLink>
      </nav>

      <ul>
        <li>
          <a href="https://www.instagram.com/reedtorz/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faInstagram} className="anchor-icon" />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/ReedTorralba" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faXTwitter} className="anchor-icon" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/arfeloreed/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} className="anchor-icon" />
          </a>
        </li>
        <li>
          <a href="https://github.com/arfeloreed" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} className="anchor-icon" />
          </a>
        </li>
      </ul>

      <FontAwesomeIcon icon={faBars} size="2x" className="hamburger-icon" />
    </div>
  );
}

export default Sidebar;
