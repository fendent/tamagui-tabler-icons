import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconSubtitlesOff = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M9 5h9a3 3 0 0 1 3 3v8a3 3 0 0 1 -.13 .874m-2.006 2a3 3 0 0 1 -.864 .126h-12a3 3 0 0 1 -3 -3v-8c0 -1.35 .893 -2.493 2.12 -2.869",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M7 15h5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M17 12h-1",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M12 12h-2",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M3 3l18 18",
      stroke: color
    })]
  });
}));
export { IconSubtitlesOff };
