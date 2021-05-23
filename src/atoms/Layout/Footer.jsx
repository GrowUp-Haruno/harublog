import { Link } from 'gatsby';
import * as React from 'react';
import { Children } from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <>
      <SContainer>
        <p>footer</p>
      </SContainer>
    </>
  )
};

const SContainer = styled.div`
  background-color:#cfcfad;
  grid-area: SFooter;
  `
export const SFooter = styled(Footer)`

`