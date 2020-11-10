import React from 'react';

import PageHeader from '../../components/PageHeader';
import Carrousel from '../../components/Caroussel';

import './styles.css';

function Home() {
  return (
    <div id="page-home">
      <PageHeader />

      <Carrousel />
    </div>
  );
}

export default Home;