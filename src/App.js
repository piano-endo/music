import logo from './icon.svg';
import './App.css';
import Artist from './Components/Artist'
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ArtistDetail from "./Components/ArtistDetail";

// function App() {

//   <div className="App">
//     <Artist />

//   </div>
// }

const App = () => {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Artist />} />
              <Route path="/artist/:id" element={<ArtistDetail />} />
          </Routes>
      </BrowserRouter>
  );
};

export default App;
