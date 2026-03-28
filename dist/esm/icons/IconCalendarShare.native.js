import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconCalendarShare = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M12 21h-6a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v6",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M16 3v4",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M8 3v4",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M4 11h16",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M16 22l5 -5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M21 21.5v-4.5h-4.5",
      stroke: color
    })]
  });
}));
export { IconCalendarShare };
