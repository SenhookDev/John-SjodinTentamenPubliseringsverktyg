import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"
import { ProjectWrapper, ProjectInfo } from "../elements/ProjectElements"
import Title from "./Title"

const Project = ({ description, title, github, stack, url, image, index }) => {
  return (


    <ProjectWrapper>
    {/* <article className="project"> */}
      {/* if image is not supplied, instead of breaking, dont show any image */}
      {image && (
        <Image fluid={image.childImageSharp.fluid} className="project-img" />
      )}
      <ProjectInfo>
        <span className="project-number">0{index + 1}.</span>
        {/* if title is not supplied, set a defualt title !!! osäker varför denna inte funkar som den ska !!!*/}
        <h3>{title || "project"}</h3>
        <p className="project-description">{description}</p>
        <div className="project-stack">
          {stack.map(item => {
            return <span key={item.id}>{item.title}</span>
          })}
        </div>
        <div className="project-links">
          <a href={github}>
            <FaGithubSquare className="project-icon" />
          </a>
          <a href={url}>
            <FaShareSquare className="project-icon" />
          </a>
        </div>
        </ProjectInfo>
    {/* </article> */}
    </ProjectWrapper>
  )
}

/*if you for example forget to set these fields in strapi,
so if you forget to give them values, you will get a error in your console
*/
Project.propTypes = {
  title: PropTypes.string.isRequired,
  git: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  stack: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Project
