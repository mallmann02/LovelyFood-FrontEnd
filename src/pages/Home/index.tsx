import React from 'react';

import PageHeader from '../../components/PageHeader';
import Carrousel from '../../components/Caroussel';

import { AiOutlineMenu } from 'react-icons/ai';

import './styles.css';

function Home() {
  return (
    <div id="page-home">
      <PageHeader />

      <div className="be-welcome">
        <h1>Seja bem-vindo</h1>
        <p>Clique no botão 
          <AiOutlineMenu 
          color="#000" 
          size={16} 
          style={
            {padding:1,
            backgroundColor:"#FFF",
            marginRight:5, 
            marginLeft:5}
            }/> 
          para conhecer os doces.
        </p>
      </div>

      <Carrousel />
    </div>
  );
}

export default Home;