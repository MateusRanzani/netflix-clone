import React, { useEffect, useState } from "react";
import tmdb from "./tmbd";
import ListMovies from "./interfaces/ListMoviesInterface";

import "./App.css";
import { MovieRow } from "./components/movieRow/MovieRow";

function App() {
  let [listMovies, setListMovies] = useState<ListMovies[]>([]);

  useEffect(() => {
    const loadAll = async () => {
      let list = await tmdb.getHomeList();
      setListMovies((state) => list);
    };
    loadAll();
  }, []);

  return (
    <div className="page">
      <section className="lists">
        {listMovies.map((thisList, key) => (
          <div>
            <MovieRow key={key} title={thisList.title} items={thisList.items} />
          </div>
        ))}
      </section>
    </div>
  );
}

export default App;
