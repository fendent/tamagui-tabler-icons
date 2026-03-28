import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconColumnsOff = themed(memo(function (props) {
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
      d: "M4 6h2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4 10h5.5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4 14h5.5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4 18h5.5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M14.5 6h5.5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M14.5 10h5.5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M18 14h2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M14.5 18h3.5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 3l18 18",
      stroke: color
    })]
  });
}));
export { IconColumnsOff };
