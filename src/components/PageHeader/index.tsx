import React from 'react';
import { Link } from 'react-router-dom';

import { RootStateOrAny, useSelector } from 'react-redux';

import LogoImg from '../../assets/images/LogoImg.png';

import './styles.css';

const PageHeader: React.FC = () => {
  const length = useSelector((state: RootStateOrAny) => state.cart.length)
  
  return (
    <div id="page-header">
      <g>
        <img src={LogoImg} alt={"LovelyFood Logo"}/>

        <ul>
            <li> <Link className="top-bar_link" to='/'>Home</Link> </li>
            <li> <Link className="top-bar_link" to='/bakery'>Bakery</Link> </li>
            <li> <Link className="top-bar_link" to='/contact'>Contact</Link> </li>
        </ul>
      </g>
    </div>
  );
}

export default PageHeader;