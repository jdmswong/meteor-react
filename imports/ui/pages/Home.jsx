import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import Posts from '../../api/posts.js';
import Post from '../components/Post.jsx';

class Home extends Component {
	renderPosts(){
		return this.props.posts.map((post) => (
			<Post {...post}/>
		));
	}

	render() {
		return (
			<div>
				<h1>WELCOME HOME</h1>

				{ this.renderPosts() }

			</div>
		);
	}
}

export default createContainer(() => {
	Meteor.subscribe('posts');

	return {
		posts: Posts.find().fetch()
	};
}, Home);
