import React, {Component} from 'react';
import {Link} from "react-router-dom";
class SearchAll extends Component {

    state = {
        artists: [],
        albums: [],
        genres: [],
    }

    async componentDidMount() {
        const search = this.props.match.params.name;

        fetch(`/api/search/all/${search}`)
            .then((response) => {
                return response.json()
            })
            .then((result) => {
                this.setState({
                    artists: result.artists,
                    albums: result.albums,
                    genres: result.genres,
                })
            })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <h1>Liste des artistes</h1><Link
                        to={`/search/artists/${this.props.match.params.name}`}><span>Voir tout</span></Link>
                        {this.state.artists.map((artist) => (
                            <p key={artist.id}>{artist.name}</p>
                        ))}
                    </div>
                    <div className="col-6">
                        <h1>Liste des albums</h1> <Link
                        to={`/search/albums/${this.props.match.params.name}`}><span>Voir tout</span></Link>
                        {this.state.albums.map((album) => (
                            <p key={album.id}>{album.name}</p>
                        ))}
                    </div>
                    <div className="col-12">
                        <h1>Liste des genres</h1><Link
                        to={`/search/genres/${this.props.match.params.name}`}><span>Voir tout</span></Link>
                        {this.state.genres.map((genre) => (
                            <p key={genre.id}>{genre.name}</p>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchAll;
