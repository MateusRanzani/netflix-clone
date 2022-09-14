import React from "react";
import "./featureMovie.css";

export const FeatureMovie = ({ item }: any) => {
  return (
    <section className="featured">
      <div>{item.original_name}</div>
    </section>
  );
};
