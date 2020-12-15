import ms from "modularscale-js";

import type { TToken } from "./tokens";

export type TScaleId = "scale";
export type TScaleNames = "linear" | "modular";

const linear = (value = 1): TToken => {
  return {
    id: {
      type: "scale",
      name: "linear",
    },
    styles: [
      {
        css: {
          fontSize: `${value + 1}em`,
        },
      },
    ],
  };
};

const modularScaleSettings = {
  base: [1],
  ratio: 1.25,
};

const modular = (value = 1): TToken => {
  return {
    id: {
      type: "scale",
      name: "modular",
    },
    styles: [
      {
        css: {
          fontSize: `${ms(value, modularScaleSettings)}em`,
        },
      },
    ],
    settings: modularScaleSettings,
  };
};

const scales = (value: number = 1): TToken[] => [linear(value), modular(value)];
export { scales };
