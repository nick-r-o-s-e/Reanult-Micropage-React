import "./Configurator.scss";
import SpecToggler from "./components/SpecToggler/SpecToggler";
import ColorPicker from "./components/ColorPicker/ColorPicker";
import OptionsList from "./components/OptionsList/OptionsList";
import SpecImage from "./components/SpecImage/SpecImage";
import Metric from "./components/Metric/Metric";
import { specs, SpecName, metrics } from "./assets/specifications";
import { useEffect, useState } from "react";

function Configurator() {
  const [activeSpec, setActiveSpec] = useState(
    specs.find((spec) => spec.name == "techno")!
  );

  const [activeColor, setActiveColor] = useState(activeSpec.colors[0]);

  const handleSpecToggle = (specName: SpecName) => {
    setActiveSpec(specs.find((spec) => spec.name == specName)!);
  };

  const handleColorPick = (color: string) => {
    setActiveColor(color);
  };

  //~~~~~ If there is no chosen color for the new picked specification choose first one in the color list ~~~~~//
  useEffect(() => {
    if (!activeSpec.colors.includes(activeColor)) {
      setActiveColor(activeSpec.colors[0]);
    }
  }, [activeSpec]);

  return (
    <div className="expander__section expander__section--config">
      <div className="config__togglers">
        {specs.map((spec) => {
          return (
            <SpecToggler
              handleToggle={handleSpecToggle}
              name={spec.name}
              active={activeSpec.name == spec.name}
            />
          );
        })}
      </div>
      <div className="config__options-wrapper">
        {/* Devide options array in two halfs for row-aligned lists */}
        <OptionsList
          options={activeSpec.options.slice(
            0,
            Math.ceil(activeSpec.options.length / 2)
          )}
        />

        <OptionsList
          options={activeSpec.options.slice(
            Math.ceil(activeSpec.options.length / 2)
          )}
        />
      </div>
      <SpecImage image={activeSpec.images[activeColor]} />
      <div className="config__color-pick">
        <h5 className="config__color-pick__title">Select color</h5>
        <div className="config__color-pick__btns">
          {activeSpec.colors.map((color) => {
            return (
              <ColorPicker
                picked={color == activeColor}
                color={color}
                handleColorPick={handleColorPick}
              />
            );
          })}
        </div>
      </div>
      <div className="config__metrics">
        {metrics.map((metric) => {
          return (
            <Metric
              name={metric.name}
              data={metric.data}
              addition={metric.addition}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Configurator;
