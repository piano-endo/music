// const headers = new Headers({
//   "User-Agent"   : "0.x benm@umich.edu"
// });
// const url = 'https://musicbrainz.org/ws/2/genre/all?limit=10&offset=0&fmt=json'



// function Artist() {
//   console.log("Testing artist")
//   return (
//     fetch(url, {
//       method  : 'GET', 
//       headers : headers 
//     })
//     .then(res => res.json())
//     .then(json => console.log(json))
//   )
// }

// export default Artist();

import React, { useEffect, useState } from "react";

function Artist() {

  const headers = new Headers({
    "User-Agent": "0.x pianoe@umich.edu", // Replace with your actual email
  });

  const url = "https://musicbrainz.org/ws/2/genre/all?limit=10&offset=0&fmt=json";
  const [genres, setGenres] = useState(""); //default is empty string and the value can be updated with setGenres
  // const url = "/ws/2/genre/all?limit=10&offset=0&fmt=json"; // just the endpoint because I'm using proxy
  console.log("Attempting to fetch data from:", url);

  fetch(url, {
    method: "GET",
    headers: headers,
  })
    .then((res) => {
      console.log("Raw response:", res);
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      return res.json();
    })
    .then((data) => {
      console.log("Fetched Data:", data["genres"][0]["name"]);
      setGenres(data["genres"][0]["name"])
    })
    .catch((error) => console.error("Error fetching data:", error));

  return (
    <div>
      <h2>Genres</h2>
      <p>{genres}</p>
    </div>
  );
};

export default Artist;