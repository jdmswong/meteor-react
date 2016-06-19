import React, { Component } from 'react';
import AccountsUIWrapper from '../components/AccountsUIWrapper.jsx';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { Link } from 'react-router'

// App component - represents the whole app
class App extends Component {
	render() {

		return (
			<div>

				<h2>L33t forum</h2>
				<Link to="a">Welcome page</Link><br />
				<Link to="b">Private page</Link><br />
				<br />

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
