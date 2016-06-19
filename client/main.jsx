import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router'

import App from '../imports/ui/layouts/App.jsx';
import Welcome from '../imports/ui/pages/Welcome.jsx';
import Private from '../imports/ui/pages/Private.jsx';

Meteor.startup(() => {
	//render(<App />, document.getElementById('render-target'));
	render((
		<Router history={browserHistory}>
			<Route path="/" component={App}>
				<Route path="a" component={Welcome} />
				<Route path="b" component={Private} />

			</Route>
		</Router>
	), document.getElementById('render-target'));
});