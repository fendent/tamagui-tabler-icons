import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconDiaper = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M3 8.323c0 -.579 0 -.868 .044 -1.11a2.7 2.7 0 0 1 2.17 -2.169c.239 -.044 .529 -.044 1.109 -.044h11.353c.579 0 .868 0 1.11 .044a2.7 2.7 0 0 1 2.169 2.17c.044 .24 .044 .53 .044 1.11v2.676a9 9 0 0 1 -18 0l.001 -2.677",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M17 9h4",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M3 9h4",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M14.25 19.7v-1.4a6.3 6.3 0 0 1 6.3 -6.3",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M9.75 19.7v-1.4a6.3 6.3 0 0 0 -6.3 -6.3",
      stroke: color
    })]
  });
}));
export { IconDiaper };
