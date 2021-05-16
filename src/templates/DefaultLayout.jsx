import Img from 'gatsby-image'
import * as React from 'react'
import styled from 'styled-components'
import { Header } from '../atoms/Layout/Header'

export const DefaultLayout = ({ children, pageInfo, imageData }) => {
  console.log(imageData)
  return (
    <SDiv>
      <Header pageInfo={pageInfo} />
      <SHero>
        <Img fluid={ imageData.file.childImageSharp.fluid} alt=""/>
      </SHero>
      {children}
    </SDiv>
  )
}

const SDiv = styled.div`
  width:100%;
  height:100vh;
  display:flex;
`
const SHero = styled.figure`
  width:100%;
  height:0;
  object-fit:cover;
`