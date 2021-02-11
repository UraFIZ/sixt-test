import { connect } from 'react-redux';
import { compose } from 'redux';
import { selectIsCollectionFetching } from 'src/redux/shop/selectors';
import { createStructuredSelector } from 'reselect';

import withSpinner from 'src/HOC/withLoader';
import ShopPage from 'src/pages/Shop/Component';

const mapStateToProps = createStructuredSelector({
  isFetching: (state) => selectIsCollectionFetching(state),
});

const ShopPageContainer = compose(connect(mapStateToProps), withSpinner)(ShopPage);

export default ShopPageContainer;
