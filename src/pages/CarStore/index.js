import Card from 'src/components/Card';
import React from 'react';

const CarStore = () => {
  const handleClick = () => {
    alert('hro');
  };

  return (
    <div>
      <Card
        name="Name "
        price="price"
        image="https://cdn.sixt.io/fleet/images/1600x640/bmw-5-mf-03.jpg"
        onClick={handleClick}
      />
    </div>
  );
};

export default CarStore;
