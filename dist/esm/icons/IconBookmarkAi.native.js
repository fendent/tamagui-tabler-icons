import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconBookmarkAi = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M10.02 18.32l-4.02 2.68v-14a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v4.5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M14 21v-4a2 2 0 1 1 4 0v4",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M14 19h4",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M21 15v6",
      stroke: color
    })]
  });
}));
export { IconBookmarkAi };
