
import LeftComponent from '../component/leftcomponent/LeftComponent';
import RightComponent from '../component/rightcomponent/RightComponent';

import './Collection.css'

const Collection = () => {
  return (
    <div className='collectionpage'>
      <RightComponent/>
      <LeftComponent/>
    </div>
  );
}

export default Collection;

