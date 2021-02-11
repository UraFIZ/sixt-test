import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Tilt from 'src/components/Tilt';
import Card from 'src/components/Card';
import Header from 'src/components/Header';
import { selectCollections } from 'src/redux/shop/selectors';

const CarStore = ({ collections }) => {
  return (
    <>
      <Header />
      <main className="container">
        {Object.values(collections).map((item) => (
          <Tilt>
            <Card
              key={item.id}
              name={item.carGroupInfo.modelExample.name}
              price="price"
              image={item.carGroupInfo.modelExample.imageUrl}
            />
          </Tilt>
        ))}
      </main>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: (state) => selectCollections(state),
});

export default connect(mapStateToProps)(CarStore);
