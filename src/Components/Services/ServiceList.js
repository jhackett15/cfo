import React from 'react';

const ServiceList = ({id, service, desc}) => {
return(
      <div className="fl w-20 bg-dark-green dib br3 pa3 ma2 grow bw2 h5">
        <div>{service}</div>
        <div className='bg-dark-green dib br3 pa3 ma2 grow bw2'>
          {desc}</div>
      </div>
  );
}

export default ServiceList;


