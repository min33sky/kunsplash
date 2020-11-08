import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  font-size: 1.6rem;
  font-family: 'Pacifico';
  font-weight: bold;
  text-align: center;
  padding: 10px 20px;
  color: #424242;
  box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.4);2
  position: sticky;

  top: 0;
  background-color: whitesmoke;
  z-index: 10;
`;

/**
 * 헤더 컴포넌트
 */
function Header() {
  return <HeaderWrapper>K-unsplash</HeaderWrapper>;
}

export default Header;
