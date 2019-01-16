import React, { Component } from 'react';
import { DropdownButton, ButtonToolbar, MenuItem } from 'react-bootstrap';

export const ColorSelector = props => {
	return (
		<div className="color-dropdown">
			<p>COLORS</p>
			<ButtonToolbar>
				<DropdownButton title={props.color} id="dropdown-size-medium" onSelect={props.colorChoice}>
					<MenuItem eventKey="1">black</MenuItem>
					<MenuItem eventKey="2">brown</MenuItem>
				</DropdownButton>
			</ButtonToolbar>
		</div>
	);
};
