import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconPhotoSquareRounded = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M15 8h.01",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M12 3c7.2 0 9 1.8 9 9c0 7.2 -1.8 9 -9 9c-7.2 0 -9 -1.8 -9 -9c0 -7.2 1.8 -9 9 -9",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M3.5 15.5l4.5 -4.5c.928 -.893 2.072 -.893 3 0l5 5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M14 14l1 -1c.928 -.893 2.072 -.893 3 0l2.5 2.5",
      stroke: color
    })]
  });
}));
export { IconPhotoSquareRounded };
