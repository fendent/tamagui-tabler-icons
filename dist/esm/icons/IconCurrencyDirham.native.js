import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconCurrencyDirham = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M8.5 19h-3.5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M8.599 16.479a1.5 1.5 0 1 0 -1.099 2.521",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M7 4v9",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M15 13h1.888a1.5 1.5 0 0 0 1.296 -2.256l-2.184 -3.744",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M11 13.01v-.01",
      stroke: color
    })]
  });
}));
export { IconCurrencyDirham };
