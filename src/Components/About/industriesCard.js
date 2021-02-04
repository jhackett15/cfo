import React from 'react';
import { industries } from './industries';
import IndustriesDiv from './industriesDiv';

const IndustriesCard = ({id, title, desc, image}) => {
  return(
    <div className='flex items-start flex-wrap'>
    {
      industries.map((x , i) => {
    return (
      <IndustriesDiv
          key={i} 
          id={industries[i].id} 
          title={industries[i].title} 
          desc={industries[i].desc}
          image={industries[i].image}
        />
        );
  }
  )}
    </div>
    )
}


export default IndustriesCard;