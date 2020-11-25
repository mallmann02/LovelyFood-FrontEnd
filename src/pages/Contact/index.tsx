import React from 'react';
import { AnyAction } from 'redux';

import { IoMdArrowRoundDown } from 'react-icons/io';

import PageHeader from '../../components/PageHeader';

import instagramColorfullIcon from '../../assets/icons/instagramColorfullIcon.png';
import whatsappColorfullIcon from '../../assets/icons/whatsappColorfullIcon.png';
import iphoneScreen from '../../assets/images/iphone_screen_instagram.png';
import curvedArrow from '../../assets/images/seta_curvada.png';
import instagramPost from '../../assets/images/lovelyfood_instagram-post.jpg';

import './styles.css';

function Contact() {
  
  function handleScrolling(e: AnyAction) {
    if (e.deltaY > 0){
        e.target.scrollBy(300, 0)
    } else {
        e.target.scrollBy(-300, 0)
    }
  }
  
  return (
    <div id="page-contact">
      <PageHeader />
     

      <div className="contact-main">
        <img id="cellphone-screen-img" src={iphoneScreen} alt="cellphone_instagram"/>

        <img id="arrow-img" src={curvedArrow} alt="curved_arrow"/>

        <div id="carousel" onWheel={handleScrolling} >
                <div className="carousel-item">
                    <img src={instagramPost} alt={"img"}/>       
                </div>
                
                <div className="carousel-item" >
                    <img src="https://www.wickbold.com.br/wp-content/uploads/2014/11/140813-WickBold-MINI-TORTA-VERDE-DE-LEGUMES-424.jpg" alt={"img"}/> 
                </div>
                
                <div className="carousel-item">
                    <img src="https://media-manager.noticiasaominuto.com/1920/1476604965/naom_5803340e9419f.jpg" alt={"img"}/> 
                </div>
                
                <div className="carousel-item">
                    <img src="https://i.ytimg.com/vi/SV3o1UEMaRM/maxresdefault.jpg" alt={"img"}/>
                </div>
            </div>
      </div>

      <div className="contact-footer">
        <header className="footer-header">
          <h3>acesse pelos nossos links</h3>

          <IoMdArrowRoundDown size={30} style={{ marginLeft: 5 }}/>
        </header>

        <div className="social-media-options">
          <section className="instgram-option">
            <img src={instagramColorfullIcon} alt={"instagram logo"} width={80} height={80}/>

            <a href="https://www.instagram.com/lovelyfood3/"> @lovely_food</a>
          </section>

          <section className="whatsapp-option">
            <img src={whatsappColorfullIcon} alt={"whatsapp logo"} width={80} height={80}/>

            <a href={`https://api.whatsapp.com/send?phone=${encodeURIComponent(5551999983776)}}`}>(51) 99998-3776</a>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Contact;