import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconTransformPointTopLeft = themed(memo(function (props) {
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
      d: "M3 4a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 18a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M17 4a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M17 18a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M11 5h2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M5 11v2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M19 11v2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M11 19h2",
      stroke: color
    })]
  });
}));
export { IconTransformPointTopLeft };
