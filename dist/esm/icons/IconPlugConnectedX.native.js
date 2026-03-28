import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconPlugConnectedX = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M20 16l-4 4",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M7 12l5 5l-1.5 1.5a3.536 3.536 0 1 1 -5 -5l1.5 -1.5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M17 12l-5 -5l1.5 -1.5a3.536 3.536 0 1 1 5 5l-1.5 1.5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M3 21l2.5 -2.5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M18.5 5.5l2.5 -2.5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M10 11l-2 2",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M13 14l-2 2",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M16 16l4 4",
      stroke: color
    })]
  });
}));
export { IconPlugConnectedX };
