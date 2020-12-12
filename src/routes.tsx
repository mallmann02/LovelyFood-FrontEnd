import React, {FunctionComponent} from 'react';

import { isAuthenticated } from './services/auth';

import { BrowserRouter, Redirect, Route } from 'react-router-dom';

import Home from './pages/Home';
import Contact from './pages/Contact';
import Bakery from './pages/Bakery';
import ShoppingCart from './pages/ShoppingCart';
import Admin from './pages/Admin';
import Logon from './pages/Logon';

const PrivateRoute = ({ component: Component, ...rest }:any) => (
    <Route
      {...rest}
      render={props =>
        isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/logon", state: { from: props.location } }} />
        )
      }
    />
  );

function Routes() {
    return (
        <BrowserRouter>
            <Route  path="/"  exact component={Home}/>

            <Route  path="/contact" component={Contact}/>

            <Route path="/bakery" component={Bakery}/>

            <Route path="/shopping-cart" component={ShoppingCart}/>

            <Route path="/logon" component={Logon}/>

            <PrivateRoute path="/admin" component={Admin}/>
        </BrowserRouter>
    )
}

export default Routes;