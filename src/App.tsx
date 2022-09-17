import React, { useEffect, useState } from "react";
import tmdb from "./tmbd";
import ListMovies from "./interfaces/ListMoviesInterface";
import CircularProgress from "@mui/material/CircularProgress";

import "./App.css";
import { MovieRow } from "./components/movieRow";
import { FeatureMovie } from "./components/featureMovie";
import { TabHeader } from "./components/tabHeader";

function App() {
  let [listMovies, setListMovies] = useState<ListMovies[]>([]);
  let [featureData, setFeatureData] = useState({});
  let [blackHeaderTab, setBlackHeaderTab] = useState(false);

  const isEmptyObj = (obj: any) => {
    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        return false;
      }
    }

    return true;
  };

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
      featureData = choosenInfo;
      setFeatureData(featureData);
    };

    loadAll();
  }, []);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlackHeaderTab((state) => true);
      } else {
        setBlackHeaderTab((state) => false);
      }
    };

    window.addEventListener("scroll", scrollListener);
    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  return (
    <div className="page">
      {listMovies.length <= 0 && isEmptyObj(featureData) && (
        <div className="loading">
          <CircularProgress />
        </div>
      )}
      <TabHeader black={blackHeaderTab} />
      {featureData && <FeatureMovie item={featureData} />}
      <section className="lists">
        {listMovies.map((thisList, key) => (
          <div>
            <MovieRow key={key} title={thisList.title} items={thisList.items} />
          </div>
        ))}
      </section>
      <footer>Desenvolvido por Mateus Ranzani utilizando The Movie DB</footer>
    </div>
  );
}

export default App;
