import React from "react";
import ContactForm from "./ContactForm";
import Logo from "./Logo";
import { Row, Col, Card } from 'react-bootstrap';
import { useParams } from "react-router-dom";
import { Artists } from "./util/artist_data";
import { Albums } from "./util/album_data";
import './BigTexts.css';

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
        <>
            {/* here's nav with logo on top of the page ... placing the Logo component in one row*/}
            <Row>
                <Col className="pe-0">
                    <Logo />
                </Col>
            </Row>

            {/* set margin for top, left, and right */}
            <div className="mt-5 me-3 ms-3">

                {/* title of the page - artist name */}
                <h1 className="bigtexts-style">{artist.name}</h1>

                {/* display a picture of the artist in the center of screen */}
                <div className="text-center">
                    {/* grab the URL for the first image stored in artist data */}
                    <img src={artist.images[0].url} alt={artist.name} className="fluid mb-2" style={{width: '100%'}}/>
                </div>

                {/* list genres of interest separated by a comma */}
                <p>Favorite genres: {artist.genres.join(", ")}</p>

                {/* display artist's demo music in this section */}
                <h2 className="bigtexts-style">Sample music</h2>

                    {/* scroll to see overflow element - https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-x */}
                    {/* let elements overflow with whiteSpace: "nowrap" */}
                    <div style={{ overflowX: "auto", whiteSpace: "nowrap", padding: "20px 0" }}>

                        {/* put all demo music in one row - let the cards overflow even if container width is small */}
                        <Row className="flex-nowrap">

                            {/* go through every album data for the artist */}
                            {artistAlbums.map((album) => (

                                // one card should take up 100% width of one column
                                <Col key={album.name} className="d-inline-block">

                                    {/* smallest card's width is 200px and always have a margin of 10px on left and right */}
                                    <Card style={{ minWidth: "200px", margin: "0 10px" }}>

                                        {/* refer to React Bootstrap */}
                                        <Card.Img
                                            variant="top"
                                            src={album.images[1].url}
                                            alt={album.name}
                                        />

                                        {/* body should include song title and the song player  */}
                                        <Card.Body>
                                            <Card.Title style={{ fontSize: "1rem", fontWeight: "bold", whiteSpace: "normal"}} className="bigtexts-style">
                                                {album.name}
                                            </Card.Title>
                                            <iframe
                                                src={album.external_urls.spotify} // Embedded Spotify or YouTube link
                                                width="100%"
                                                height="80"
                                                frameBorder="0"
                                                allow="encrypted-media"
                                                title={album.name}
                                            ></iframe>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </div>

                {/* allow users to contact the artist with ContactForm component */}
                <h2 className="bigtexts-style mt-5">wanna jam ?</h2>
                    <ContactForm />
            </div>
        </>
    );
};

export default ArtistDetail;