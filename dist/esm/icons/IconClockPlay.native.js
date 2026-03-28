import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconClockPlay = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M12 7v5l2 2",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M17 22l5 -3l-5 -3l0 6",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M13.017 20.943a9 9 0 1 1 7.831 -7.292",
      stroke: color
    })]
  });
}));
export { IconClockPlay };
