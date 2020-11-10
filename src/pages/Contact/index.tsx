import React from 'react';
import { IoMdArrowRoundDown } from 'react-icons/io';

import PageHeader from '../../components/PageHeader';

import cupcakeImg from '../../assets/images/cupcake.png';
import instagramColorfullIcon from '../../assets/icons/instagramColorfullIcon.png';
import whatsappColorfullIcon from '../../assets/icons/whatsappColorfullIcon.png';

import './styles.css';

function Contact() {
  return (
    <div id="page-contact">
      <PageHeader />
     

      <div className="contact-main">
        <img src={cupcakeImg} alt={"cupcake img"}/>

        <section className="contact-form">
          <h3>Entre em contato</h3>

          <form>
            <label htmlFor="name">Nome</label>
            <input id="name" placeholder="Seu nome"></input>

            <label htmlFor="email">E-mail</label>
            <input id="email" placeholder="email@contato.com"></input>

            <label htmlFor="mensagem">Mensagem:</label>
            <textarea id="mensagem" placeholder="Digite sua mensagem"></textarea>
          </form>
        </section>
      </div>

      <div className="contact-footer">
        <header className="footer-header">
          <h3>Ou pelas redes sociais</h3>

          <IoMdArrowRoundDown size={30} style={{ marginLeft: 5 }}/>
        </header>

        <div className="social-media-options">
          <section className="instgram-option">
            <img src={instagramColorfullIcon} alt={"instagram logo"} width={80} height={80}/>

            <a href="https://www.instagram.com/lovelyfood3/"> @arroba_qualquer</a>
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