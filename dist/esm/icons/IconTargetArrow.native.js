import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconTargetArrow = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M12 7a5 5 0 1 0 5 5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M13 3.055a9 9 0 1 0 7.941 7.945",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M15 6v3h3l3 -3h-3v-3l-3 3",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M15 9l-3 3",
      stroke: color
    })]
  });
}));
export { IconTargetArrow };
