import React, { Component } from 'react';
import { Details } from './components/details-block';
import { ColorSelector } from './components/color-select';
import { Button } from './components/add-button';
import { Headphones } from './components/headphones';
import './App.css';

const leftArrow = require('./assets/images/left-arrow.svg');

class App extends Component {
	constructor(props) {
		super(props);
	}

	state = {
		textChoice: 'description',
		color: 'black',
		buttonLabel: 'ADD TO CART',
	};

	textChoice = choice => {
		this.setState({ textChoice: choice });
	};

	colorChoice = choice => {
		console.log(choice);
		if (parseInt(choice) === 1) {
			this.setState({ color: 'black' });
		} else {
			this.setState({ color: 'brown' });
		}
	};

	onAddToCart = () => {
		this.setState({ buttonLabel: 'Loading...' });
		setTimeout(
			function() {
				this.setState({ buttonLabel: 'VIEW CART' });
			}.bind(this),
			2000
		);
	};

	render() {
		const { textChoice, color, buttonLabel } = this.state;
		const textOptions = ['description', 'details'];

		return (
			<div className="container-fluid container-styles">
				<div className="row">
					<div className="col-sm-6 vertical-divider">
						<div className="first-block">
							<div className="all-products">
								<img src={leftArrow} />
								<p>All products</p>
							</div>

							<div className="header-wrap">
								<h2>Audio-Technica ATH-MSR7</h2>
								<p>2017 Best Headphones of the Year Award</p>
							</div>
							<div className="text-to-select">
								{textOptions.map((option, i) => (
									// why does the onclick function need to be wrapped?
									<div className={option === textChoice ? 'active' : 'inactive'} key={i}>
										<p onClick={() => this.textChoice(option)}>{option}</p>
									</div>
								))}
							</div>
						</div>
						<div className="second-block">
							<Details textChoice={textChoice} />
							<div className="pricing">
								<h3>$59.99</h3>
								<h3 class="former">$89.99</h3>
							</div>
							<ColorSelector colorChoice={this.colorChoice} color={color} />
						</div>
						<div>
							<Button onAddToCart={this.onAddToCart} buttonLabel={buttonLabel} />
						</div>
					</div>
					<div className="col-sm-6">
						<Headphones color={color} />
					</div>
				</div>
			</div>
		);
	}
}

export default App;
