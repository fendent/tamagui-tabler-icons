import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconHeadingOff = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M7 12h5m4 0h1",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M7 7v12",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M17 5v8m0 4v2",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M15 19h4",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M15 5h4",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M5 19h4",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M3 3l18 18",
      stroke: color
    })]
  });
}));
export { IconHeadingOff };
