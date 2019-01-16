import React, { Component } from 'react';
import { DropdownButton, ButtonToolbar, MenuItem } from 'react-bootstrap';

export class ColorSelector extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<p>COLORS</p>
				<ButtonToolbar>
					<DropdownButton
						title={this.props.color}
						id="dropdown-size-medium"
						onSelect={this.props.colorChoice}
					>
						<MenuItem eventKey="1">black</MenuItem>
						<MenuItem eventKey="2">brown</MenuItem>
					</DropdownButton>
				</ButtonToolbar>
			</div>
		);
	}
}
