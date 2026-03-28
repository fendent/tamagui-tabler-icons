import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconReorder = themed(memo(function (props) {
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
      d: "M3 16a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M10 16a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M17 16a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M5 11v-3a3 3 0 0 1 3 -3h8a3 3 0 0 1 3 3v3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M16.5 8.5l2.5 2.5l2.5 -2.5",
      stroke: color
    })]
  });
}));
export { IconReorder };
