import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconWallOff = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M8 4h10a2 2 0 0 1 2 2v10m-.589 3.417c-.361 .36 -.86 .583 -1.411 .583h-12a2 2 0 0 1 -2 -2v-12c0 -.55 .222 -1.047 .58 -1.409",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M4 8h4m4 0h8",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M20 12h-4m-4 0h-8",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M4 16h12",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M9 4v1",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M14 8v2",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M8 12v4",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M11 16v4",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M3 3l18 18",
      stroke: color
    })]
  });
}));
export { IconWallOff };
