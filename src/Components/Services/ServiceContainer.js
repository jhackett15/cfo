import React from 'react';
import { servicesList } from './servicesList';
import ServiceList from './ServiceList';
import Tachyons from 'tachyons/css/tachyons.min.css';

const ServiceContainer = ({id, service, desc}) => {
	return(
		<div>
		{
			servicesList.map((service , i) => {
		return (
			<ServiceList
					key={i} 
					id={servicesList[i].id} 
					service={servicesList[i].service} 
					desc={servicesList[i].desc}
				/>
				);
	}
	)}
		</div>
		)
}


export default ServiceContainer;


