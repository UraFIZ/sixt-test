import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

const CarStore = lazy(() => import('./pages/CarStore'));

const App = () => {
  return (
    <Switch>
      <Suspense fallback={<div>Loading...</div>}>
        <Route exact path="/" component={CarStore} />
      </Suspense>
    </Switch>
  );
};

export default App;
