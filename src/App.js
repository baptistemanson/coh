import React, { Component } from 'react';
import 'tachyons/css/tachyons.min.css';
import './style.css';
import Checkboxes from './Checkboxes';

import { scenarioList, expansions as availableOptions, getExpansionsFromIndex } from './scenario';

const isSubset = (subset, set) => subset.every((elem) => set.indexOf(elem) > -1);

const filter = (options) => {
	return scenarioList.filter((s) => isSubset(s.requiredExpansions, options));
};

class App extends Component {
	constructor() {
		super();
		this.state = { options: [] };
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
		const filteredScenarios = this.state.options.length ? filter(this.state.options) : scenarioList;
		const scenarios = filteredScenarios.map((s) => (
			<div className="row" key={s.name}>
				<div className="cell">{s.name}</div>
				<div className="cell">{s.description}</div>
				<div className="cell tc">{s.players ? s.players.join(', ') : s.players}</div>
				<div className="cell">{s.requiredExpansions.map(getExpansionsFromIndex).join(', ')}</div>
			</div>
		));
		return (
			<div>
				<header>
					<h1 className="tc">Conflict of Heroes</h1>
					<h2 className="tc">Scenario List</h2>
				</header>
				<Checkboxes
					availableOptions={availableOptions}
					isChecked={this.state.options}
					toggle={this.toggle.bind(this)}
				/>
				<div>Total Scenarios: {scenarios.length}</div>
				<div className="wrapper">
					<div className="table">
						<div className="row header tc">
							<div className="cell">Name</div>
							<div className="cell">Description</div>
							<div className="cell ta-c">Players</div>
							<div className="cell">Expansion</div>
						</div>
						{scenarios}
					</div>
				</div>
			</div>
		);
	}
}

export default App;
