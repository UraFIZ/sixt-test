import React from 'react';

import FancyLoader from 'src/components/Spinner';

const withSpinner = (WrappedComponent) => ({ isFetching, ...otherProps }) => {
  return isFetching ? <FancyLoader /> : <WrappedComponent {...otherProps} />;
};

export default withSpinner;
