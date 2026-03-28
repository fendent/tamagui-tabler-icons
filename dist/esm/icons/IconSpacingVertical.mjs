import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
import { jsx, jsxs } from "react/jsx-runtime";
const IconSpacingVertical = themed(memo(function (props) {
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
      d: "M4 20v-2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M4 4v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2",
      stroke: color
    }), /* @__PURE__ */jsx(Path, {
      d: "M16 12h-8",
      stroke: color
    })]
  });
}));
export { IconSpacingVertical };
