import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconNavigationExclamation = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M16.535 12.832l-4.535 -9.832l-7.97 17.275c-.07 .2 -.017 .424 .135 .572c.15 .148 .374 .193 .57 .116l7.265 -2.463c1.38 .468 2.416 .82 3.107 1.053",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M19 16v3",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M19 22v.01",
      stroke: color
    })]
  });
}));
export { IconNavigationExclamation };
