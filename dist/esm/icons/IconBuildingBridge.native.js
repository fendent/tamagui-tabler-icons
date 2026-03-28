import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconBuildingBridge = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M6 5l0 14",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M18 5l0 14",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M2 15l20 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M3 8a7.5 7.5 0 0 0 3 -2a6.5 6.5 0 0 0 12 0a7.5 7.5 0 0 0 3 2",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M12 10l0 5",
      stroke: color
    })]
  });
}));
export { IconBuildingBridge };
