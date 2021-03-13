import React, {Component} from 'react';

class Artist extends Component {
    state = {
        artist: [],
        album: []
    }

    async componentDidMount() {
        const id = this.props.match.params.id;

        fetch(`/api/artists/${id}`)
            .then((response) => {
                return response.json()
            })
            .then((result) => {
                this.setState({
                    artist: result[0],
                    album: result[0].album
                })
            })
    }

    render() {

        return (
            <div className="container">
                <h1 className="text-center">{this.state.artist.name}</h1>
                <img src={this.state.artist.photo} className="img-fluid d-flex rounded mx-auto d-block"/>
                <h2>Biographie</h2>
                <p> {this.state.artist.bio}</p>
                <h3>album</h3>
                {this.state.album.map((album) => (
                    <img src={album.cover_small} className="img-fluid"
                         alt={`Photo de ${album.name}`}/>
                ))}
            </div>
        );
    }
}

export default Artist;
