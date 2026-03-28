import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconWindsockFilled = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M6 2a1 1 0 0 1 1 1v1.079l11.083 .924a1 1 0 0 1 .917 .997v4a1 1 0 0 1 -.917 .997l-11.083 .923v8.08h1a1 1 0 0 1 0 2h-4a1 1 0 0 1 0 -2h1v-17a1 1 0 0 1 1 -1m1 4.086v3.827l3 -.25v-3.327zm7 .584v2.659l3 -.25v-2.159z"
    })
  });
}));
export { IconWindsockFilled };
