import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconEyeglassOff = themed(memo(function (props) {
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
      d: "M5.536 5.546l-2.536 8.454",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M16 4h2l3 10",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M10 16h4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M19.426 19.423a3.5 3.5 0 0 1 -5.426 -2.923v-2.5m4 0h3v2.5c0 .157 -.01 .312 -.03 .463",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M10 16.5a3.5 3.5 0 0 1 -7 0v-2.5h7v2.5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 3l18 18",
      stroke: color
    })]
  });
}));
export { IconEyeglassOff };
