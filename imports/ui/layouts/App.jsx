import React, { Component } from 'react';
import AccountsUIWrapper from '../components/AccountsUIWrapper.jsx';

// App component - represents the whole app
export default class App extends Component {
	render() {
		return (
			<div>

				<h1>HELLO WORLD!</h1>

				<AccountsUIWrapper />

			</div>
		);
	}
}