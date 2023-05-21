import React from "react";
import { navMenu } from "../../configs/navMenu";
import arrow_bottom from '../../images/arrow_bottom.svg'
import './index.css'
import logo from './../../images/logo.png'

const MenuBurger = ({ active, setActive }) => {
  return (
    <div className={active ? 'menu active' : 'menu'} onClick={() => setActive(false)}>
      <div className="blur"></div>
      <div className="menu__content" onClick={(e) => e.stopPropagation()}>
        <img className="menu__logo" src={logo} alt="logo" />
        <div className="logo-line"></div>
        <ul className="burger-list">
          {navMenu.map((obj, index) => (
            <React.Fragment key={index}>
              <li className="burger-list__item">
                <a href="#" className="burger-list__link">
                  {obj.name}
                </a>
                <img src={arrow_bottom} alt="arrow" className="burger-list__arrow" />
              </li>
              <div className="logo-line"></div>
              

            </React.Fragment>
          ))}
        </ul>
        <a href='#' className="menu-btn">Buy Now</a>
      </div>
    </div>
  );
};

export default MenuBurger;