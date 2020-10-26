import styled from "styled-components"

export const BlogsWrapper = styled.section`
padding: 5rem 0;
section a{
  display: block;
  margin: 0 auto;
  width: 12rem;
  text-align: center;
    margin-top: 3rem;
}
`

export const BlogsArticles = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(368px, 1fr));
    column-gap: 2rem;
    width: 90vw;
    margin: 0 auto;
    max-width: 1170px;

    @media screen and (min-width: 992px) {
    width: 95vw;
    }
`

