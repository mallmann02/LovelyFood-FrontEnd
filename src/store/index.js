import { configureStore } from '@reduxjs/toolkit'

import carsReducer from './cars';
import cartReducer from './cart'

//confugure store já vem com o middleware do reduzx thunk par fazer as chamadas api
export default configureStore({
    reducer: {
        cars: carsReducer,
        cart: cartReducer
    }
})