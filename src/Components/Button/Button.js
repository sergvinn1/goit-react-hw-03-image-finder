import React from 'react';
import s from './Button.module.css';

const Button = ({ fetchImages }) => (
  <button type="button" className={s.Button} onClick={fetchImages}>
    Load more...
  </button>
);

export default Button;
