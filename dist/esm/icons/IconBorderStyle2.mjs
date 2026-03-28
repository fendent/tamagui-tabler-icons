import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconBorderStyle2 = themed(memo(function (props) {
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
      d: "M4 18v.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M8 18v.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 18v.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M16 18v.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M20 18v.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M18 12h2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M11 12h2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4 12h2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4 6h16",
      stroke: color
    })]
  });
}));
export { IconBorderStyle2 };
