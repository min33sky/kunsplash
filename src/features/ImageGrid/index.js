import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ErrorView from '../../components/ErrorView';
import Loader from '../../components/Loader';
import { unsplashSelector, unsplashAction } from './slice';
import { Content, Img, ImgWrapper, Section } from './style';

function ImageGrid() {
  const dispatch = useDispatch();
  const [target, setTarget] = useState(null);

  const { isLoading, images, error } = useSelector(unsplashSelector.all);

  useEffect(() => {
    dispatch(unsplashAction.load());
  }, [dispatch]);

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
    </Content>
  );
}

export default ImageGrid;
