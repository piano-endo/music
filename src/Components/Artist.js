// import React, {useState} from "react";

// function Artist() {
//     const headers = new Headers({
//         "User-Agent": "0.x pianoe@umich.edu", // Replace with your actual email
//     });

//     const url = "https://musicbrainz.org/ws/2/artist?query=country:GB%20AND%20gender:female%20AND%20type:person&fmt=json";
//     const baseUrl = "https://musicbrainz.org/ws/2/artist/"
//     const endUrl = "&fmt=json"
//     const [artistsId, setArtistsId] = useState([])

//     fetch(url, {
//         method: "GET",
//         headers: headers,
//     })
//     .then((res)=>{
//         return(res.json())
//     })
//     .then((json)=>{
//         json["artists"].map((artist)=>{
//             artistsId.push(baseUrl + artist["id"] + endUrl);
//         })
//         setArtistsId(artistsId)
//     })
// }

// export default Artist;

import React, { useState, useEffect } from "react";

function Artist() {
  const headers = new Headers({
    "User-Agent": "0.x pianoe@umich.edu", // Replace with your actual email
    Accept: "application/json",
  });

  const url =
    "https://musicbrainz.org/ws/2/artist?query=country:GB%20AND%20gender:female%20AND%20type:person&fmt=json";
  const baseUrl = "https://musicbrainz.org/ws/2/artist/";
  const endUrl = "?inc=releases&fmt=json";

  const [artistsId, setArtistsId] = useState([]);
  const [artists, setArtists] = useState([]);

  // Fetch artist IDs
  useEffect(() => {
    fetch(url, {
      method: "GET",
      headers: headers,
    })
      .then((res) => res.json())
      .then((json) => {
        const ids = json["artists"].map((artist) => baseUrl + artist["id"] + endUrl);
        setArtistsId(ids); // Update the state with the list of artist URLs
      })
      .catch((error) => console.error("Error fetching artist data:", error));
  }, []); // Empty dependency array ensures this runs only once

  // Fetch data for each artist ID
  useEffect(() => {
    if (artistsId.length > 0) {
      const fetchArtistData = async () => {
        const fetchedArtists = [];
        for (const artistUrl of artistsId) {
          try {
            const res = await fetch(artistUrl, {
              method: "GET",
              headers: headers,
            });
            const data = await res.json();
            fetchedArtists.push(data); // Collect artist data
          } catch (error) {
            console.error("Error fetching artist data:", error);
          }
        }
        setArtists(fetchedArtists); // Update state with all fetched artist data
        console.log(fetchedArtists);
      };

      fetchArtistData();
    }
  }, [artistsId]); // Runs whenever artistsId is updated

  return (
    // <div>
    //   <h2>Artists</h2>
    //   <ul>
    //     {artists.map((artist, index) => (
    //       <li key={index}>
    //         <h3>{artist.name}</h3>
    //         <p>{artist.disambiguation || "No additional info available"}</p>
    //       </li>
    //     ))}
    //   </ul>
    // </div>
    artists.map((artist, index) => (
        <div class="card text-center">
            <div class="card-body">
                <h5 class="card-title">{artist.name}</h5>
                <p class="card-text">{artist.releases.length}</p>
                <a href="#" class="btn btn-primary">More Details</a>
            </div>
            <div class="card-footer text-body-secondary">
                explore
            </div>
        </div>
    ))
  );
}

export default Artist;

