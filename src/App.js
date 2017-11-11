import React, { Component } from 'react';
import 'tachyons/css/tachyons.min.css';
import Checkboxes from './Checkboxes';

import { scenarioList, expansions as availableOptions } from './scenario';

const isSubset = (subset, set) => subset.every((elem) => set.indexOf(elem) > -1);

const filter = (options) => {
	return scenarioList.filter((s) => isSubset(s.requiredExpansions, options));
};

class App extends Component {
	constructor() {
		super();
		this.state = { options: [ 1 ] };
	}

	toggle(option) {
		this.setState((state) => {
			if (this.state.options.indexOf(option) > -1) {
				return { options: state.options.filter((o) => o !== option) };
			} else {
				return { options: [ ...state.options, option ] };
			}
		});
	}

	render() {
		const scenarios = filter(this.state.options).map((s) => (
			<tr key={s.name}>
				<td>{s.name}</td>
				<td>{s.description}</td>
			</tr>
		));
		return (
			<div>
				<header>
					<h1>Conflict of Heroes</h1>
				</header>
				<Checkboxes
					availableOptions={availableOptions}
					isChecked={this.state.options}
					toggle={this.toggle.bind(this)}
				/>
				<table>
					<div className="flex flex-column">{scenarios}</div>
				</table>
			</div>
		);
	}
}

export default App;
