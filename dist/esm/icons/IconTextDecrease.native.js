import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconTextDecrease = themed(/* @__PURE__ */memo(function (props) {
  var {
    color = "black",
    size = 24,
    ...otherProps
  } = props;
  return /* @__PURE__ */_jsxs(Svg, {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    ...otherProps,
    children: [/* @__PURE__ */_jsx(Path, {
      d: "M4 19v-10.5a3.5 3.5 0 1 1 7 0v10.5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M4 13h7",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M21 12h-6",
      stroke: color
    })]
  });
}));
export { IconTextDecrease };
