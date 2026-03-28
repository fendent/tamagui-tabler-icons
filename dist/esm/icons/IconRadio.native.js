import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconRadio = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M14 3l-9.371 3.749a1 1 0 0 0 -.629 .928v11.323a1 1 0 0 0 1 1h14a1 1 0 0 0 1 -1v-11a1 1 0 0 0 -1 -1h-14.5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M4 12h16",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M7 12v-2",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M17 16v.01",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M13 16v.01",
      stroke: color
    })]
  });
}));
export { IconRadio };
