import "./OptionsList.scss";

type Props = {
  options: string[];
};

function OptionsList({ options }: Props) {
  return (
    <ul className="config__options">
      {options.map((option) => {
        return <li className="config__options__item">{option}</li>;
      })}
    </ul>
  );
}

export default OptionsList;
