import React, { Component } from 'react';
import AccountsUIWrapper from '../components/AccountsUIWrapper.jsx';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { Link } from 'react-router'

import MenuBar from '../components/MenuBar.jsx';
import { Jumbotron } from 'react-bootstrap';

// App component - represents the whole app
class App extends Component {
	render() {

		return (
			<div className="container">

				<MenuBar />

				<AccountsUIWrapper />

				<Jumbotron>
					{this.props.children}
				</Jumbotron>

			</div>
		);
	}
}

export default createContainer(() => {
	return {
		currentUser: Meteor.user()
	};
}, App);
