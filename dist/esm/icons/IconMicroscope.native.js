import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconMicroscope = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M5 21h14",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M6 18h2",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M7 18v3",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M9 11l3 3l6 -6l-3 -3l-6 6",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M10.5 12.5l-1.5 1.5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M17 3l3 3",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M12 21a6 6 0 0 0 3.715 -10.712",
      stroke: color
    })]
  });
}));
export { IconMicroscope };
