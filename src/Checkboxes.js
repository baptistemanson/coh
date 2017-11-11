import React, { Component } from 'react';

export default class Checkboxes extends Component {
	render() {
		const { availableOptions, toggle, isChecked } = this.props;
		const checkboxes = Object.keys(availableOptions).map((option) => (
			<div className="pa2">
				<input
					key={option}
					type="checkbox"
					name={option}
					value={availableOptions[option]}
					checked={isChecked.indexOf(availableOptions[option]) > -1}
					onChange={() => toggle(availableOptions[option])}
				/>
				<span>{option}</span>
			</div>
		));
		return <form className="flex flex-row w-100">{checkboxes}</form>;
	}
}
