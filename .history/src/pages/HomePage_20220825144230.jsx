import { useRef, useLayoutEffect } from "react";
import { Header } from "../components/Header";
import { BodyNews } from "../components/BodyNews";
import { Footer } from "../components/Footer";
import "./homePage.css";
export const HomePage = () => {
  let containerView;
  console.log(containerView);
  console.log(containerView.current);
  window.addEventListener("resize", function () {
    debugger;
    if (window.screen.width > 1000) {
      containerView.current.addClass("display-flex-row container-desktop-view");
    } else {
      containerView.current.removeClass(
        "display-flex-row container-desktop-view"
      );
    }
  });
  useLayoutEffect(() => {
    containerView = useRef(null);
  }, []);
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
