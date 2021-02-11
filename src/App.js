import React, { useEffect, lazy, Suspense } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { fetchCollection } from 'src/redux/shop/actions';
const ShopPageContainer = lazy(() => import('src/pages/Shop/Container.js'));

const App = (props) => {
  const { fetchCollection: fetchCollectionProps } = props;
  useEffect(() => {
    fetchCollectionProps();
  }, []);

  return (
    <ErrorBoundary
      FallbackComponent={({ error }) => {
        return (
          <div className="error" role="alert">
            There was an error:{' '}
            <pre style={{ whiteSpace: 'normal' }}>{error.message}</pre>
          </div>
        );
      }}>
      <Switch>
        <Suspense fallback={<div>Loading...</div>}>
          <Route exact path="/" component={ShopPageContainer} />
        </Suspense>
      </Switch>
    </ErrorBoundary>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollection: () => dispatch(fetchCollection()),
});

export default connect(null, mapDispatchToProps)(App);
