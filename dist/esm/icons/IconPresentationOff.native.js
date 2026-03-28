import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconPresentationOff = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M3 4h1m4 0h13",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M4 4v10a2 2 0 0 0 2 2h10m3.42 -.592c.359 -.362 .58 -.859 .58 -1.408v-10",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M12 16v4",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M9 20h6",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M8 12l2 -2m4 0l2 -2",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M3 3l18 18",
      stroke: color
    })]
  });
}));
export { IconPresentationOff };
