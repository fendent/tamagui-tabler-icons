import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconArrowsCross = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M16 4h4v4",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M15 9l5 -5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M4 20l5 -5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M16 20h4v-4",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M4 4l16 16",
      stroke: color
    })]
  });
}));
export { IconArrowsCross };
