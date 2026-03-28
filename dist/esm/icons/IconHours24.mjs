import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconHours24 = themed(memo(function (props) {
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
      d: "M4 13c.325 2.532 1.881 4.781 4 6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M20 11a8.1 8.1 0 0 0 -15.5 -2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4 5v4h4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 15h2a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-1a1 1 0 0 0 -1 1v1a1 1 0 0 0 1 1h2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M18 15v2a1 1 0 0 0 1 1h1",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M21 15v6",
      stroke: color
    })]
  });
}));
export { IconHours24 };
