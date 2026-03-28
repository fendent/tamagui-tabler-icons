import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconSTurnLeft = themed(memo(function (props) {
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
      d: "M19 7a2 2 0 1 1 0 -4a2 2 0 0 1 0 4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M17 5h-9.5a3.5 3.5 0 0 0 0 7h9a3.5 3.5 0 0 1 0 7h-13.5",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M6 16l-3 3l3 3",
      stroke: color
    })]
  });
}));
export { IconSTurnLeft };
