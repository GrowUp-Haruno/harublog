import { Link } from 'gatsby';
import * as React from 'react';
import styled from 'styled-components';

export const Header = ({ pageInfo }) => {
  const naviItem = [
    { link: '/', name: 'Home' },
    { link: '/Blog', name: 'Blog' },
    { link: '/Profile', name: 'Profile' },
  ];
  return (
    <SHeader>
      <SP>haruBlog</SP>
      <div>
        {naviItem.map(({link, name}) => {
          return pageInfo === name ? (
            <SLinkPrimary to={link} key={name}>
              {name}
            </SLinkPrimary>
          ) : (
            <SLinkSecondary to={link} key={name}>
              {name}
            </SLinkSecondary>
          );
        })}
      </div>

    </SHeader>
  );
};

const SHeader = styled.header`
  background-color: white;
  text-align:center;
  align-items:center;
  height:60px;
  display:flex;
  width: 1024px;
  margin: 0 auto;
`;

const SP = styled.p`
  font-size:x-large;
  text-align:center;
  margin: 0 30px;
`
const SLinkBase = styled(Link)`
  margin: 0 8px;
  padding-bottom: 10px
`;

const SLinkPrimary = styled(SLinkBase)`
  color: #00c2d4;
  border-bottom: 2px solid #00c2d4;
  text-decoration: none;
`;

const SLinkSecondary = styled(SLinkBase)`
  color: black;
  text-decoration: none;
  &:hover{
  border-bottom: 2px solid #00c2d4;
  color: #00c2d4;

  }
`;
