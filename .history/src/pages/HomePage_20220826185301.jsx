import { Header } from "../components/Header";
import { BodyNews } from "../components/BodyNews";
import { Footer } from "../components/Footer";
import "./homePage.css";
export const HomePage = () => {
  if (window.screen.width < 1000) {
    return (
      <div className="container-desktop-view">
        <Header />
        <BodyNews />
        <Footer />
      </div>
    );
  } else {
    return (
      <div className="container-desktop-view">
        <Header />
        <div>
          <BodyNews />
          <Footer />
        </div>
      </div>
    );
  }
};
