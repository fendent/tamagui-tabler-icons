import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconPodium = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M5 8h14l-.621 2.485a2 2 0 0 1 -1.94 1.515h-8.878a2 2 0 0 1 -1.94 -1.515l-.621 -2.485",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M7 8v-2a3 3 0 0 1 3 -3",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M8 12l1 9",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M16 12l-1 9",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M7 21h10",
      stroke: color
    })]
  });
}));
export { IconPodium };
