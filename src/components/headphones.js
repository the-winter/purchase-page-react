import React from 'react';
import PropTypes from 'prop-types';
import MediaQuery from 'react-responsive';

const blackHeadphones = require('../assets/images/black.jpg');
const brownHeadphones = require('../assets/images/brown.jpg');
const blackHeadphonesMin = require('../assets/images/black-min.jpg');
const brownHeadphonesMin = require('../assets/images/brown-min.jpg');

export const Headphones = props => {
	return (
		<div className="headphones-container">
			<MediaQuery query="(min-width: 577px)">
				<img
					style={{ maxHeight: '750px' }}
					className="img-responsive"
					src={props.color === 'black' ? blackHeadphones : brownHeadphones}
					alt="img"
				/>
			</MediaQuery>
			<MediaQuery query="(max-width: 576px)">
				<img
					className="img-responsive"
					src={props.color === 'black' ? blackHeadphonesMin : brownHeadphonesMin}
					alt="img"
				/>
			</MediaQuery>
		</div>
	);
};

Headphones.propTypes = {
	color: PropTypes.string,
};
