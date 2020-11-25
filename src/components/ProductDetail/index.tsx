import React from 'react';
import { AnyAction } from 'redux';

import cakeSlice from '../../assets/images/cakeSliceColorfull.png';
import separator from '../../assets/images/separator.png';

import './styles.css';

interface ProductDetailProps{
  onClick: any;
  description: string;
  image: string[];
  slices: number;
}

const ProductDetail: React.FC<ProductDetailProps> = (props) => {
  
  function handleScrolling(e: AnyAction) {
    if (e.deltaY > 0){
        e.target.scrollBy(0, 300) 
    } else {
        e.target.scrollBy(0, -300)
    }
  }

  return (
      <div id="product-detail" onClick={props.onClick}>
          <div className="product-detail-card">
            <section className="aside-card">
              <p className="aside-card-description">{props.description}</p>

              <img src={separator} alt="separador_img"/>

              <div className="aside-card-slices">
                <img src={cakeSlice} alt="cake_slices"/>

                <a>Rende {props.slices} fatias</a>
              </div>
            </section>
            
            <section className="images-carousel">
              <div id="carousel-items-product-detail">
                    {props.children}
              </div>
            </section>
          </div>
      </div>
  );
}

export default ProductDetail;