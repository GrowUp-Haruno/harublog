// import Img from 'gatsby-image'
import * as React from 'react'
import styled from 'styled-components'
import { SFooter } from '../atoms/Layout/Footer'
import { Header } from '../atoms/Layout/Header'

export const DefaultLayout = ({ children, pageInfo, imageData }) => {
  console.log(imageData)
  return (
    <SDiv>
      <Header />
      {/* <SHero>hero</SHero> */}
        {/* <Img fluid={ imageData.file.childImageSharp.fluid} alt=""/> */}
      {/* <SLeft>left</SLeft>
      <SMain>
        {children}
      </SMain>
      <SRight>right</SRight> */}
      <SFooter />

    </SDiv>
  )
}

const SDiv = styled.div`
  font-size: 1em;
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  display: grid;
  grid-template:
    '..... SHeader  SHeader  SHeader ......' 60px
    /* 'SHero SHero    SHero    SHero   SHero' 100px
    '..... SLeft    SMain    SRight  .....' 1fr */
    '..... SFooter  SFooter  SFooter .....' 100px
    / auto 200px    auto     200px   auto;
`;

const SHero = styled.div`
  grid-area:SHero;
  background-color: #ffa08c;
`

const SLeft = styled.div`
  grid-area:SLeft;
  background-color: #ffff64;
`

const SRight = styled.div`
  grid-area:SRight;
background-color: #ffff64;
`

const SMain = styled.div`
  grid-area:SMain;
background-color: #1847c7;
`
