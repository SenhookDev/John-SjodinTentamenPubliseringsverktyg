import styled from "styled-components"

export const BlogPage = styled.section`
  background: ${props => props.theme.colors.clrgrey10};
  min-height: calc(100vh - 5rem - 9rem);
`

export const BlogCard = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  padding: 1.5rem 1rem;
  h4 {
    color: ${props => props.theme.colors.clrgrey1};
  }
  `

export const BlogTemplate = styled.section`
  background: ${props => props.theme.colors.clrgrey10};
  min-height: calc(100vh - 5rem - 9rem);
  padding: 5rem 0;

div{
  width: 90vw;
  margin: 0 auto;
  max-width: 1170px;
}

h1, h2 {
  text-align: center;
}

ul {
  margin-top: 2rem;
  display: inline-block;
}
ul li {
  background: ${props => props.theme.colors.clrgrey9};
  color: ${props => props.theme.colors.clrgrey5};
  padding: 0.5rem 1rem;
  margin: 1rem 0;
  text-transform: uppercase;
}

blockquote {
  background: ${props => props.theme.colors.clrprimary9};
  border-radius: ${props => props.theme.borders.radius};
  padding: 1rem;
  line-height: 2;
  color: ${props => props.theme.colors.clrprimary5};
  margin: 2rem 0;
}

pre {
  background: #222;
  color: yellow;
  overflow-x: scroll;
  padding: 1rem 1.5rem;
  border-radius: ${props => props.theme.borders.radius};
}
img {
  width: 15rem;
  height: 15rem;
  margin: 3rem 0;
}

@media screen and (min-width: 992px) {
    div {
      width: 95vw;
    }
}
`

export const BlogFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
p {
  margin-bottom: 0;
  font-weight: bold;
  color: ${props => props.theme.colors.clrgrey5};
}
p:first-of-type {
  display: inline-block;
  background: ${props => props.theme.colors.clrgrey9};
  color: ${props => props.theme.colors.clrgrey5};
  margin-right: 0.5rem;
  padding: 0.25rem 0.5rem;
  border-radius: ${props => props.theme.borders.radius};
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 0.85rem;
}
`