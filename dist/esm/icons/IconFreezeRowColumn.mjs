import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconFreezeRowColumn = themed(memo(function (props) {
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
      d: "M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M15 3l-12 12",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9.5 3l-6 6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M20 3.5l-5.5 5.5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9 15l-5 5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M21 9h-12v12",
      stroke: color
    })]
  });
}));
export { IconFreezeRowColumn };
