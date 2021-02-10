import React from 'react';
import CustomButton from 'src/components/Button';

const Card = ({ name, price, image, onClick }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{price}</p>
      <img src={image} alt={name} />
      <CustomButton onClick={onClick}>See details</CustomButton>
    </div>
  );
};

export default Card;
