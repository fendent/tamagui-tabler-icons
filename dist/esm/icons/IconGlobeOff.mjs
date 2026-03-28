import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconGlobeOff = themed(memo(function (props) {
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
      d: "M7.353 7.355a4 4 0 0 0 5.29 5.293m2.007 -2.009a4 4 0 0 0 -5.3 -5.284",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M5.75 15a8.015 8.015 0 0 0 9.792 .557m2.02 -1.998a8.015 8.015 0 0 0 -2.562 -11.559",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M11 17v4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M7 21h8",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 3l18 18",
      stroke: color
    })]
  });
}));
export { IconGlobeOff };
