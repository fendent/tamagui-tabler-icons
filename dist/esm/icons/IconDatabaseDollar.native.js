import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconDatabaseDollar = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M4 6v6c0 1.657 3.582 3 8 3c.415 0 .822 -.012 1.22 -.035",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M20 10v-4",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M4 12v6c0 1.657 3.582 3 8 3c.352 0 .698 -.009 1.037 -.025",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M21 15h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M19 21v1m0 -8v1",
      stroke: color
    })]
  });
}));
export { IconDatabaseDollar };
