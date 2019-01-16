import React from 'react';

export const Button = props => {
	return (
		<div className="button-container">
			<button className="add-btn-style" style={{}} onClick={props.onAddToCart}>
				{props.buttonLabel}
			</button>
			<p style={{ display: 'inline-block', marginLeft: '15px' }}>
				{props.buttonLabel === 'VIEW CART' ? 'Item added to cart!' : ''}
			</p>
		</div>
	);
};
