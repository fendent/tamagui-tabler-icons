import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconPlayCard9Filled = themed(/* @__PURE__ */memo(function (props) {
  var {
    color = "black",
    size = 24,
    ...otherProps
  } = props;
  return /* @__PURE__ */_jsx(Svg, {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    ...otherProps,
    children: /* @__PURE__ */_jsx(Path, {
      d: "M17 2a3 3 0 0 1 3 3v14a3 3 0 0 1 -3 3h-10a3 3 0 0 1 -3 -3v-14a3 3 0 0 1 3 -3zm.01 16h-.01a1 1 0 0 0 0 2h.01a1 1 0 0 0 0 -2m-4.01 -10h-2a2 2 0 0 0 -2 2v1l.005 .15a2 2 0 0 0 1.995 1.85h2v1h-3a1 1 0 0 0 0 2h3a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2m0 2v1h-2v-1zm-5.99 -6h-.01a1 1 0 1 0 0 2h.01a1 1 0 1 0 0 -2"
    })
  });
}));
export { IconPlayCard9Filled };
