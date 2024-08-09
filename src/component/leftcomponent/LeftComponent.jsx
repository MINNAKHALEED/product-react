
import './LeftComponent.css'

import PLUS from '../../assets/icon-plus.svg';
import MINUS from '../../assets/icon-minus.svg';
import CART from '../../assets/icon-cart.svg';
import { useState } from 'react';
const LeftComponent = () => {

const [count, setCount] = useState(0);

  return (
<div className='leftcomponent'>

<h5>sneaker company</h5>

<h1><span>fall limited edition <br />sneaker</span></h1>


<p>These low-profile sneakers are your perfect casual wear <br /> companion. Featuring a durable rubber outer sole, they’ll <br /> withstand everything the weather can offer.</p>
<div className='allprice'>
  <div className='price'>
  <label className='fristprice'>$125.00</label>
  <label className='secondprice'>50%</label>
  </div>
  
  <label className='pricelabel'>$250.00</label>
  </div>

<div className='box'>

<div className='rightbox'>
  <button><img src={MINUS} alt="" onClick={() => {
    setCount(count -1)
  }} /></button>
  <label>{count}</label>
  <button><img src={PLUS} alt="" onClick={() => {
    setCount(count + 1)
  }} /></button>
</div>
<div className='leftbox'>
  <img src={CART} alt="" />
  <label>add cart</label>
</div>
</div>
    </div>
  );
}

export default LeftComponent;




