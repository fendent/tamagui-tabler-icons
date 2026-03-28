import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconZoomOutArea = themed(memo(function (props) {
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
      d: "M13 15h4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M10 15a5 5 0 1 0 10 0a5 5 0 1 0 -10 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M22 22l-3 -3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M6 18h-1a2 2 0 0 1 -2 -2v-1",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 11v-1",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 6v-1a2 2 0 0 1 2 -2h1",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M10 3h1",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M15 3h1a2 2 0 0 1 2 2v1",
      stroke: color
    })]
  });
}));
export { IconZoomOutArea };
