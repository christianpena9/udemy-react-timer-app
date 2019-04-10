var React = require('react');
var {Link, IndexLink} = require('react-router');

/* using simple version of component since it is just presentational */
var Navigation = () => {
    return (
        <div>
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">React Time App</li>
                        <li>
                            <IndexLink to="/" activeClassName="active-link">Timer</IndexLink>
                        </li>
                        <li>
                            <Link to="/countdown" activeClassName="active-link">Countdown</Link>
                        </li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <ul className="menu">
                        <li className="menu-text">Created by <a href="http://www.christianpenaalba.com" target="_blank">Christian Pena</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

module.exports = Navigation;
