import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconArrowUpDashed = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M12 5v6m0 3v1.5m0 3v.5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M18 11l-6 -6",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M6 11l6 -6",
      stroke: color
    })]
  });
}));
export { IconArrowUpDashed };
