import React from 'react';

import { GiCakeSlice } from "react-icons/gi";
import { FaShoppingBag } from 'react-icons/fa';

import cakeSlice from '../../assets/images/cakeSliceColorfull.png';

import './styles.css';

const ProductDetail = ({onClick, title, image, slices, ingredients, addToTheCart, holeProduct}) => {
  return (
      <div id="product-detail" onClick={onClick}>
          <div className="product-detail-card">
            <header className="card-header">
                <img src={image} alt={title + " Photo"}/>

                <h1>{title}</h1>
            </header>

            <div className="card-especifications">
                <section className="product-slices">
                  <h3>Rende {slices} fatias</h3>
                  
                  <img src={cakeSlice} alt={"Cake Slice"}/>
                </section>

                <section className="product-ingredients">
                  <div>
                    <h1>Ingredientes</h1>
                  </div>
                  
                  <p>{ingredients}.</p>
                </section>

                <section className="product-shoppingButton">
                  <h2>Adicionar ao Carrinho</h2>

                  <FaShoppingBag size={50} color="green" cursor='pointer' onClick={() => addToTheCart(holeProduct)}/>
                </section>
            </div>
          </div>
      </div>
  );
}

export default ProductDetail;