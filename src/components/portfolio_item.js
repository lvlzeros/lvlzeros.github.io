import React from "react"
import portfolioStyles from "./portfolio.module.scss"

const PortfolioItem = ({
  style,
  title,
  description,
  techStack,
  featuredImg,
  featuredImgDesc,
  externalLink,
}) => {
  return (
    <div className={portfolioStyles.portfolioItemContainer}>
      {style === "large" ? (
        externalLink ? (
          <a href={externalLink} target="_blank" rel="noopener noreferrer">
            <img
              src={require(`../images${String(featuredImg)}`)}
              alt={featuredImgDesc}
              className={portfolioStyles.hoverableImg}
            />
          </a>
        ) : (
          <img
            src={require(`../images${String(featuredImg)}`)}
            alt={featuredImgDesc}
          />
        )
      ) : (
        <></>
      )}

      {externalLink ? (
        <a href={externalLink} target="_blank" rel="noopener noreferrer">
          <h2>{title}</h2>
        </a>
      ) : (
        <h2>{title}</h2>
      )}
      <div
        style={{
          marginLeft: "2%",
        }}
      >
        <p>{description}</p>
        <p>
          <b>Tech Stack: </b>
          {techStack}
        </p>
      </div>
    </div>
  )
}

export default PortfolioItem
