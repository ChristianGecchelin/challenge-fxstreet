import { Header } from "../components/Header";
import { BodyNews } from "../components/BodyNews";
import { Footer } from "../components/Footer";
import { DesktopNav } from "../components/DesktopNav";
import "./homePage.css";

export const HomePage = () => {
  return (
    <div className="container-desktop-view">
      <Header />
      <div className="display-flex-row body-desktop-view">
        <DesktopNav />
        <BodyNews />
        <Footer />
      </div>
    </div>
  );
};
