import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconArrowLeftRight = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M17 13l4 -4l-4 -4",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M7 13l-4 -4l4 -4",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M12 14a5 5 0 0 1 5 -5h4",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M12 19v-5a5 5 0 0 0 -5 -5h-4",
      stroke: color
    })]
  });
}));
export { IconArrowLeftRight };
