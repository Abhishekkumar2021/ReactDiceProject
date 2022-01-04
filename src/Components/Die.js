import React, { Component } from "react";
import "../Static/Die.css";

class Die extends Component {
	static defaultProps = {
		num: "one",
		isRolling: false,
	};
	render() {
		let cName = this.props.isRolling ? "rolling Die" : "Die";
		return (
			<div className={`${cName}`}>
				<i className={`fas fa-dice-${this.props.num} icon`}></i>
			</div>
		);
	}
}
export default Die;
