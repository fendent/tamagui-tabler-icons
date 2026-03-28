import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconDialpadOff = themed(memo(function (props) {
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
      d: "M7 7h-4v-4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M17 3h4v4h-4l0 -4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M10 6v-3h4v4h-3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 10h4v4h-4l0 -4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M17 13v-3h4v4h-3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M14 14h-4v-4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M10 17h4v4h-4l0 -4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 3l18 18",
      stroke: color
    })]
  });
}));
export { IconDialpadOff };
