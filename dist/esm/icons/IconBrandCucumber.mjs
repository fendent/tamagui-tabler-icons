import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconBrandCucumber = themed(memo(function (props) {
  const {
    color = "black",
    size = 24,
    ...otherProps
  } = props;
  return /* @__PURE__ */jsxs(Svg, {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    ...otherProps,
    children: [/* @__PURE__ */jsx(Path, {
      d: "M20 10.99c-.01 5.52 -4.48 10 -10 10.01v-2.26l-.01 -.01c-4.28 -1.11 -6.86 -5.47 -5.76 -9.75a8 8 0 0 1 9.74 -5.76c3.53 .91 6.03 4.13 6.03 7.78v-.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M10.5 8l-.5 -1",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M13.5 14l.5 1",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9 12.5l-1 .5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M11 14l-.5 1",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M13 8l.5 -1",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M16 12.5l-1 -.5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9 10l-1 -.5",
      stroke: color
    })]
  });
}));
export { IconBrandCucumber };
