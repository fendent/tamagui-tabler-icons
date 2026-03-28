import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconDevice3dLens = themed(memo(function (props) {
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
      d: "M18.005 14.64a3.98 3.98 0 0 0 .995 -2.64",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M12 4v16",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M15 5v14a7 7 0 0 0 0 -14",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M9 5v14a7 7 0 0 1 0 -14",
      stroke: color
    })]
  });
}));
export { IconDevice3dLens };
