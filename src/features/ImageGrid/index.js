import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ErrorView from '../../components/ErrorView';
import Loader from '../../components/Loader';
import { unsplashSelector, unsplashAction } from './slice';
import { Content, Img, ImgWrapper, LastItem, Section } from './style';
import { useInfinityScroll } from './../../hooks';

function ImageGrid() {
  const dispatch = useDispatch();

  const { isLoading, images, error } = useSelector(unsplashSelector.all);
  const target = useRef();

  useEffect(() => {
    dispatch(unsplashAction.load());
  }, [dispatch]);

  useInfinityScroll({
    target,
    onInterSect: ([{ isIntersecting }]) => {
      if (isIntersecting) {
        dispatch(unsplashAction.loadMore());
      }
    },
  });

  if (isLoading) {
    return <Loader />;
  }

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
