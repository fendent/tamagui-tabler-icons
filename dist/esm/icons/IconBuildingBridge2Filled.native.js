import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconBuildingBridge2Filled = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M18 6a3 3 0 0 1 3 3v9a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2v-2a3 3 0 0 0 -6 0v2a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2v-9a3 3 0 0 1 3 -3z"
    })
  });
}));
export { IconBuildingBridge2Filled };
