import { Header } from "../components/Header";
import { BodyNews } from "../components/BodyNews";
import { Footer } from "../components/Footer";
import "./homePage.css";
export const HomePage = () => {
  return (
    <div className="container-desktop-view">
      {
        window.screen.width<1000?<Header />
        <BodyNews />
        <Footer />:<Header />
        <BodyNews />
        <Footer />
      }
      
    </div>
  );
};
