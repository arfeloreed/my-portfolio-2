import React from "react";
import { Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faXTwitter,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
// components
import Sidebar from "../Sidebar";

function Layout() {
  return (
    <>
      <Sidebar />

      <div className="page">
        <span className="tags top-tags">&lt;body&gt;</span>

        <Outlet />

        <span className="tags bottom-tags">
          &lt;/body&gt;
          <br />
          <span className="bottom-tag-html">&lt;/html&gt;</span>
        </span>

        <ul className="footer">
          <li>
            <a
              href="https://www.instagram.com/reedtorz/"
              target="_blank"
              rel="noreferrer"
            >
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
      </div>
    </>
  );
}

export default Layout;
