import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconWashDry2 = themed(memo(function (props) {
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
      d: "M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M6 12a6 6 0 1 0 12 0a6 6 0 1 0 -12 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M10 12h.01",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M14 12h.01",
      stroke: color
    })]
  });
}));
export { IconWashDry2 };
