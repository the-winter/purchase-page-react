import React from 'react';

const blackHeadphones = require('../assets/images/ath-msr7-black.jpg');
const brownHeadphones = require('../assets/images/ath-msr7-brown.jpg');

export const Headphones = props => {
	return (
		<div className="headphones-container" style={{ paddingTop: '20px', minHeight: '630px' }}>
			<img className="img-responsive" src={props.color === 'black' ? blackHeadphones : brownHeadphones} />
		</div>
	);
};
