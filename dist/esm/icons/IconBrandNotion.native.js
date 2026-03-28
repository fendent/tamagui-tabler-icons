import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconBrandNotion = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M11 17.5v-6.5h.5l4 6h.5v-6.5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M19.077 20.071l-11.53 .887a1 1 0 0 1 -.876 -.397l-2.471 -3.294a1 1 0 0 1 -.2 -.6v-10.741a1 1 0 0 1 .923 -.997l11.389 -.876a2 2 0 0 1 1.262 .33l1.535 1.023a2 2 0 0 1 .891 1.664v12.004a1 1 0 0 1 -.923 .997",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M4.5 5.5l2.5 2.5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M20 7l-13 1v12.5",
      stroke: color
    })]
  });
}));
export { IconBrandNotion };
