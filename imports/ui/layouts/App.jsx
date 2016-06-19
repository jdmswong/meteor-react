import React, { Component } from 'react';
import AccountsUIWrapper from '../components/AccountsUIWrapper.jsx';

// App component - represents the whole app
export default class App extends Component {
	render() {
		return (
			<div>

				<h2>L33t forum</h2>

				<AccountsUIWrapper />

				{this.props.children}

			</div>
		);
	}
}