import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconArtboard = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M8 9a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1l0 -6",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M3 8l1 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M3 16l1 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M8 3l0 1",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M16 3l0 1",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M20 8l1 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M20 16l1 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M8 20l0 1",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M16 20l0 1",
      stroke: color
    })]
  });
}));
export { IconArtboard };
