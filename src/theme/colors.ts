import { Colors } from "./types";

export const baseColors = {
  failure: "#A145D6",
  primary: "#406DE9",
  primaryBright: "#668aed",
  primaryDark: "#A145D6",
  secondary: "#40c2e9",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#A145D6",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#DAE9F6",
  backgroundDisabled: "#c4d1dd",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  inputSecondary: "#46557d",
  tertiary: "#EFF4F5",
  text: "#192b5d",
  textDisabled: "#828b93",
  textSubtle: "#46557d",
  borderColor: "#98a3ac",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#40c2e9",
  background: "#2F2F2FF7",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#483f5a",
  inputSecondary: "#66578D",
  primaryDark: "#0098A1",
  tertiary: "#353547",
  text: "#EAE2FC",
  textDisabled: "#666171",
  textSubtle: "#A28BD4",
  borderColor: "#784098",
  card: "#2F2F2FF7",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
