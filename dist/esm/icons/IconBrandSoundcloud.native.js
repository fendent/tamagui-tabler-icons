import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconBrandSoundcloud = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M17 11h1c1.38 0 3 1.274 3 3c0 1.657 -1.5 3 -3 3l-6 0v-10c3 0 4.5 1.5 5 4",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M9 8l0 9",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M6 17l0 -7",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M3 16l0 -2",
      stroke: color
    })]
  });
}));
export { IconBrandSoundcloud };
