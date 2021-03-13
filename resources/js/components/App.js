import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Home from './Home';
import Artists from './Artists';
import Artist from './Artist';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <nav className="navbar navbar-expand-lg navbar-primary bg-light">
                        <ul className="navbar-nav mr-auto">
                            <li><Link to={'/'} className="nav-link"> Home </Link></li>
                            <li><Link to={'/artists'} className="nav-link">Artists</Link></li>
                        </ul>
                    </nav>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route exact path='/artists' component={Artists}/>
                        <Route exact path='/artists/:id' component={Artist}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
