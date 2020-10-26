import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import { HeroArticleWrapper, HeroArticleUnderline } from "../elements/HeroElements"
import SocialLinks from "../constants/socialLinks"

const HeroArticle = () => {
    return (
        <HeroArticleWrapper>
            <div>
                <h1>John's Portfolio</h1>
                <HeroArticleUnderline></HeroArticleUnderline>
                <h4>Elev på TUC</h4>
                - 🔭 Har precis påbörjat en kurs inom Javascript! 
                <br />
                - 🌱 Testar mig även fram lite mer med .Nets MVC Framework! 
                <br />
                - 🤔 I’m looking for help with anything frontend :)
                <br />
                - 💬 Fun fact: Älskar onödigt stark mat. 
                <br />
                - 😄 Letar för tillfället en LIA-Plats! 
                <br /> {" "}

                <br />
                - 📫 Klicka på länken nedan för att konakta mig! :)
                <br />
                <Link to="/contact" className="btn">
                  kontakta mig
                </Link>
                <SocialLinks />
            </div>
        </HeroArticleWrapper>
    )
  }
  export default HeroArticle