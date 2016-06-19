import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';

export default class Post extends Component {
	render() {
		return (
			<Panel header={this.props.title}>
				{this.props.content}
			</Panel>
		);
	}
}