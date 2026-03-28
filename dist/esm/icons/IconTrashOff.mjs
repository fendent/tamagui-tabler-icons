import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconTrashOff = themed(memo(function (props) {
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
      d: "M3 3l18 18",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4 7h3m4 0h9",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M10 11l0 6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M14 14l0 3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l.077 -.923",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M18.384 14.373l.616 -7.373",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9 5v-1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3",
      stroke: color
    })]
  });
}));
export { IconTrashOff };
