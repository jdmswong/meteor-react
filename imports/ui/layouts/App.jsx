import React, { Component } from 'react';
import AccountsUIWrapper from '../components/AccountsUIWrapper.jsx';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

// App component - represents the whole app
export default class App extends Component {
	render() {

		return (
			<div>

				<h2>L33t forum</h2>
				<a href="a">Welcome page</a><br />
				<a href="b">Private page</a><br />

				<AccountsUIWrapper />

				{this.props.children}

			</div>
		);
	}
}

export default createContainer(() => {
	return {
		currentUser: Meteor.user()
	};
}, App);