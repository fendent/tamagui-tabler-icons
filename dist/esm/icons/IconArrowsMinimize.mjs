import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconArrowsMinimize = themed(memo(function (props) {
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
      d: "M5 9l4 0l0 -4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 3l6 6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M5 15l4 0l0 4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 21l6 -6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M19 9l-4 0l0 -4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M15 9l6 -6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M19 15l-4 0l0 4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M15 15l6 6",
      stroke: color
    })]
  });
}));
export { IconArrowsMinimize };
