import React from 'react';
/** @jsxImportSource @emotion/core */
import { css } from '@emotion/core';

const HeaderStyle = css`
  font-size: 1.6rem;
  font-family: 'Pacifico';
  text-align: center;
  padding: 10px 20px;
  color: #424242;
  box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.4);
  position: sticky;
  top: 0;
  background-color: whitesmoke;
  z-index: 10;
`;

function Header() {
  return <header css={HeaderStyle}>This is K-unsplash</header>;
}

export default Header;
