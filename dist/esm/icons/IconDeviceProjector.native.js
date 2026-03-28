import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconDeviceProjector = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M8 9a5 5 0 1 0 10 0a5 5 0 0 0 -10 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M9 6h-4a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h14a2 2 0 0 0 2 -2v-8a2 2 0 0 0 -2 -2h-2",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M6 15h1",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M7 18l-1 2",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M18 18l1 2",
      stroke: color
    })]
  });
}));
export { IconDeviceProjector };
