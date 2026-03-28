import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconDevices2 = themed(memo(function (props) {
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
      d: "M10 15h-6a1 1 0 0 1 -1 -1v-8a1 1 0 0 1 1 -1h6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M13 5a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1l0 -14",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M7 19l3 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M17 8l0 .01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M16 16a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9 15l0 4",
      stroke: color
    })]
  });
}));
export { IconDevices2 };
