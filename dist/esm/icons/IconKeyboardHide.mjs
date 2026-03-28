import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconKeyboardHide = themed(memo(function (props) {
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
      d: "M2 5a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-16a2 2 0 0 1 -2 -2l0 -8",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M6 7l0 .01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M10 7l0 .01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M14 7l0 .01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M18 7l0 .01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M6 11l0 .01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M18 11l0 .01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M10 11l4 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M10 21l2 -2l2 2",
      stroke: color
    })]
  });
}));
export { IconKeyboardHide };
