import "./Metric.scss";

type Props = {
  name: string;
  data: string;
  addition: string;
};

function Metric({ name, data, addition }: Props) {
  return (
    <div className="cofig__metric">
      <span className="config__metric__text">{name}</span>
      <h3 className="config__metric__data">{data}</h3>
      <span className="config__metric__text">{addition}</span>
    </div>
  );
}

export default Metric;
