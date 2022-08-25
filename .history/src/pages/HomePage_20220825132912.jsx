import React from "react";
import { Header } from "../components/Header";
import { BodyNews } from "../components/BodyNews";
import { Footer } from "../components/Footer";
export const HomePage = () => {
  console.log(window.screen);
  return (
    <div>
      <Header />
      <BodyNews />
      <Footer />
    </div>
  );
};
