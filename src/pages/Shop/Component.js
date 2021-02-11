import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Card from 'src/components/Card';
import { selectCollections } from 'src/redux/shop/selectors';

const CarStore = ({ collections }) => {
  return (
    <div>
      {Object.values(collections).map((item) => (
        <Card
          key={item.id}
          name={item.carGroupInfo.modelExample.name}
          price="price"
          image={item.carGroupInfo.modelExample.imageUrl}
        />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: (state) => selectCollections(state),
});

export default connect(mapStateToProps)(CarStore);
