import React, { useState } from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import "./movieRow.css";

export const MovieRow = ({ title, items }: any) => {
  let [scrollXList, setScrollXList] = useState(0);

  const handleLeftArrow = () => {
    if (scrollXList <= 0) {
      let value = scrollXList + Math.round(window.innerWidth / 2);
      if (value <= 0) {
        setScrollXList(value);
      } else {
        setScrollXList(0);
      }
    }
  };

  const handleRightArrow = () => {
    let value = scrollXList - Math.round(window.innerWidth / 2);
    let listW = items.results?.length * 150;

    if (window.innerWidth - listW > value) {
      value = window.innerWidth - listW - 60;
    }

    setScrollXList(value);
  };

  return (
    <div className="movieRow">
      <h2 className="movieRow--title">{title}</h2>

      <div className="movieRow--left" onClick={handleLeftArrow}>
        <NavigateBeforeIcon style={{ fontSize: 50 }} />
      </div>

      <div className="movieRow--right" onClick={handleRightArrow}>
        <NavigateNextIcon style={{ fontSize: 50 }} />
      </div>

      <div className="movieRow--listarea">
        <div
          className="movieRow--list"
          style={{
            marginLeft: scrollXList,
            width: items.results?.length * 150,
          }}
        >
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
