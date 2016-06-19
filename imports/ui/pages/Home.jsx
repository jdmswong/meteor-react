import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import Posts from '../../api/posts.js';
import Post from '../components/Post.jsx';

class Home extends Component {
	//renderPosts(){
	//	return ();
	//}

	render() {
		return (
			<div>
				<h1>WELCOME HOME</h1>

				{ this.props.posts.map((post) => <p>{post.name}</p>) }

				<Post />

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
