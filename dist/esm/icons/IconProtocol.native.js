import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconProtocol = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M15 6l-7 12",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M20 6l-7 12",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M5 14v.015",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M5 10.015v.015",
      stroke: color
    })]
  });
}));
export { IconProtocol };
