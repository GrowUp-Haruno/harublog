import { graphql } from 'gatsby';
import * as React from 'react';
import { useState } from 'react';
import { DefaultLayout } from '../templates/DefaultLayout';
// markup
const IndexPage = ({ data }) => {
  const [pageInfo, setPageInfo] = useState('Home');
  return <DefaultLayout pageInfo={pageInfo} imageData={data}></DefaultLayout>;
};

export const query = graphql`
  query MyQuery {
    file(relativePath: { eq: "homeHero.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 4032) {
          base64
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
        }
      }
    }
  }
`;

export default IndexPage;
