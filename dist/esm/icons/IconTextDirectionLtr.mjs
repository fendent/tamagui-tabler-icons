import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconTextDirectionLtr = themed(memo(function (props) {
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
      d: "M5 19h14",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M17 21l2 -2l-2 -2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M16 4h-6.5a3.5 3.5 0 0 0 0 7h.5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M14 15v-11",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M10 15v-11",
      stroke: color
    })]
  });
}));
export { IconTextDirectionLtr };
