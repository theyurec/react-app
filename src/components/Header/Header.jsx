import './style.css';
import React, { useState, useEffect } from 'react';
import logo from './../../images/logo.png';
import searchIcon from './../../images/search.png';
import arrow_bottom from './../../images/arrow_bottom.svg';
import arrow_right from './../../images/arrow_right.svg';
import { navMenu } from '../../configs/navMenu.js';

import MenuBurger from '../MenuBurger/MenuBurger';

const Header = ({search, setSearch}) => {
  const [menuActive, setMenuActive] = useState(false);
  const [searchInput, setSearchInput] = useState(false); 



  const [scrollPosition, setScrollPosition] = useState(0);
  const [isMenuHidden, setIsMenuHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.pageYOffset;
      setScrollPosition(currentPosition);


      if (currentPosition > 200) {
        setIsMenuHidden(true);
      } else {
        setIsMenuHidden(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return ( 
    <>
      <header className='header'>
          <div className="container">
            <div className='header__top'>
              <div className="logo-container">
                <img src={logo} alt="logo" className="logo" />
              </div>
              <div className="search">
              {searchInput &&
                <input value={search} onChange={e => setSearch(e.target.value)} type="text" placeholder="Search..." />
              }
              <img src={searchIcon} alt="search_icon" className="search__img" onClick={() => setSearchInput(!searchInput)} />
              </div>
            </div>
            <div className={menuActive ? 'burger-btn active' : 'burger-btn'} onClick={() => setMenuActive(!menuActive)}>
              <span/>
            </div>
  
            
          </div>
          
  
          <MenuBurger active={menuActive} setActive={setMenuActive}/>
          
        </header>
  
  <nav className={`nav ${isMenuHidden ? 'hide-menu' : 'show-menu'}`}>
  <div className='container'>
    <ul className="nav-list">
      {navMenu.map((obj, index) => (
        <li className="nav-list__item" key={index}>
          <a href="#" className="nav-list__link">{obj.name}</a>
          <img src={arrow_bottom} alt="arrow" className="nav-list__arrow" />
            <ul className="nav-list__subItem">
              <div className='nav-list__subItem-wrapper'>
                <div className='nav-list__subItem-wrapper2'>
                  {obj.submenu.map((item, subIndex) => 
                  <div className='nav__submenu'>
                      <li className='nav__submenu-wrapper' key={subIndex}>
                          <a href="#" className="nav__submenu-link">{item}</a>
                          <img src={arrow_right} alt="arrow" className="nav-list__arrow" />
                      </li>
                      <div className="nav__submenu-line"></div>
                  </div>
                  )}
                </div>
              </div>
            </ul>
        </li>
      )
      )}
      <a href='#'>Buy Now</a>
    </ul>
  </div>
  
  </nav>
    </>
  );
}

export default Header;