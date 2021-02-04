import React from 'react';


    const IndustriesDiv = ({id, title, desc, image}) => {

        return(
            <div className='w-third tc h-100 db' key={id}>
            <img style={{height:'auto', width:'150px'}} src={image}  />
              <div className="f5 f4-ns mb0 black-90">{title}
                <div className= "f5 tc v-mid fw4 mt2 pa2 measure lh-copy black-60">{desc}
                </div>
              </div>
            </div>
    );
  }


export default IndustriesDiv;