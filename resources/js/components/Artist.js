import React from 'react'
import {
    Link
} from "react-router-dom";

const Artist = ({artists}) => {
    return (
        <div className="container">
            <h1 className="text-center mb-5">Artists List</h1>
            <div className="row row-cols-12 row-cols-md-3 g-4">
                {artists.map((artist) => (
                    <div className="col">
                        <div className="card h-50">
                            <div key={artist.id} className="card">
                                <img src={artist.photo} className="card-img-top img-fluid"
                                     alt={`Photo de ${artist.name}`}/>
                                <div className="card-body">
                                    <h5 className="card-title"><Link to={`/artists/${artist.id}`}>{artist.name}</Link>
                                    </h5>
                                    <p className="card-text">{artist.description.substring(0,40)}...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
};
export default Artist
