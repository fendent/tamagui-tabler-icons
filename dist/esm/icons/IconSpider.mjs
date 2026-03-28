import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconSpider = themed(memo(function (props) {
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
      d: "M5 4v2l5 5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M2.5 9.5l1.5 1.5h6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4 19v-2l6 -6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M19 4v2l-5 5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M21.5 9.5l-1.5 1.5h-6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M20 19v-2l-6 -6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M8 15a4 4 0 1 0 8 0a4 4 0 1 0 -8 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M10 9a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",
      stroke: color
    })]
  });
}));
export { IconSpider };
