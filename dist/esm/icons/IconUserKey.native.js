import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconUserKey = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M6 21v-2a4 4 0 0 1 4 -4h5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M18.5 18.5l-3.5 3.5l-1.5 -1.5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M18.554 18.414a2 2 0 1 1 2.828 -2.828a2 2 0 0 1 -2.828 2.828",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M16 19l1 1",
      stroke: color
    })]
  });
}));
export { IconUserKey };
