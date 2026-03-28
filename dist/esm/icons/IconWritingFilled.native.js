import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconWritingFilled = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M21 8v9a1 1 0 0 1 -.293 .707l-2 2a1 1 0 0 1 -.112 .097l-.11 .071l-.114 .054l-.105 .035l-.149 .03l-.117 .006h-13a3 3 0 0 1 0 -6h4a1 1 0 0 0 0 -2h-3a1 1 0 0 1 0 -2h3a3 3 0 0 1 0 6h-4a1 1 0 0 0 0 2h10.585l-.292 -.293a1 1 0 0 1 -.293 -.707v-9zm-3 -6c1.673 0 3 1.327 3 3v1h-6v-1c0 -1.673 1.327 -3 3 -3"
    })
  });
}));
export { IconWritingFilled };
