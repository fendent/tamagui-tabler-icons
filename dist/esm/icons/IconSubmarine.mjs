import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconSubmarine = themed(memo(function (props) {
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
      d: "M3 11v6h2l1 -1.5l3 1.5h10a3 3 0 0 0 0 -6h-10l-3 1.5l-1 -1.5h-2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M17 11l-1 -3h-5l-1 3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M13 8v-2a1 1 0 0 1 1 -1h1",
      stroke: color
    })]
  });
}));
export { IconSubmarine };
