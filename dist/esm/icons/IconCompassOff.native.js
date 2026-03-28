import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconCompassOff = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M13 9l3 -1l-1 3m-1 3l-6 2l2 -6",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M20.042 16.045a9 9 0 0 0 -12.087 -12.087m-2.318 1.677a9 9 0 1 0 12.725 12.73",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M12 3v2",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M12 19v2",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M3 12h2",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M19 12h2",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M3 3l18 18",
      stroke: color
    })]
  });
}));
export { IconCompassOff };
