import { SpecName } from "../../assets/specifications";
import "./SpecToggler.scss";

type Props = {
  name: SpecName;
  active: boolean;
  handleToggle: (spec: SpecName) => void;
};

function SpecToggler({ name, active, handleToggle }: Props) {
  return (
    <button
      onClick={() => {
        handleToggle(name);
      }}
      className={`spec-toggler ${active ? "active" : ""}`}
    >
      {name.toUpperCase()}
    </button>
  );
}

export default SpecToggler;
