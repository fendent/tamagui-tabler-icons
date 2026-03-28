import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconBrandGoogleDrive = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M12 10l-6 10l-3 -5l6 -10l3 5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M9 15h12l-3 5h-12",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M15 15l-6 -10h6l6 10l-6 0",
      stroke: color
    })]
  });
}));
export { IconBrandGoogleDrive };
