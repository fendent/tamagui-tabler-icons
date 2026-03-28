import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconPaywall = themed(memo(function (props) {
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
      d: "M13 21h-6a2 2 0 0 1 -2 -2v-6a2 2 0 0 1 2 -2h10",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M8 11v-4a4 4 0 1 1 8 0v4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M21 15h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M19 21v1",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M19 14v1",
      stroke: color
    })]
  });
}));
export { IconPaywall };
