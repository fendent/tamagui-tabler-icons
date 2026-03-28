import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconAnchor = themed(memo(function (props) {
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
      d: "M12 9v12m-8 -8a8 8 0 0 0 16 0m1 0h-2m-14 0h-2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9 6a3 3 0 1 0 6 0a3 3 0 1 0 -6 0",
      stroke: color
    })]
  });
}));
export { IconAnchor };
