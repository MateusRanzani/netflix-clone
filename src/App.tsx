import React, { useEffect, useState } from "react";
import tmdb from "./tmbd";
import ListMovies from "./interfaces/ListMoviesInterface";

import "./App.css";
import { MovieRow } from "./components/movieRow";
import { FeatureMovie } from "./components/featureMovie";
import { TabHeader } from "./components/tabHeader";

function App() {
  let [listMovies, setListMovies] = useState<ListMovies[]>([]);
  let [featureData, setFeatureData] = useState({});

  useEffect(() => {
    const loadAll = async () => {
      let list = await tmdb.getHomeList();
      listMovies = list;
      setListMovies(listMovies);

      let originals = list.filter((item) => item.slug === "originals");
      let randomChosen = Math.floor(
        Math.random() * originals[0].items.results.length
      );
      let chosen = originals[0].items.results[randomChosen];
      let choosenInfo = await tmdb.getMovieInfo(chosen.id, "tv");
      setFeatureData((state) => choosenInfo);
    };

    loadAll();
  }, []);

  return (
    <div className="page">
      <TabHeader />
      {featureData && <FeatureMovie item={featureData} />}
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
