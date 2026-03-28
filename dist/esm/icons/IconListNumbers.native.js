import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconListNumbers = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M11 6h9",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M11 12h9",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M12 18h8",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M4 16a2 2 0 1 1 4 0c0 .591 -.5 1 -1 1.5l-3 2.5h4",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M6 10v-6l-2 2",
      stroke: color
    })]
  });
}));
export { IconListNumbers };
