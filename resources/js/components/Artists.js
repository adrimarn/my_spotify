import React, { Component } from 'react';
import Artist from '../components/Artist';
class Artists extends Component {
    state = {
        artists: []
    }
    componentDidMount(){

        fetch('/api/artists')
            .then((response) => {
                return response.json()
            })
            .then((result) => {
                this.setState({artists: result})

            })
    }
    render() {
        return (
            <div>
                <h2>Liste des Artistes</h2>

              <Artist artists = {this.state.artists} />
            </div>
        );
    }
}

export default Artists;
