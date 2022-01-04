import React, { Component } from "react";
import "../Static/DiceCard.css";
import Die from "./Die";

class DiceCard extends Component {
	static defaultProps = {
		faces: ["one", "two", "three", "four", "five", "six"],
	};
	constructor(props) {
		super(props);
		this.state = {
			Die1: "six",
			Die2: "two",
			isRolling: false,
		};
		this.generateRandom = this.generateRandom.bind(this);
	}
	generateRandom() {
		let rand1 =
			this.props.faces[Math.floor(Math.random() * this.props.faces.length)];
		let rand2 =
			this.props.faces[Math.floor(Math.random() * this.props.faces.length)];
		this.setState({ Die1: rand1, Die2: rand2, isRolling: true });
		setTimeout(() => {
			this.setState({ isRolling: false });
		}, 1000);
	}
	render() {
		return (
			<div className="DiceCard">
				<div className="Both">
					<Die num={this.state.Die1} isRolling={this.state.isRolling} />
					<Die num={this.state.Die2} isRolling={this.state.isRolling} />
				</div>
				<button
					className="DiceCard-button"
					onClick={this.generateRandom}
					disabled={this.state.isRolling}>
					{this.state.isRolling ? "Rolling..." : "Roll the dice"}
				</button>
			</div>
		);
	}
}

export default DiceCard;
