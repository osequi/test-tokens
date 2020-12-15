import type { TToken } from "./tokens";

export type TLinkId = "link";
export type TLinkNames = "default";

const defaultLink: TToken = {
  id: {
    type: "link",
    name: "default",
  },
  styles: [
    {
      state: "default",
      tokens: [
        {
          type: "colors",
          name: "default",
        },
        {
          type: "font",
          name: "Nimbus Sans Regular",
        },
        {
          type: "scale",
          name: "modular",
          props: 2,
        },
      ],
      css: {
        textDecoration: "underline",
      },
      responsive: [
        {
          breakpoint: "mobile",
          tokens: [
            {
              type: "colors",
              name: "inverted",
            },
            {
              type: "font",
              name: "Default",
            },
          ],
          css: {
            textTransform: "uppercase",
          },
        },
      ],
    },
    {
      state: "active",
      tokens: [
        {
          type: "colors",
          name: "highlighted",
        },
      ],
      css: {
        textDecoration: "line-through",
      },
    },
    {
      state: "visited",
      tokens: [
        {
          type: "colors",
          name: "inactive",
        },
      ],
      css: {
        textDecoration: "underline",
      },
    },
  ],
};

const links: TToken[] = [defaultLink];
export { links };
