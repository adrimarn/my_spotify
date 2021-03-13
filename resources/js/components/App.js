import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Home from './Home';
import Artists from './Artists';
import Artist from './Artist';
import Albums from './Albums';
import Album from './Album';
import Genres from './Genres';
import Genre from './Genre';
import Search from './Search';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <nav className="navbar navbar-expand-lg navbar-primary bg-light">
                        <ul className="navbar-nav mr-auto">
                            <li><Link to={'/'} className="nav-link"> Home </Link></li>
                            <li><Link to={'/search'} className="nav-link">Search</Link></li>
                            <li><Link to={'/artists'} className="nav-link">Artists</Link></li>
                            <li><Link to={'/albums'} className="nav-link">Albums</Link></li>
                            <li><Link to={'/genres'} className="nav-link">Genres</Link></li>

                        </ul>
                    </nav>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route exact path='/artists' component={Artists}/>
                        <Route exact path='/artists/:id' component={Artist}/>
                        <Route exact path='/albums' component={Albums}/>
                        <Route exact path='/albums/:id' component={Album}/>
                        <Route exact path='/genres' component={Genres}/>
                        <Route exact path='/genres/:id' component={Genre}/>
                        <Route exact path='/search' component={Genre}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
