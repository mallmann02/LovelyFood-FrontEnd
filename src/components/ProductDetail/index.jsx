import React from 'react';

import cakeSlice from '../../assets/images/cakeSliceColorfull.png';
import separator from '../../assets/images/separator.png';

import './styles.css';

const ProductDetail = ({onClick, images, slices, description}) => {
  return (
      <div id="product-detail" onClick={onClick}>
          <div className="product-detail-card">
            <section className="aside-card">
              <p className="aside-card-description">{description}</p>

              <img src={separator} alt="separador_img"/>

              <div className="aside-card-slices">
                <img src={cakeSlice} alt="cake_slices"/>

                <a>Rende {slices} fatias</a>
              </div>
            </section>
            
            <section className="images-carousel">
              <div id="items">
                  <div className="image-item">
                    <img src={images} alt="product_images"/>
                  </div>
              </div>
            </section>
          </div>
      </div>
  );
}

export default ProductDetail;