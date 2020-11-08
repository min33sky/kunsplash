import styled from 'styled-components';

export const Content = styled.div`
  max-width: 1200px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* 아래 지울꺼야 */
  /* border: 2px solid silver; */
`;

export const Error = styled.div`
  background-color: lightsalmon;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid tomato;
`;

export const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  padding: 25px;
  grid-gap: 25px;
  grid-auto-flow: dense;
  align-items: stretch;
  width: 100%;
`;

export const ImgWrapper = styled.div.attrs((props) => ({
  className: props.className,
}))`
  position: relative;
  cursor: pointer;

  &.item-1 {
    grid-row: span 1;
  }

  &.item-2 {
    grid-row: span 2;
  }

  &.item-3 {
    grid-row: span 3;
  }

  &.item-4 {
    grid-row: span 4;
  }

  &.item-5 {
    grid-row: span 5;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 6px;
`;

export const LastItem = styled.div`
  width: 100%;
  height: 100px;
`;
