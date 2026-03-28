import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconAirBalloonFilled = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M13 18a2 2 0 0 1 2 2v1a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2v-1a2 2 0 0 1 2 -2z"
    }), /* @__PURE__ */_jsx(Path, {
      d: "M12 1a7 7 0 0 1 7 7c0 4.185 -3.297 9 -7 9s-7 -4.815 -7 -9a7 7 0 0 1 7 -7"
    })]
  });
}));
export { IconAirBalloonFilled };
