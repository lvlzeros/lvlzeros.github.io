import React from "react"
import aboutStyles from "../components/about.module.scss"
import emailIcon from "../images/email.png"
import githubIcon from "../images/github.png"
import linkedInIcon from "../images/linkedin.png"
import twitterIcon from "../images/twitter.png"
import mediumIcon from "../images/medium.png"

const Contact = () => {
  return (
    <ul className={aboutStyles.contact}>
      <li>
        <a
          href="https://github.com/lvlzeros"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={githubIcon} alt="Github" className={aboutStyles.tinyIcon} />
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/lvlzeros"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={twitterIcon}
            alt="Twitter"
            className={aboutStyles.tinyIcon}
          />
        </a>
      </li>
      <li>
        <a
          href="https://medium.com/@lvlzeros"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={mediumIcon} alt="Medium" className={aboutStyles.tinyIcon} />
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/poon-cheehim/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={linkedInIcon}
            alt="LinkedIn"
            className={aboutStyles.tinyIcon}
          />
        </a>
      </li>
      <li>
        <a
          href="mailto:lvlzeros@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={emailIcon} alt="Email" className={aboutStyles.tinyIcon} />
        </a>
      </li>
    </ul>
  )
}

export default Contact
