import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconHttpQue = themed(memo(function (props) {
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
      d: "M5 8a2 2 0 0 1 2 2v4a2 2 0 1 1 -4 0v-4a2 2 0 0 1 2 -2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M6 15l1 1",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M21 8h-4v8h4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M17 12h2.5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M10 8v6a2 2 0 1 0 4 0v-6",
      stroke: color
    })]
  });
}));
export { IconHttpQue };
