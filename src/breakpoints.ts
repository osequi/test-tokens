import type { TToken } from "./tokens";

export type TBreakpointId = "breakpoint";
export type TBreakpointNames = "mobile" | "tablet" | "laptop" | "desktop";

const mobile: TToken = {
  id: {
    type: "breakpoint",
    name: "mobile",
  },
  styles: [
    {
      css: {
        "@media(min-width: 768px)": {},
      },
    },
  ],
};

const tablet: TToken = {
  id: {
    type: "breakpoint",
    name: "tablet",
  },
  styles: [
    {
      css: {
        "@media(min-width: 1024px)": {},
      },
    },
  ],
};

const laptop: TToken = {
  id: {
    type: "breakpoint",
    name: "laptop",
  },
  styles: [
    {
      css: {
        "@media(min-width: 1280px)": {},
      },
    },
  ],
};

const desktop: TToken = {
  id: {
    type: "breakpoint",
    name: "desktop",
  },
  styles: [
    {
      css: {
        "@media(min-width: 1600px)": {},
      },
    },
  ],
};

const breakpoints: TToken[] = [mobile, tablet, laptop, desktop];
export { breakpoints };
