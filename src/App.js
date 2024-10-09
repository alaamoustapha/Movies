import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "../src/Routes/Home.jsx";
import Movie from "./Routes/Movie.jsx";
import Contact from "./Routes/Contact.jsx";

// api
/* https://www.omdbapi.com/?s=adventure&apikey=42ef2173 */

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movie" element={<Movie />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
