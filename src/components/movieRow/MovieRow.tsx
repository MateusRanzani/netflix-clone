import React from "react";
import ListMovies from "../../interfaces/ListMoviesInterface";
import "./movieRow.css";

export const MovieRow = ({ title, items }: any) => {
  return (
    <div className="movieRow">
      <h2 className="movieRow--title">{title}</h2>
      <div className="movieRow--listarea">
        <div className="movieRow--list">
          {items.results?.length > 0 &&
            items.results.map((item: any, key: number) => (
              <div className="movieRow--item" key={key}>
                <img
                  src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                  alt={item.original_title}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
