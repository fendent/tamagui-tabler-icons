import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconToolsOff = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M16 12l4 -4a2.828 2.828 0 1 0 -4 -4l-4 4m-2 2l-7 7v4h4l7 -7",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M14.5 5.5l4 4",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M12 8l-5 -5m-2 2l-2 2l5 5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M7 8l-1.5 1.5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M16 12l5 5m-2 2l-2 2l-5 -5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M16 17l-1.5 1.5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M3 3l18 18",
      stroke: color
    })]
  });
}));
export { IconToolsOff };
