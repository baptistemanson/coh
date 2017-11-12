import React, { Component } from 'react';

export default class Checkboxes extends Component {
	render() {
		const { availableOptions, toggle, isChecked } = this.props;
		const checkboxes = Object.keys(availableOptions).map((option) => (
			<div
				className="pa2 tc flex flex-column items-center w-10 justify-end pointer"
				onClick={() => toggle(availableOptions[option].id)}
			>
				<img className="db-ns dn" src={availableOptions[option].img} />
				<span className="f7">{option}</span>
				<input
					className=""
					key={option}
					type="checkbox"
					name={option}
					value={availableOptions[option].id}
					checked={isChecked.indexOf(availableOptions[option].id) > -1}
					onChange={() => toggle(availableOptions[option].id)}
				/>
			</div>
		));
		return <form className="flex flex-row w-100">{checkboxes}</form>;
	}
}
