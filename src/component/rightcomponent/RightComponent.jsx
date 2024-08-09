
import './RightComponent.css'

import ONEPRODUCT from '../../assets/image-product-1.jpg';
import ONEIMG from '../../assets/image-product-1-thumbnail.jpg';

import TWOIMG from '../../assets/image-product-2-thumbnail.jpg';

import THREEIMG from '../../assets/image-product-3-thumbnail.jpg';

import FOURIMG from '../../assets/image-product-4-thumbnail.jpg';

const RightComponent = () => {
  return (
    <div className='rightcomponent'>
      <img src={ONEPRODUCT} alt="" />

<div className='allimg'>
  <img src={ONEIMG} alt="" />
  <img src={TWOIMG} alt="" />
  <img src={THREEIMG} alt="" />
  <img src={FOURIMG} alt="" />
</div>

    </div>
  );
}

export default RightComponent;











