import { technoImage, equilibreImage, iconicImage } from "./specImages";

const specNames = ["techno", "equilibre", "iconic"] as const;

export type SpecName = (typeof specNames)[number];

export const specs: {
  name: SpecName;
  options: string[];
  colors: string[];
  images: { [key: string]: string };
}[] = [
  {
    name: "techno",
    options: [
      "20'' soren alloy wheels",
      "Adaptive cruise control with speed limiter",
      "Multisense: customisable driving modes & interior ambient lighting (48 colours)",
      "Traffic sign recognition",
    ],
    colors: ["black", "blue", "red", "white", "grey-dark"],
    images: technoImage,
  },
  {
    name: "equilibre",
    options: [
      "18'' oston alloy wheels",
      "9'' openR link multimedia system with Arkamys audio system with 4 speakers",
      "12.3'' driver information display cluster",
      "Driver & passenger heated seats",
    ],
    colors: ["black", "blue", "red", "white", "grey-light", "grey-dark"],
    images: equilibreImage,
  },
  {
    name: "iconic",
    options: [
      "20'' enos alloy wheels",
      "9'' openR link multimedia system: navigation, Google services, harman kardon audio with 9 speakers",
      "around view 3D camera",
      "heat pump",
      "Heat pump maximises driving range in cold weather, up to 9%",
    ],
    colors: ["black", "blue", "red", "white", "grey-light"],
    images: iconicImage,
  },
];

export const metrics = [
  { name: "engine", data: "160 kW", addition: "or 220 hp1" },
  { name: "acceleration", data: "7,4 s", addition: "0-100 km/h" },
  { name: "up to", data: "442 km", addition: "range (WLTP)3'" },
  { name: "up to", data: "300 km", addition: "regained range of 30 min" },
];
