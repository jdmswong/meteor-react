import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import {
	Router, Route, Link,
	browserHistory, IndexRoute
} from 'react-router'

import App from '../imports/ui/layouts/App.jsx';
import Home from '../imports/ui/pages/Home.jsx';
import Private from '../imports/ui/pages/Private.jsx';

Meteor.startup(() => {

	function requireAuth(nextState, replace) {
		if (!Meteor.userId()) {
			replace({
				pathname: '/welcome',
				state: { nextPathname: nextState.location.pathname }
			})
		}
	}

	render((
		<Router history={browserHistory}>
			<Route path="/" component={App}>
				<IndexRoute component={Home}/>
				<Route path="b" component={Private} onEnter={requireAuth} />

			</Route>
		</Router>
	), document.getElementById('render-target'));
});


