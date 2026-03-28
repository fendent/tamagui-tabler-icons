import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconBrandNpm = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M1 8h22v7h-12v2h-4v-2h-6l0 -7",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M7 8v7",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M14 8v7",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M17 11v4",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M4 11v4",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M11 11v1",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M20 11v4",
      stroke: color
    })]
  });
}));
export { IconBrandNpm };
