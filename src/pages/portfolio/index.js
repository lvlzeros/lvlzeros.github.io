import React, { Component } from "react"
import Layout from "../../components/layout"
import PortfolioItem from "../../components/portfolio_item"
import SEO from "../../components/seo"
import portfolioStyles from "../../components/portfolio.module.scss"

class PortfolioPage extends Component {
  render() {
    const portfolioItems = [
      {
        style: "large",
        title: "Visit UTP",
        description:
          "Developed and shipped an Android application for Universiti Teknologi PETRONAS for marketing purposes.",
        techStack:
          "Kotlin, Android Jetpack, RxKotlin, Dagger2, Google Maps, Firebase",
        featuredImg: "/visitutp.jpg",
        featuredImgDesc: "Visit UTP Poster",
      },
      {
        style: "large",
        title: "uTippy",
        description:
          "UTP e-Learning on fingertips. An Android application developed to ease UTP students to access e-Learning content on the go.",
        techStack: "Java, RxJava, Dagger2, SQLite3",
        featuredImg: "/utippy.jpg",
        featuredImgDesc: "uTippy Poster",
        externalLink:
          "https://play.google.com/store/apps/details?id=com.levelzeros.utippy&hl=en",
      },
      {
        style: "tiny",
        title: "Console.Log()",
        description: "Personal website built with Gatsby & Netlify CMS.",
        techStack: "React, Gatsby.js, Netlify CMS, Netlify",
        externalLink: "https://lvlzeros.netlify.com/",
      },
      {
        style: "tiny",
        title: "Social Gathering App UI Design",
        description: "Personal website built with Gatsby & Netlify CMS.",
        techStack: "Figma",
        externalLink:
          "https://www.figma.com/proto/tr2OKzBPKF9rN9dy1iDCdf/Duckhead?node-id=0%3A1&scaling=scale-down",
      },
    ]

    return (
      <Layout>
        <SEO title="Portfolio" />
        <div className={portfolioStyles.portfolioContent}>
          <h1>Portfolio</h1>
          {portfolioItems.map(portfolioItem => {
            return (
              <PortfolioItem
                style={portfolioItem.style}
                title={portfolioItem.title}
                description={portfolioItem.description}
                techStack={portfolioItem.techStack}
                featuredImg={portfolioItem.featuredImg}
                featuredImgDesc={portfolioItem.featuredImgDesc}
                externalLink={portfolioItem.externalLink}
              />
            )
          })}
        </div>
      </Layout>
    )
  }
}

export default PortfolioPage
