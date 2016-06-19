import React, { Component } from 'react';
import AccountsUIWrapper from '../components/AccountsUIWrapper.jsx';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { Link } from 'react-router'

//import MenuBar from '../components/Navbar.jsx'
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

// App component - represents the whole app
class App extends Component {
	render() {

		return (
			<div>

				<Navbar>
					<Navbar.Header>
						<Navbar.Brand>
							<a href="#">React-Bootstrap</a>
						</Navbar.Brand>
					</Navbar.Header>
					<Nav>
						<LinkContainer to={{ pathname: '/welcome' }}>
							<NavItem eventKey={1} >Welcome</NavItem>
						</LinkContainer>
						<LinkContainer to={{ pathname: '/b' }}>
							<NavItem eventKey={1} >Private</NavItem>
						</LinkContainer>
					</Nav>
				</Navbar>


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
