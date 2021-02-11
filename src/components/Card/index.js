import React from 'react';

const Card = ({ name, price, image, onClick }) => {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>{price}</p>
      <img
        className="card-image"
        src={image || 'https://cdn.sixt.io/fleet/images/1600x640/bmw-5-mf-03.jpg'}
        alt={name}
      />
    </div>
  );
};

export default Card;
