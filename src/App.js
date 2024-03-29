import React from 'react';
import { Route, Switch } from 'react-router-dom';

import ShopHeader from './components/ShopHeader/ShopHeader';
import { HomePage, CartPage } from './pages';

const App = () => {
  return (
    <main className="container" role="main">
      <ShopHeader />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/cart" component={CartPage} />
      </Switch>
    </main>
  );
};

export default App;
