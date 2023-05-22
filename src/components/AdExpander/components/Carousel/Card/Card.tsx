import "./Card.scss";

type Props = {
  data: {
    image: string;
    title: string;
    spec: {
      name: string;
      metrics: string[];
    };
    price: string;
    additions: { name: string; data: string }[];
  };
};

function Card({ data }: Props) {
  const { image, title, spec, price, additions } = data;

  return (
    <div className="carousel__card-wrapper">
      <a target="_blank" href="https://showheroes.com/">
        <div className="carousel__card">
          <div className="carousel__card__header">
            <span>Gælder kun lagerbiler</span>
          </div>
          <div className="carousel__card__image">
            <img src={image} alt="" />
          </div>
          <div className="carousel__card__content">
            <h3 className="carousel__card__content__title">{title}</h3>
            <span className="carousel__card__content__spec">
              <strong>{spec.name} </strong> {spec.metrics.join(", ")}
            </span>
            <div className="carousel__card__content__picker">
              <h4>
                {price} &nbsp;
                <span className="carousel__card__content__picker__units">
                  Kr./md.
                </span>
              </h4>
              <button className="carousel__card__content__picker__btn">
                Vælg
              </button>
            </div>
            <table className="carousel__card__content__addition">
              <tbody>
                {additions.map((addition) => {
                  return (
                    <tr>
                      <td>{addition.name}:</td>
                      <td>{addition.data}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </a>
    </div>
  );
}

export default Card;
