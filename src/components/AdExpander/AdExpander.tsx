import "./AdExpander.scss";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import Configurator from "./components/Configurator/Configurator";
import Banner from "./components/Banner/Banner";
import Card from "./components/Carousel/Card/Card";
import Carousel from "./components/Carousel/Carousel";
import Footer from "./components/Footer/Footer";
import { cardsData } from "./carouselCardsData";
import StickyCTA from "./components/StickyCTA/StickyCTA";

function AdExpander() {
  return (
    <div className="expander">
      <VideoPlayer />

      <Configurator />

      <Banner />

      <Carousel show={3}>
        {cardsData.map((data) => {
          return <Card data={data} />;
        })}
      </Carousel>

      <Footer />

      <StickyCTA />
    </div>
  );
}

export default AdExpander;
