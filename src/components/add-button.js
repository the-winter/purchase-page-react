import React from 'react';

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
