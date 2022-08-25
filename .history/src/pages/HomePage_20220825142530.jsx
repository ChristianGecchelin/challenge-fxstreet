import React from "react";
import { Header } from "../components/Header";
import { BodyNews } from "../components/BodyNews";
import { Footer } from "../components/Footer";
import "./homePage.css";
export const HomePage = () => {
  if (window.screen.width > 1000) {
    return (
      <div className="display-flex-row container-desktop-view">
        <Header />
        <BodyNews />
        <Footer />
      </div>
    );
  } else {
    return (
      <div>
        <Header />
        <BodyNews />
        <Footer />
      </div>
    );
  }
};
