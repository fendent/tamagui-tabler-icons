import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconDisabledOff = themed(memo(function (props) {
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
      d: "M11 7a2 2 0 1 0 -2 -2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M11 11v4h4l4 5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M15 11h1",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M7 11.5a5 5 0 1 0 6 7.5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M3 3l18 18",
      stroke: color
    })]
  });
}));
export { IconDisabledOff };
