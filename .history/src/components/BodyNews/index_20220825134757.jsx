import React from "react";
import { NewsBar } from "../NewsBar";
import { News } from "../News";
export const BodyNews = () => {
  return (
    <section className="container-section">
      <NewsBar />
      <News />
    </section>
  );
};
