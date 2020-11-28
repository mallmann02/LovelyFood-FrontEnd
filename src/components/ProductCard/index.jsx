import React, {useState, useEffect} from 'react';
import { FiMoreHorizontal } from 'react-icons/fi';

import './styles.css';

const ProductCard = ({onClickDetailButton, name, disponibility, cost, image}) => {  
    const [activeIndex, setActiveIndex] = useState(0) 
    const [opacity, setOpacity] = useState(0.8)

    useEffect(() => {
        const opacityInterval = setInterval(() =>{
            setOpacity(opacity => opacity + 0.05)
        }, 70)
        
        const interval = setInterval(() => {
            setActiveIndex(activeIndex => activeIndex + 1);
            setOpacity(0.5)
        }, 3000);
        
        return () => {
            clearInterval(interval)
            clearInterval(opacityInterval)
            
            if(activeIndex == image.length-1){
                setActiveIndex(0)
                setOpacity(0.8)
            }
        }
      }, [activeIndex]);

  return (
      <div id="product-card">
          <div className="card-header">
            <div className="action-button-header" onClick={onClickDetailButton} >
                <FiMoreHorizontal size={20} cursor="pointer"/>
                <a> veja mais </a>
            </div>
            
            <img src={image[activeIndex]} style={{opacity:opacity}} loading="eager" alt={"Não foi possível carregar a foto."}/>
          </div>

          <a className="product-name">{name}</a>

          <section className="product-info">
              <a className="product-disponibility">{(disponibility == "true") ? "Disponível" : "Indisponível"}</a>

              <p className="product-price">{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(cost)}</p>
          </section>
      </div>
  );
}

export default ProductCard;