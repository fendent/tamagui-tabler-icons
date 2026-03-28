import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconToolsKitchen3 = themed(memo(function (props) {
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
      d: "M7 4v17m-3 -17v3a3 3 0 1 0 6 0v-3",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M14 8a3 4 0 1 0 6 0a3 4 0 1 0 -6 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M17 12v9",
      stroke: color
    })]
  });
}));
export { IconToolsKitchen3 };
