import React from 'react';

import './styles.css';

const Carrousel = () =>{
        
    function handleScrolling(e) {
        if (e.deltaY > 0){
            e.target.scrollBy(300, 0) 
        } else {
            e.target.scrollBy(-300, 0)
        }
    }

    return (
        <div id="items-wrapper">
            <div id="items" onWheel={handleScrolling}>
                <div className="item">
                    <img src="https://4.bp.blogspot.com/-k_v3WWgMadM/UAh4WLdZXFI/AAAAAAAACWQ/BIvpMeSLI8k/s1600/009.JPG" alt={"img"}/>       
                </div>
                
                <div className="item" >
                    <img src="https://www.wickbold.com.br/wp-content/uploads/2014/11/140813-WickBold-MINI-TORTA-VERDE-DE-LEGUMES-424.jpg" alt={"img"}/> 
                </div>
                
                <div className="item">
                    <img src="https://media-manager.noticiasaominuto.com/1920/1476604965/naom_5803340e9419f.jpg" alt={"img"}/> 
                </div>
                
                <div className="item">
                    <img src="https://i.ytimg.com/vi/SV3o1UEMaRM/maxresdefault.jpg" alt={"img"}/>
                </div>
            </div>
        </div>
    );
}

export default Carrousel;