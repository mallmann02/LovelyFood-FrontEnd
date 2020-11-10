import { createAction, createReducer } from '@reduxjs/toolkit';

interface Product {
    id: number;
    name: string;
    image: string;
    image_url: string;
    disponibility: boolean;
    type: string;
    slices: number;
    cost: number;
    amount?: number|any;
  }

  function withPayloadType<Product>() {
    return (product: Product) => ({ payload: product })
  }
  
const INITIAL_STATE:Product[] = []

export const addItem = createAction('ADD_ITEM', withPayloadType<Product>());
export const removeItem = createAction<string, 'REMOVE_ITEM'>('REMOVE_ITEM');
export const decreaseItem = createAction<string, 'DECREASE_ITEM'>('DECREASE_ITEM')
 
export default createReducer(INITIAL_STATE, {
    [addItem.type]: (state, action) => [...state, action.payload],
    [removeItem.type]: (state, action) => state.filter((item) => item.id !== action.payload),
    [decreaseItem.type]: (state, action) => void(state.splice(state.indexOf(action.payload, 1)))
})