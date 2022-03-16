import { deepMerge } from "grommet/utils";
import { grommet } from "grommet";

const myCustomTheme = deepMerge(grommet, {
  global: {
    colors: {
      brand: "#F8D50E",
      secondary: "red",
    },
    font: {
      family: "Roboto",
    },
    breakpoints: {
      small: {
        value: 768,
        borderSize: {
          xsmall: "1px",
          small: "2px",
          medium: "4px",
          large: "6px",
          xlarge: "12px",
        },
        edgeSize: {
          none: "0px",
          hair: "1px",
          xxsmall: "2px",
          xsmall: "3px",
          small: "6px",
          medium: "12px",
          large: "24px",
          xlarge: "48px",
        },
        size: {
          xxsmall: "24px",
          xsmall: "48px",
          small: "96px",
          medium: "192px",
          large: "384px",
          xlarge: "768px",
          full: "100%",
        },
      },
      medium: { value: 1536 },
      large: {},
    },
  },

  button: {
    color: {
      light: "#ffffff",
    },
    border: {
      radius: "6px",
    },
  },
});

export default myCustomTheme;
