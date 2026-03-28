import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconForklift = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M3 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M12 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M7 17l5 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M3 17v-6h13v6",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M5 11v-4h4",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M9 11v-6h4l3 6",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M22 15h-3v-10",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M16 13l3 0",
      stroke: color
    })]
  });
}));
export { IconForklift };
