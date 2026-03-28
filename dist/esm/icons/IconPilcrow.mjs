import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconPilcrow = themed(memo(function (props) {
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
      d: "M13 4v16",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M17 4v16",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M19 4h-9.5a4.5 4.5 0 0 0 0 9h3.5",
      stroke: color
    })]
  });
}));
export { IconPilcrow };
