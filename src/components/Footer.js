import React from "react"
import footerStyles from "./layout.module.scss"

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      © Shian Poon, {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </footer>
  )
}

export default Footer
