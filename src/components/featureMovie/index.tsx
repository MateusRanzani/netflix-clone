import React from "react";
import "./featureMovie.css";

export const FeatureMovie = ({ item }: any) => {
  let firstDate = new Date(item.first_air_date);
  let genres = [];

  const isEmptyObj = (obj: any) => {
    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        return false;
      }
    }

    return true;
  };

  for (let i in item.genres) {
    genres.push(item.genres[i].name);
  }

  return (
    <>
      {!isEmptyObj(item) && (
        <section
          className="featured"
          style={{
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
          }}
        >
          <div className="featured--vertical">
            <div className="featured--horizontal">
              <div className="featured--name">{item.original_name}</div>
              <div className="featured--info">
                <div className="featured--points">
                  {item.vote_average} pontos
                </div>
                <div className="featured--year">
                  {!isNaN(firstDate.getFullYear())
                    ? firstDate.getFullYear()
                    : "..."}
                </div>
                <div className="featured--seasons">
                  {item.number_of_seasons} temporada
                  {item.number_of_seasons > 1 ? "s" : ""}
                </div>
                <div className="featured--description">{item.overview}</div>
                <div className="featured--buttons">
                  <a className="featured--watchButton" href={`/watch/${item.id}`}>► Assistir</a>
                  <a className="featured--myList" href={`/list/add/${item.id}`}>+ Minha lista</a>
                </div>
                <div className="featured--genres">
                  <strong>Gêneros:</strong> {genres.join(", ")}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};
