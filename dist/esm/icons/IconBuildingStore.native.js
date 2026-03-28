import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconBuildingStore = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M3 21l18 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M3 7v1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1h-18l2 -4h14l2 4",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M5 21l0 -10.15",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M19 21l0 -10.15",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4",
      stroke: color
    })]
  });
}));
export { IconBuildingStore };
