import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconBoxAlignRight = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M13.998 20.003v-16h5a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M8.998 20.003h.01",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M3.997 20.003h.011",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M3.997 15.002h.011",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M3.997 9.002h.011",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M3.997 4.002h.011",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M8.998 4.002h.01",
      stroke: color
    })]
  });
}));
export { IconBoxAlignRight };
