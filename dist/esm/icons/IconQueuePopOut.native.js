import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconQueuePopOut = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M11 5h-6a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-6",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M3 13h6a2 2 0 0 1 2 2v6",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M16 3h5v5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M21 3l-6 6",
      stroke: color
    })]
  });
}));
export { IconQueuePopOut };
