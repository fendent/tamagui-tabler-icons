import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconSolarPanel = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M4.28 14h15.44a1 1 0 0 0 .97 -1.243l-1.5 -6a1 1 0 0 0 -.97 -.757h-12.44a1 1 0 0 0 -.97 .757l-1.5 6a1 1 0 0 0 .97 1.243",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M4 10h16",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M10 6l-1 8",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M14 6l1 8",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M12 14v4",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M7 18h10",
      stroke: color
    })]
  });
}));
export { IconSolarPanel };
