import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconSmoking = themed(memo(function (props) {
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
      d: "M3 14a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1l0 -2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M8 13l0 4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M16 5v.5a2 2 0 0 0 2 2a2 2 0 0 1 2 2v.5",
      stroke: color
    })]
  });
}));
export { IconSmoking };
