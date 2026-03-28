import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconCreditCardOff = themed(memo(function (props) {
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
      d: "M3 3l18 18",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9 5h9a3 3 0 0 1 3 3v8a3 3 0 0 1 -.128 .87",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M18.87 18.872a3 3 0 0 1 -.87 .128h-12a3 3 0 0 1 -3 -3v-8c0 -1.352 .894 -2.495 2.124 -2.87",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 11l8 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M15 11l6 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M7 15l.01 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M11 15l2 0",
      stroke: color
    })]
  });
}));
export { IconCreditCardOff };
