import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconAiGateway = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M4 6.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0 -5 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M15 6.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0 -5 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M15 17.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0 -5 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M4 17.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0 -5 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M8.5 15.5l7 -7",
      stroke: color
    })]
  });
}));
export { IconAiGateway };
