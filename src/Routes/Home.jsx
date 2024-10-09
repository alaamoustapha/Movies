import React, { useEffect, useState } from "react";
import Header from "../Components/Header/Header";
import TopHome from "../Components/TopHome/TopHome";
import Upcoming from "../Components/Upcoming/Upcoming";

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchApi();
  }, []);

  async function fetchApi() {
    const res = await fetch(
      "https://www.omdbapi.com/?s=adventure&apikey=42ef2173"
    );
    const data = await res.json();
    setMovies(data.Search);
  }
  return (
    <div>
      <Header />
      <TopHome />
      <Upcoming movies={movies} />
    </div>
  );
}

export default Home;
