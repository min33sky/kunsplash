import React from 'react';
import styled from 'styled-components';

const HeaderDiv = styled.header`
  font-size: 1.6rem;
  font-family: 'Pacifico';
  text-align: center;
  padding: 10px 20px;
  color: #424242;
  box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.4);2
  position: sticky;
  top: 0;
  background-color: whitesmoke;
  z-index: 10;
`;

function Header() {
  return <HeaderDiv>This is K-unsplash</HeaderDiv>;
}

export default Header;
