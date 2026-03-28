import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconStethoscope = themed(memo(function (props) {
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
      d: "M6 4h-1a2 2 0 0 0 -2 2v3.5a5.5 5.5 0 0 0 11 0v-3.5a2 2 0 0 0 -2 -2h-1",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M8 15a6 6 0 1 0 12 0v-3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M11 3v2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M6 3v2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M18 10a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",
      stroke: color
    })]
  });
}));
export { IconStethoscope };
