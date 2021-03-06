import React from 'react';
import './style.scss';

const Card = ({ name, price, image }) => {
  return (
    <div className="card">
      <h2>{name}</h2>
      <h3>{price}</h3>
      <img
        className="card-image"
        src={image || 'https://cdn.sixt.io/fleet/images/1600x640/bmw-5-mf-03.jpg'}
        alt={name}
      />
    </div>
  );
};

export default Card;
