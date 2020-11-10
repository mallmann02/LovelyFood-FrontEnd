import React from 'react';
import { FiMoreHorizontal, FiShoppingBag } from 'react-icons/fi';

import './styles.css';

const ProductCard = ({onClickShop, onClickDetailButton, name, disponibility, cost, image, holeProduct}) => {

  return (
      <div id="product-card">
          <section className="card-actions">
              <FiMoreHorizontal size={20} onClick={onClickDetailButton} cursor="pointer"/>

              <FiShoppingBag size={20} onClick={() => onClickShop(holeProduct)} cursor="pointer"/>
          </section>
          
          <img src={image} alt={name+" Photo"} width={120} height={120}/>
          
          <a className="product-name">{name}</a>

          <section className="product-info">
              <a className="product-disponibility">{(disponibility == "true") ? "Disponível" : "Indisponível"}</a>

              <p className="product-price">{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(cost)}</p>
          </section>
      </div>
  );
}

export default ProductCard;