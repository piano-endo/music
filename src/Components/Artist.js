import {Artists} from "./util/artist_data";
import React, { useState, useEffect } from "react";
import Genre from "./Genre";
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {useNavigate} from 'react-router-dom';
import './Button.css'
import './Tag.css'
import './Overflow.css'
import './Container.css'

const Artist = () => {
    const navigate = useNavigate()
    const [genreList, setGenreList] = useState([]);
    const [filteredArtists, setFilteredArtists] = useState(Artists.artists)
    const [selectedGenre, setSelectedGenre] = useState(null);
    // const addUniqueGenre = (genre) => {
    //     if(!genreList.includes(genre)) {
    //       setGenreList([...genreList, genre])
    //     }
    //     console.log(genreList);
    // };
    // const allGenres = Artists.artists.map((artist) => {
    //     artist.genres.map((genre) => {
    //       addUniqueGenre(genre);
    //     })
    // })
    const allGenres = Array.from(
        new Set(Artists.artists.flatMap((artist) => artist.genres))
    );
    useEffect(() => {
        setFilteredArtists(
            selectedGenre
                ? Artists.artists.filter((artist)=> artist.genres.includes(selectedGenre))
                : Artists.artists
        );
    }, [selectedGenre]);

    return (
        <div className="container mt-5 mb-5">
            <Genre
                genreList = {allGenres}
                onGenreSelect = {setSelectedGenre}
                className = "button-style"
            />
            <Row className="mt-5">
            {filteredArtists.map((artist) => (
                <Col xs={12} md={4} className="mb-5">
                    <Card>
                        <Card.Img variant="top" src={artist.images[0].url} />
                        <Card.Body>
                            <Card.Title>{artist.name}</Card.Title>
                            <div className="mb-2 container" style={{ maxHeight: "25px", overflowY: "auto", whiteSpace: "nowrap"}}>
                                <Stack>
                                    <Col className="overflow-tag mr-3">
                                        {artist.genres.map((genre)=>
                                            <Badge className="tag-style">{genre}</Badge>
                                        )}
                                    </Col>
                                </Stack>
                            </div>
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
    )
}
export default Artist;