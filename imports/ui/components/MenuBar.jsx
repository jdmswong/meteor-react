import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default class MenuBar extends Component {
	render() {
		return (
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
		);
	}
}