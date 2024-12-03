import React from "react";
import ContactForm from "./ContactForm";
import { useParams } from "react-router-dom";
import { Artists } from "./util/artist_data";
import { Albums } from "./util/album_data";
import './BigTexts.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const ArtistDetail = () => {
    const {id} = useParams();
    const artist = Artists.artists.find(artist => artist.id === id);

    if (!artist) {
        return <h3>Artist not found</h3>
    }

    const artistAlbums = Albums.albums.flatMap((albumGroup) =>
        albumGroup.items.filter((album) =>
            album.artists.some((albumArtist) => albumArtist.id === artist.id)
        )
    );

    return (
        // use .container to create a responsive fixed-width container
        // mt-5 sets margin-top to 3rem
        <div className="container mt-5">
            <h1 className="bigtexts-style">{artist.name}</h1>
            <div class="text-center">
                <img src={artist.images[0].url} alt={artist.name} className="img-fluid mb-3" />
            </div>
            <p>Favorite genres: {artist.genres.join(", ")}</p>
            {/* <p>Popularity: {artist.popularity}</p> */}
            <h2 className="bigtexts-style">Sample music</h2>
            <div className="row">
                {artistAlbums.map((album) => (
                    <div key={album.name} className="col-md-6 mb-4">
                        <div className="card">
                            <img
                                src={album.images[1].url} // Use medium-sized image
                                className="card-img-top"
                                alt={album.name}
                            />
                            <div className="card-body">
                                <h5 className="card-title">{album.name}</h5>
                                <p>Release Date: {album.release_date}</p>
                                <iframe
                                    src={album.external_urls.spotify} // Embedded Spotify or YouTube link
                                    width="100%"
                                    height="80"
                                    frameBorder="0"
                                    allow="encrypted-media"
                                    title={album.name}
                                ></iframe>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <h2 className="bigtexts-style">Wanna jam ?</h2>
            <ContactForm />
        </div>
    );
};

export default ArtistDetail;