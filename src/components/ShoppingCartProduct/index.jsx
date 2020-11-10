import React from 'react';

import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

import './styles.css';

function ShoppingCartProduct({onPlusClick, onMinusClick, image, title, disponibility, amount, cost, id, holeProduct}) {
  return (
      <div id="cart-product">
          <img src={image} alt={title}/>
          
          <header>
            <h2>{title}</h2>
            <h3>{(disponibility == "true") ? "Disponível" : "Indisponível"}</h3>
          </header>

          <div className="product-amount">
           

            <section className="amount-number">
                <div className="amount-control">
                  <AiOutlineMinus onClick={() => onMinusClick(id)} cursor='pointer' size={30}/>
                  <div>
                      <h1>{amount}</h1>
                  </div>
                  <AiOutlinePlus onClick={() => onPlusClick(holeProduct)} cursor='pointer' size={30}/>
                </div>
                <h2>Quant.</h2>
            </section>
          </div>

        <p>R$ {cost}</p>
      </div>
  );
}

export default ShoppingCartProduct;