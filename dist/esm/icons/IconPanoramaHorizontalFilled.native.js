import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconPanoramaHorizontalFilled = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M19.31 4.591a2 2 0 0 1 2.69 1.873v11c0 1.382 -1.38 2.38 -2.694 1.897c-4.879 -1.845 -9.734 -1.845 -14.612 0c-1.304 .495 -2.694 -.481 -2.694 -1.871v-11.032a2 2 0 0 1 2.676 -1.87l.025 .012l.448 .162c4.572 1.623 9.123 1.622 13.703 -.003z"
    })
  });
}));
export { IconPanoramaHorizontalFilled };
