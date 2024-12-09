import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import './Button.css'

// takes a list of unique genres and a function to control which genre is selected at the moment

function Genre({genreList, onGenreSelect}) {
  // manage the label for the dropdown - default is all genres
  const [selectedLabel, setSelectedLabel] = useState("All genres");

  // if genre is empty, assume it's all genre
  // otherwise set label to the name of the selected genre
  const handleSelect = (genre) => {
    setSelectedLabel(genre === "" ? "All genres" : genre); // Update label
    onGenreSelect(genre); // Notify parent component
  };

  return (
    // refer to React Bootstrap
    <Dropdown>
      <Dropdown.Toggle id="dropdown-basic" className="button-style">
        {/* show which genre is currently selected */}
        {selectedLabel}
      </Dropdown.Toggle>

      <Dropdown.Menu>

        {/* first item is "all genres"
        generate more items by going through each element in the list of unique genres */}

        <Dropdown.Item onClick={() => handleSelect("")}>
          All genres
        </Dropdown.Item>
        {genreList?.map((genre, index) => (
          <Dropdown.Item
            key={index}
            onClick={() => handleSelect(genre)}
          >
            {genre}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default Genre;