import React, { Component } from 'react';
import { Details } from './components/details-block';
import { ColorSelector } from './components/color-select';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
	}

	state = {
		textChoice: 'description',
		color: 'black',
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

	render() {
		const { textChoice, color } = this.state;
		const textOptions = ['description', 'details'];

		return (
			<div className="container-fluid container-styles">
				<div className="row">
					<div className="col-sm-6">
						<div className="first-block">
							<p>All products</p>
							<h1>Audio-Technica ATH MSR-7</h1>
							<p>2017 Best Headphones of the Year Award</p>
							<div className="text-to-select">
								{textOptions.map((option, i) => (
									// why does the onclick function need to be wrapped?
									<div className={option === textChoice ? 'active' : ''} key={i}>
										<p onClick={() => this.textChoice(option)}>{option}</p>
									</div>
								))}
							</div>
						</div>
						<div className="second-block">
							<Details textChoice={textChoice} />
							<div className="pricing">
								<p>$59.99</p>
								<p>$89.99</p>
							</div>
							<ColorSelector colorChoice={this.colorChoice} color={color} />
						</div>
						<div>C</div>
					</div>
					<div className="col-sm-6">content</div>
				</div>
			</div>
		);
	}
}

export default App;
