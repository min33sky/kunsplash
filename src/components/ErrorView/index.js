import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 55px);
  font-size: 1.5rem;
  color: red;
  font-size: 1.4rem;
`;

/**
 * 에러 화면 컴포넌트
 */
function ErrorView() {
  return (
    <Wrapper>
      <p>Sorry. Something went wrong.</p>
    </Wrapper>
  );
}

export default ErrorView;
