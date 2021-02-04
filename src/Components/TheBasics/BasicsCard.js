import React from 'react';
import { cfoServicesData } from './cfoServicesData';
import BasicsDiv from './BasicsDiv';

const BasicsCard = ({id, title, desc, imageURL}) => {
	return(
		<div>
		{
			cfoServicesData.map((x , i) => {
		return (
			<BasicsDiv
					key={i} 
					id={cfoServicesData[i].id} 
					title={cfoServicesData[i].title} 
					desc={cfoServicesData[i].desc}
					imageURL={cfoServicesData[i].imageURL}
				/>
				);
	}
	)}
		</div>
		)
}


export default BasicsCard;