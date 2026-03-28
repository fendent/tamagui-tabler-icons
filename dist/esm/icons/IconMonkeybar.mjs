import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconMonkeybar = themed(memo(function (props) {
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
      d: "M3 21v-15l5 -3l5 3v15",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M8 21v-7",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 14h10",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M6 10a2 2 0 1 1 4 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M13 13c6 0 3 8 8 8",
      stroke: color
    })]
  });
}));
export { IconMonkeybar };
