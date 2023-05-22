import "./StickyCTA.scss";
import logoImg from "../../../../assets/images/logo.png";

function StickyCTA() {
  return (
    <div className="expander__section expander__section--cta">
      <img src={logoImg} alt="" className="cta__logo" />
      <div className="cta__actions">
        <a target="_blank" href="https://showheroes.com/">
          <button className="cta__actions__btn action-btn">
            Find forhandler
          </button>
        </a>
        <a target="_blank" href="https://showheroes.com/">
          <button className="cta__actions__btn action-btn">
            BOOK EN PRØVETUR
          </button>
        </a>
      </div>
    </div>
  );
}

export default StickyCTA;
