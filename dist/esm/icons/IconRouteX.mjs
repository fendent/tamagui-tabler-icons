import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconRouteX = themed(memo(function (props) {
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
      d: "M3 17l4 4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M7 17l-4 4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M17 3l4 4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M21 3l-4 4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M11 19h5.5a3.5 3.5 0 0 0 0 -7h-8a3.5 3.5 0 0 1 0 -7h4.5",
      stroke: color
    })]
  });
}));
export { IconRouteX };
