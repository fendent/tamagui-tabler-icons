import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconZodiacSagittarius = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M4 20l16 -16",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M13 4h7v7",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M6.5 12.5l5 5",
      stroke: color
    })]
  });
}));
export { IconZodiacSagittarius };
