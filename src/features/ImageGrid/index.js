import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ErrorView from '../../components/ErrorView';
import Loader from '../../components/Loader';
import { unsplashSelector, unsplashAction } from './slice';
import { Content, Img, ImgWrapper, LastItem, Section } from './style';
import { useInfinityScroll } from './../../hooks';

function ImageGrid() {
  const dispatch = useDispatch();

  const { isLoading, images, error } = useSelector(unsplashSelector.all);
  const target = useRef(null);

  // 이미지 불러오기 (무한 스크롤링)
  useInfinityScroll({
    target,
    onInterSect: ([{ isIntersecting }]) => {
      /**
       * ? 타겟이 뷰포트에 노출되고
       * ? 이미지가 로딩중이 아닐 때 API 요청
       */
      if (isIntersecting && !isLoading) {
        dispatch(unsplashAction.load());
      }
    },
  });

  if (error) {
    return <ErrorView />;
  }

  return (
    <Content>
      <Section>
        {images.map((image) => (
          <ImgWrapper key={image.id} className={`item-${Math.ceil(image.height / image.width)}`}>
            <Img src={image.urls.small} alt={image.user.username} />
          </ImgWrapper>
        ))}
      </Section>
      <LastItem ref={target}>
        <Loader size='s' />
      </LastItem>
    </Content>
  );
}

export default ImageGrid;
