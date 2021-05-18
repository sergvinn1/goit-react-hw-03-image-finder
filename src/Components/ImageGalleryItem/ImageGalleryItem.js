import React from 'react';
import T from 'prop-types';
import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ image, openModal }) => {
  const { webformatURL, tags } = image;

  return (
    <li id={image.id} onClick={openModal} className={s.ImageGalleryItem}>
      <img
        src={webformatURL}
        alt={tags}
        className={s.ImageGalleryItemImage}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  image: T.shape({
    webformatURL: T.string,
  }),
};

export default ImageGalleryItem;
