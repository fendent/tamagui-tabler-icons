import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconHttpGet = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M7 8h-2a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h2v-4h-1",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M14 8h-4v8h4",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M10 12h2.5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M17 8h4",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M19 8v8",
      stroke: color
    })]
  });
}));
export { IconHttpGet };
