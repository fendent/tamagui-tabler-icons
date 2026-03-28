import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconFileShredder = themed(memo(function (props) {
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
      d: "M14 3v4a1 1 0 0 0 1 1h4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M5 12v-7a2 2 0 0 1 2 -2h7l5 5v4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 12l18 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M6 16l0 2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M10 16l0 6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M14 16l0 2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M18 16l0 4",
      stroke: color
    })]
  });
}));
export { IconFileShredder };
