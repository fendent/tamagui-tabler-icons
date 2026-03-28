import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconBrandLoom = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M17.464 6.518a6 6 0 1 0 -3.023 7.965",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M17.482 17.464a6 6 0 1 0 -7.965 -3.023",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M6.54 17.482a6 6 0 1 0 3.024 -7.965",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M6.518 6.54a6 6 0 1 0 7.965 3.024",
      stroke: color
    })]
  });
}));
export { IconBrandLoom };
