import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconScreenshot = themed(memo(function (props) {
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
      d: "M7 19a2 2 0 0 1 -2 -2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M5 13v-2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M5 7a2 2 0 0 1 2 -2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M11 5h2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M17 5a2 2 0 0 1 2 2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M19 11v2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M19 17v4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M21 19h-4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M13 19h-2",
      stroke: color
    })]
  });
}));
export { IconScreenshot };
