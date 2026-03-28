import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconServer2 = themed(memo(function (props) {
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
      d: "M3 7a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v2a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 15a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v2a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3l0 -2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M7 8l0 .01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M7 16l0 .01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M11 8h6",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M11 16h6",
      stroke: color
    })]
  });
}));
export { IconServer2 };
