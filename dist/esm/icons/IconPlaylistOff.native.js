import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconPlaylistOff = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M14 14a3 3 0 1 0 3 3",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M17 13v-9h4",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M13 5h-4m-4 0h-2",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M3 9h6",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M9 13h-6",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M3 3l18 18",
      stroke: color
    })]
  });
}));
export { IconPlaylistOff };
