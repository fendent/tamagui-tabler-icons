import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconMicrophone = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M9 5a3 3 0 0 1 3 -3a3 3 0 0 1 3 3v5a3 3 0 0 1 -3 3a3 3 0 0 1 -3 -3l0 -5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M5 10a7 7 0 0 0 14 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M8 21l8 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M12 17l0 4",
      stroke: color
    })]
  });
}));
export { IconMicrophone };
