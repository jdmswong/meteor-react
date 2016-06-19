import React, { Component } from 'react';
import AccountsUIWrapper from '../components/AccountsUIWrapper.jsx';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { Link } from 'react-router'

import MenuBar from '../components/MenuBar.jsx'

// App component - represents the whole app
class App extends Component {
	render() {

		return (
			<div>

				<MenuBar />

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
