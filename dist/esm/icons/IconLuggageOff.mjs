import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconLuggageOff = themed(memo(function (props) {
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
      d: "M10 6h6a2 2 0 0 1 2 2v6m0 4a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-10c0 -.546 .218 -1.04 .573 -1.4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9 5a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v1",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M6 10h4m4 0h4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M6 16h10",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9 20v1",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M15 20v1",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 3l18 18",
      stroke: color
    })]
  });
}));
export { IconLuggageOff };
