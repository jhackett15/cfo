import React from 'react';


const BasicsDiv = ({id, title, desc, imageURL}) => { 
	return(

<div className="dib w-50-ns tc center pa5 mw7">
	       <img alt =''style={{height:'auto', width:'150px'}} src={imageURL}  />
	    	
	      <h3 className="f5 f4-ns mb0 black-90">{title}</h3>
	      <p className="f6 f5 fw4 mt2  black-60">{desc}</p>

	  </div>
	  );
}

export default BasicsDiv;