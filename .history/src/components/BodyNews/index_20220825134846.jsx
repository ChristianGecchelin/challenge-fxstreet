import React from "react";
import { NewsBar } from "../NewsBar";
import { News } from "../News";
import "./bodyNews.css";
export const BodyNews = () => {
  return (
    <section className={window.screen.width > 1000 ? "container-section" : ""}>
      <NewsBar />
      <News />
    </section>
  );
};
