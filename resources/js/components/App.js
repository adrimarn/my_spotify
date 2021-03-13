import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Home from './Home';
import Artists from './Artists';
import Contact from './Contact';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <h2 className="text-center">Bienvenue sur rushSpotify</h2>
                    <nav className="navbar navbar-expand-lg navbar-primary bg-light">
                        <ul className="navbar-nav mr-auto">
                            <li><Link to={'/'} className="nav-link"> Home </Link></li>
                            <li><Link to={'/contact'} className="nav-link">Contact</Link></li>
                            <li><Link to={'/artists'} className="nav-link">Artists</Link></li>
                        </ul>
                    </nav>
                    <hr/>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route path='/contact' component={Contact}/>
                        <Route path='/artists' component={Artists}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
