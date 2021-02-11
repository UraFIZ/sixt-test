import React, { useEffect, lazy, Suspense } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { fetchCollection } from 'src/redux/shop/actions';

const ShopPageContainer = lazy(() => import('src/pages/Shop/Container.js'));

const App = (props) => {
  const { fetchCollection: fetchCollectionProps } = props;
  useEffect(() => {
    fetchCollectionProps();
  }, []);

  return (
    <Switch>
      <Suspense fallback={<div>Loading...</div>}>
        <Route exact path="/" component={ShopPageContainer} />
      </Suspense>
    </Switch>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollection: () => dispatch(fetchCollection()),
});

export default connect(null, mapDispatchToProps)(App);
