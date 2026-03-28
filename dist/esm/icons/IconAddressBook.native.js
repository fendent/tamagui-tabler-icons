import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconAddressBook = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M20 6v12a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M10 16h6",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M11 11a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M4 8h3",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M4 12h3",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M4 16h3",
      stroke: color
    })]
  });
}));
export { IconAddressBook };
