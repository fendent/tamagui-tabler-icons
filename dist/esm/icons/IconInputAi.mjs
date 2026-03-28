import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconInputAi = themed(memo(function (props) {
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
      d: "M20 11v-2a2 2 0 0 0 -2 -2h-12a2 2 0 0 0 -2 2v5a2 2 0 0 0 2 2h4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M14 21v-4a2 2 0 1 1 4 0v4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M14 19h4",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M21 15v6",
      stroke: color
    })]
  });
}));
export { IconInputAi };
