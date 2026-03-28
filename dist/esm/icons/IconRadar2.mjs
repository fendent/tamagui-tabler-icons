import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconRadar2 = themed(memo(function (props) {
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
      d: "M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M15.51 15.56a5 5 0 1 0 -3.51 1.44",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M18.832 17.86a9 9 0 1 0 -6.832 3.14",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 12v9",
      stroke: color
    })]
  });
}));
export { IconRadar2 };
