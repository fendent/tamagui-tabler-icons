import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconLocationDiscount = themed(memo(function (props) {
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
      d: "M12.797 19.595l-2.797 -5.595l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5l-3.548 9.826",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M16 21l5 -5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M21 21v.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M16 16v.01",
      stroke: color
    })]
  });
}));
export { IconLocationDiscount };
