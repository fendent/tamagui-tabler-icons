import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconBuildingCircus = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M4 11h16",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M12 6.5c0 1 -5 4.5 -8 4.5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M12 6.5c0 1 5 4.5 8 4.5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M6 11c-.333 5.333 -1 8.667 -2 10h4c1 0 4 -4 4 -9v-1",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M18 11c.333 5.333 1 8.667 2 10h-4c-1 0 -4 -4 -4 -9v-1",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M12 7v-4l2 1h-2",
      stroke: color
    })]
  });
}));
export { IconBuildingCircus };
