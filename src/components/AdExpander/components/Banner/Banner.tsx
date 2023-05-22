import "./Banner.scss";
import bannerImage from "./images/banner.png";

function Banner() {
  return (
    <div
      className="expander__section expander__section--banner"
      style={{ backgroundImage: `url(${bannerImage})` }}
    >
      <div className="banner__title">
        <h1 className="banner__title__heading ">Genopfindelse</h1>
        <h1 className="banner__title__heading outlined">af elbilen</h1>
      </div>
      <div className="banner__discription">
        <h4 className="banner__discription__heading">OPLADNINGSLØSNINGER</h4>
        
        <p className="banner__discription__text">
          Der står et bredt udvalg af brugertilpassede løsninger til din
          rådighed for opladning i hjemmet, på arbejdet eller på vejen. Renault
          Megane E-Tech 100% electric leveres med et mode 3 type 2 kabel, der
          kan bruges til en Wallbox i hjemmet eller på en offentlig ladestation.
        </p>
        <div className="btn-wrapper">
          <a target="_blank" href="https://showheroes.com/">
            <button className="banner__discription__btn">
              LÆS MERE OM OPLADNING
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Banner;
