import "./ColorPicker.scss";
import { colorPickerBg } from "../../assets/colorPickerImg";

type Props = {
  color: string;
  handleColorPick: (color: string) => void;
  picked: boolean;
};

function ColorPicker({ color, handleColorPick, picked }: Props) {
  return (
    <button
      className={`config__color-pick__btn ${picked ? "picked" : ""}`}
      onClick={() => {
        handleColorPick(color);
      }}
      style={{
        backgroundImage: `url(${
          colorPickerBg[color as keyof typeof colorPickerBg]
        })`,
      }}
    ></button>
  );
}

export default ColorPicker;
