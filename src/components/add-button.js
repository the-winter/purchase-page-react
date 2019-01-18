import React from 'react';
import PropTypes from 'prop-types';

export const Button = props => {
	return (
		<div className="button-container">
			<button className="add-btn-style" onClick={props.onAddToCart}>
				{props.buttonLabel}
			</button>
			<p>{props.buttonLabel === 'VIEW CART' ? 'Item added to cart!' : ''}</p>
		</div>
	);
};

Button.propTypes = {
	buttonLabel: PropTypes.string,
	onAddToCart: PropTypes.func,
};
