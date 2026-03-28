import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconLayersSelected = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M8 10.5l6.492 -6.492",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M13.496 16l6.504 -6.504l-6.504 6.504",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M8.586 15.414l10.827 -10.827",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M8 6a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2l0 -8",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M16 16v2a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-8a2 2 0 0 1 2 -2h2",
      stroke: color
    })]
  });
}));
export { IconLayersSelected };
