import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconFileTypeJpg = themed(memo(function (props) {
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
      d: "M11 18h1.5a1.5 1.5 0 0 0 0 -3h-1.5v6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M20 15h-1a2 2 0 0 0 -2 2v2a2 2 0 0 0 2 2h1v-3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M5 15h3v4.5a1.5 1.5 0 0 1 -3 0",
      stroke: color
    })]
  });
}));
export { IconFileTypeJpg };
