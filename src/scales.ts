import ms from "modularscale-js";

import type { TToken } from "./tokens";

export type TScaleId = "scale";
export type TScaleNames = "linear" | "modular";

const linear = (value = 1): TToken => {
  return {
    id: {
      type: "scale",
      name: "linear",
      props: value,
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
      props: value,
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

const scales: TToken[] = [linear(4), modular(3)];
export { scales };
