import './App.css';
import Artist from './Components/Artist'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ArtistDetail from "./Components/ArtistDetail";

// use react router API
const App = () => {
  return (
        // set basename like below according to https://stackoverflow.com/questions/47601290/react-router-url-issues-after-deployment
      <BrowserRouter basename={process.env.PUBLIC_URL}>
            {/* refer to this website for setting different paths - https://www.geeksforgeeks.org/reactjs-router/ */}

          {/* container for all routes */}
          <Routes>
                {/* single route and a component to render at destination */}
              <Route path="/" element={<Artist />} />
              <Route path="/artist/:id" element={<ArtistDetail />} />
          </Routes>

      </BrowserRouter>
  );
};

export default App;
