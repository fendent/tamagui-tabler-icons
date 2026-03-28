import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconDatabaseEdit = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M4 6c0 1.657 3.582 3 8 3s8 -1.343 8 -3s-3.582 -3 -8 -3s-8 1.343 -8 3",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M4 6v6c0 1.657 3.582 3 8 3c.478 0 .947 -.016 1.402 -.046",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M20 12v-6",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M4 12v6c0 1.526 3.04 2.786 6.972 2.975",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M18.42 15.61a2.1 2.1 0 0 1 2.97 2.97l-3.39 3.42h-3v-3l3.42 -3.39",
      stroke: color
    })]
  });
}));
export { IconDatabaseEdit };
