import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';

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
					<IndexLinkContainer to={{ pathname: '/' }}>
						<NavItem eventKey={1} >Home</NavItem>
					</IndexLinkContainer>
					<LinkContainer to={{ pathname: '/b' }}>
						<NavItem eventKey={2} >Private</NavItem>
					</LinkContainer>
				</Nav>
			</Navbar>
		);
	}
}