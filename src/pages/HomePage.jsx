
import './Home.css'

import { Outlet, Link } from "react-router-dom";

import LOGO from '../assets/logo.svg';
import CART from '../assets/icon-cart.svg';
import MENU from '../assets/icon-menu.svg';
import AVATAR from '../assets/image-avatar.png';

const HomePage = () => {
  return (
    <div className='home'> 
        <nav className='nav'>
           <img className='menu' src={MENU} alt="" /> 
          <img className='logo' src={LOGO} alt="" />
        <ul>
    
          <li>
            <Link to="/Collection" className='item'>Collection</Link>
          </li>
          <li>
            <Link to="/Men" className='item'>Men</Link>
          </li>
          <li>
            <Link to="/Women" className='item'>Women</Link>
          </li>
          <li>
            <Link to="/About" className='item'>About</Link>
          </li>
          <li>
            <Link to="/Contact" className='item'>Contact</Link>
          </li>
        </ul>
        <div className='allicon'>
        <img src={CART} alt="" />
        <img className='img' src={AVATAR} alt="" />
        </div>
      </nav>

    <  Outlet></Outlet>
  
    </div>
  );
}

export default HomePage;
