import React from "react"
import { ButtonWrapper } from "../elements/ButtonElements"

export const Button = ({ children, href }) => {
  // Note the link, dont forget to add "/" + before href in the ButtonWrapper
  return <ButtonWrapper to={"/" + href}>{children}</ButtonWrapper>
}