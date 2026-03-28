import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconAward = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M6 9a6 6 0 1 0 12 0a6 6 0 1 0 -12 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M12 15l3.4 5.89l1.598 -3.233l3.598 .232l-3.4 -5.889",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M6.802 12l-3.4 5.89l3.598 -.233l1.598 3.232l3.4 -5.889",
      stroke: color
    })]
  });
}));
export { IconAward };
