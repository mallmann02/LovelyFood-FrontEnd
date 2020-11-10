import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/Home';
import Contact from './pages/Contact';
import Bakery from './pages/Bakery';
import ShoppingCart from './pages/ShoppingCart';

function Routes() {
    return (
        <BrowserRouter>
            <Route  path="/"  exact component={Home}/>

            <Route  path="/contact" component={Contact}/>

            <Route path="/bakery" component={Bakery}/>

            <Route path="/shopping-cart" component={ShoppingCart}/>
        </BrowserRouter>
    )
}

export default Routes;