import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconBrandAuth0 = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M12 14.5l-5.5 3.5l2 -6l-4.5 -4h6l2 -5l2 5h6l-4.5 4l2 6l-5.5 -3.5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M20.507 8.872l-2.01 -5.872h-12.994l-2.009 5.872c-1.242 3.593 -.135 7.094 3.249 9.407l5.257 3.721l5.257 -3.721c3.385 -2.313 4.49 -5.814 3.25 -9.407",
      stroke: color
    })]
  });
}));
export { IconBrandAuth0 };
