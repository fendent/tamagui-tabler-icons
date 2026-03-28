import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconVectorTriangle = themed(memo(function (props) {
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
      d: "M10 5a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 18a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M17 18a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M6.5 17.1l5 -9.1",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M17.5 17.1l-5 -9.1",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M7 19l10 0",
      stroke: color
    })]
  });
}));
export { IconVectorTriangle };
