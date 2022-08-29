import React from "react";
import { NewsBar } from "../NewsBar";
import { News } from "../News";
import "./bodyNews.css";
export const BodyNews = () => {
  return (
    <section className="container-section">
      <NewsBar />
      <News />
    </section>
  );
};
