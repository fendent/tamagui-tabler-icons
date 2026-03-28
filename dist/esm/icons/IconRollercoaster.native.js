import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconRollercoaster = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M3 21a5.55 5.55 0 0 0 5.265 -3.795l.735 -2.205a8.775 8.775 0 0 1 8.325 -6h3.675",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M20 9v12",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M8 21v-3",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M12 21v-10",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M16 9.5v11.5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M15 3h5v3h-5l0 -3",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M6 8l4 -3l2 2.5l-4 3l-1.8 -.5l-.2 -2",
      stroke: color
    })]
  });
}));
export { IconRollercoaster };
