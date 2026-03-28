import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconSchema = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M5 2h5v4h-5l0 -4",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M15 10h5v4h-5l0 -4",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M5 18h5v4h-5l0 -4",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M5 10h5v4h-5l0 -4",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M10 12h5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M7.5 6v4",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M7.5 14v4",
      stroke: color
    })]
  });
}));
export { IconSchema };
