import React from "react";
import { Header } from "../components/Header";
import { BodyNews } from "../components/BodyNews";
import { Footer } from "../components/Footer";
import "./homePage.css";
export const HomePage = () => {
  return (
    <div
      className={
        window.screen.width > 1000
          ? "display-flex-row container-desktop-view"
          : ""
      }
    >
      <Header />
      <BodyNews />
      <Footer />
    </div>
  );
};
