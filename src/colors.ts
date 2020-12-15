import type { TToken, TStyle } from "./tokens";

export type TColorId = "colors";
export type TColorNames = "default" | "inverted" | "inactive" | "highlighted";

export type TColorToken = TToken & {
  id: {
    type: TColorId;
    name: TColorNames;
  };
  styles: TStyle[];
};

const textColor = "#000";
const backgroundColor = "#fff";
const highlightColor = "red";
const shaderColor = "gray";

const defaultColorPair: TColorToken = {
  id: {
    type: "colors",
    name: "default",
  },
  styles: [
    {
      css: {
        color: textColor,
        backgroundColor: backgroundColor,
      },
    },
  ],
};

const invertedColorPair: TColorToken = {
  id: {
    type: "colors",
    name: "inverted",
  },
  styles: [
    {
      css: {
        color: backgroundColor,
        backgroundColor: textColor,
      },
    },
  ],
};

const inactiveColorPair: TColorToken = {
  id: {
    type: "colors",
    name: "inactive",
  },
  styles: [
    {
      css: {
        color: shaderColor,
        backgroundColor: textColor,
      },
    },
  ],
};

const highlightedColorPair: TColorToken = {
  id: {
    type: "colors",
    name: "highlighted",
  },
  styles: [
    {
      css: {
        color: highlightColor,
        backgroundColor: textColor,
      },
    },
  ],
};

const colors: TColorToken[] = [
  defaultColorPair,
  invertedColorPair,
  inactiveColorPair,
  highlightedColorPair,
];
export { colors };
