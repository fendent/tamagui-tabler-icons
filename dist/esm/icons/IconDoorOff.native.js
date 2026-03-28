import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconDoorOff = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M3 21h18",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M6 21v-15",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M7.18 3.175c.25 -.112 .528 -.175 .82 -.175h8a2 2 0 0 1 2 2v9",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M18 18v3",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M3 3l18 18",
      stroke: color
    })]
  });
}));
export { IconDoorOff };
