import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconCircuitCellPlus = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M2 12h9",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M15 12h7",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M11 5v14",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M15 9v6",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M3 5h4",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M5 3v4",
      stroke: color
    })]
  });
}));
export { IconCircuitCellPlus };
