var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory, browserHistory} = require('react-router');

/* Custom Components */
var Main = require('Main');
var Timer = require('Timer');
var Countdown = require('Countdown');

/* Load Foundation */
$(document).foundation();

// App CSS
require('style!css!sass!applicationStyles');

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <Route path="countdown" component={Countdown} />

            {/* Below snippet renders Timer if no other paths matched */}
            <IndexRoute component={Timer} />
        </Route>
    </Router>,
    document.getElementById('app')
);
