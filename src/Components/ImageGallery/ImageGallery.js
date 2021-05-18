import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem/';
import s from './ImageGallery.module.css';

const ImageGallery = ({ images, openModal }) => {
  return (
    <ul className={s.ImageGallery}>
      {images.map(image => (
        <ImageGalleryItem openModal={openModal} key={image.id} image={image} />
      ))}
    </ul>
  );
};

export default ImageGallery;
