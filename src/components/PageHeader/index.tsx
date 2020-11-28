import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import LogoImg from '../../assets/images/LogoImg.png';

import './styles.css';

const PageHeader: React.FC = () => {  
  const [isMenuActive, setIsMenuActive] = useState(false);
  
  return (
    <div id="page-header">
      <g className={`${isMenuActive ? "on" : ""}`}>
        <div className="menu-toggle" onClick={() => setIsMenuActive(!isMenuActive)}>
          <div className="toggle-one"></div>
          <div className="toggle-two"></div>
          <div className="toggle-three"></div>
        </div>
        
        <img className="page-img" src={LogoImg} alt={"LovelyFood Logo"}/>

        <nav>
          <ul>
            <li> <Link className="top-bar_link" to='/'>Home</Link> </li>
            <li> <Link className="top-bar_link" to='/bakery'>Bakery</Link> </li>
            <li> <Link className="top-bar_link" to='/contact'>Contact</Link> </li>
          </ul>
        </nav>
      </g>
    </div>
  );
}

export default PageHeader;