import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconViewportTall = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M12 10v-7l3 3",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M9 6l3 -3",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M12 14v7l3 -3",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M9 18l3 3",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M18 3h1a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-1",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M6 3h-1a2 2 0 0 0 -2 2v14a2 2 0 0 0 2 2h1",
      stroke: color
    })]
  });
}));
export { IconViewportTall };
