import {Artists} from "./util/artist_data";
import React, { useState, useEffect } from "react";
import Genre from "./Genre";
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Logo from "./Logo";
import {useNavigate} from 'react-router-dom';
import './Button.css'
import './Tag.css'
import './Overflow.css'
import './Container.css'

const Artist = () => {
    // use React Router API to redirect users to different pages by specifying a path
    const navigate = useNavigate()

    // manage artists to display
    const [filteredArtists, setFilteredArtists] = useState(Artists.artists)
    // manage genres on selection
    const [selectedGenre, setSelectedGenre] = useState(null);
    // a list of unique genres
    const allGenres = Array.from(
        new Set(Artists.artists.flatMap((artist) => artist.genres))
    );

    // update value for filteredArtists whenever selectedGenre gets updated
    // if no genre has been selected, show all artusts
    // if a genre has been selected, only show artists with corresponding artists
    useEffect(() => {
        setFilteredArtists(
            selectedGenre
                ? Artists.artists.filter((artist)=> artist.genres.includes(selectedGenre))
                : Artists.artists
        );
    }, [selectedGenre]);

    return (
        <>
            {/* header with a logo */}
            <Row>
                <Col className="pe-0">
                    <Logo />
                </Col>
            </Row>

            {/* leave a little bit of space top and bottom */}
            <div className="container mt-5 mb-5">
                <h1 className="bigtexts-style">Meet artists on campus</h1>

                {/* Allow user to filter artists by genre using Genre component */}
                <Genre
                    genreList = {allGenres}
                    onGenreSelect = {setSelectedGenre}
                    className = "button-style"
                />

                {/* go through every artist with matching selected genre */}
                {/* for small screen, each card element should take 100% of the parent width,
                for bigger screen, each row has 4 cards */}
                {/* refer to Card component in react bootstrap */}
                <Row className="mt-5">
                    {filteredArtists.map((artist) => (
                        
                        <Col xs={12} md={3} className="mb-5">

                            <Card>
                                <Card.Img variant="top" src={artist.images[0].url} />
                                <Card.Body>
                                    <Card.Title>{artist.name}</Card.Title>
                                    {/* display music genres for the artist using Badge component */}
                                    {/* allow horizontal scrolling */}
                                    <div className="mb-2 container" style={{ maxHeight: "25px", overflowY: "auto", whiteSpace: "nowrap"}}>
                                        <Stack>
                                            <Col className="overflow-tag">
                                                {artist.genres.map((genre)=>
                                                    <Badge className="tag-style me-1">{genre}</Badge>
                                                )}
                                            </Col>
                                        </Stack>
                                    </div>

                                    {/* navigate to artist detail page with react router by using unique identifier (artist ID) */}
                                    <button
                                        className="btn button-style"
                                        onClick={() => navigate(`/artist/${artist.id}`)}
                                    >
                                        Learn More
                                    </button>
                                </Card.Body>
                            </Card>

                        </Col>

                    ))}
                </Row>
            </div>
        </>
    )
}
export default Artist;