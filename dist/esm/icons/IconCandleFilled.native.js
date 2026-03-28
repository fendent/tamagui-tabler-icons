import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconCandleFilled = themed(/* @__PURE__ */memo(function (props) {
  var {
    color = "black",
    size = 24,
    ...otherProps
  } = props;
  return /* @__PURE__ */_jsxs(Svg, {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    ...otherProps,
    children: [/* @__PURE__ */_jsx(Path, {
      d: "M14 9a2 2 0 0 1 2 2v10a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1v-10a2 2 0 0 1 2 -2z"
    }), /* @__PURE__ */_jsx(Path, {
      d: "M11.254 1.334a1 1 0 0 1 1.491 0l1.452 1.623a3 3 0 0 1 -4.196 4.28c-1.195 -1.07 -1.339 -2.889 -.297 -4.166z"
    })]
  });
}));
export { IconCandleFilled };
