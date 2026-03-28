import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconKeyboardOff = themed(memo(function (props) {
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
      d: "M18 18h-14a2 2 0 0 1 -2 -2v-8a2 2 0 0 1 2 -2h2m4 0h10a2 2 0 0 1 2 2v8c0 .554 -.226 1.056 -.59 1.418",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M6 10l0 .01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M10 10l0 .01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M14 10l0 .01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M18 10l0 .01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M6 14l0 .01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M18 14l0 .01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M10 14l4 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 3l18 18",
      stroke: color
    })]
  });
}));
export { IconKeyboardOff };
