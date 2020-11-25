import React from 'react';
import { Link } from 'react-router-dom';

import LogoImg from '../../assets/images/LogoImg.png';

import './styles.css';

const PageHeader: React.FC = () => {  
  return (
    <div id="page-header">
      <g>
        <div className="menu-toggle">
          <div className="toggle-one"></div>
          <div className="toggle-two"></div>
          <div className="toggle-three"></div>
        </div>
        
        <img src={LogoImg} alt={"LovelyFood Logo"}/>

        <nav>
            <li> <Link className="top-bar_link" to='/'>Home</Link> </li>
            <li> <Link className="top-bar_link" to='/bakery'>Bakery</Link> </li>
            <li> <Link className="top-bar_link" to='/contact'>Contact</Link> </li>
        </nav>
      </g>
    </div>
  );
}

export default PageHeader;