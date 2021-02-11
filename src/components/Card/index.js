import React from 'react';

const Card = ({ name, price, image, onClick }) => {
  return (
    <>
      <h2>{name}</h2>
      <p>{price}</p>
      <img
        src={image || 'https://cdn.sixt.io/fleet/images/1600x640/bmw-5-mf-03.jpg'}
        alt={name}
      />
    </>
  );
};

export default Card;
