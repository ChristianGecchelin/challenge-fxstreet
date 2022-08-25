import { useRef } from "react";
import { Header } from "../components/Header";
import { BodyNews } from "../components/BodyNews";
import { Footer } from "../components/Footer";
import "./homePage.css";
export const HomePage = () => {
  const containerView = useRef(null);
  window.addEventListener("resize", function () {
    if (window.screen.width > 1000) {
      containerView.current.addClass("display-flex-row container-desktop-view");
    } else {
      document
        .getElementById("container-view")
        .removeClass("display-flex-row container-desktop-view");
    }
  });
  if (window.screen.width > 1000) {
    return (
      <div ref={containerView}>
        <Header />
        <BodyNews />
        <Footer />
      </div>
    );
  } else {
    return (
      <div id="container-view">
        <Header />
        <BodyNews />
        <Footer />
      </div>
    );
  }
};
