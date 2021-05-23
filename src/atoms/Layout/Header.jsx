import { Link } from 'gatsby';
import * as React from 'react';
import { Children } from 'react';
import styled from 'styled-components';

export const Header = ({ pageInfo,children }) => {
  const naviItem = [
    { link: '/', name: 'Home' },
    { link: '/Blog', name: 'Blog' },
    { link: '/Profile', name: 'Profile' },
  ];
  return (
    <>
    <SContainer>
    {/* <SLogo>haruBlog</SLogo>
    //   <div>
    //     {naviItem.map(({link, name}) => {
    //       return pageInfo === name ? (
    //         <SLinkPrimary to={link} key={name}>
    //           {name}
    //         </SLinkPrimary>
    //       ) : (
    //         <SLinkSecondary to={link} key={name}>
    //           {name}
    //         </SLinkSecondary>
    //       );
    //     })}
    //   </div> */}
    <p>header</p>
    </SContainer>
    </>
  );
};

const SContainer = styled.div`
  grid-area: SHeader;
  background-color: lightgray;
  /* width: 100%; */
  /* margin: 0 auto; */
`;

// const SLogo = styled.p`
//   font-size:x-large;
//   text-align:center;
//   margin: 0 30px;
//   grid-area:SLogo;
// `
// const SLinkBase = styled(Link)`
//   margin: 0 8px;
//   padding-bottom: 10px;
//   grid-area:SLink
// `;

// const SLinkPrimary = styled(SLinkBase)`
//   color: #00c2d4;
//   border-bottom: 2px solid #00c2d4;
//   text-decoration: none;
// `;

// const SLinkSecondary = styled(SLinkBase)`
//   color: black;
//   text-decoration: none;
//   &:hover{
//   border-bottom: 2px solid #00c2d4;
//   color: #00c2d4;
//   }
// `;
