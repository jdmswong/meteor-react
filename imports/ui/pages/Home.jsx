import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import Posts from '../../api/posts.js';

class Home extends Component {
	//renderPosts(){
	//	return ();
	//}

	render() {
		return (
			<div>
				<h1>WELCOME HOME</h1>

				{ this.props.posts.map((post) => <p>{post.name}</p>) }
			</div>
		);
	}
}

export default createContainer(() => {
	return {
		posts: Posts.find().fetch()
	};
}, Home);
