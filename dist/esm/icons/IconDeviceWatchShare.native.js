import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconDeviceWatchShare = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M12.5 18h-3.5a3 3 0 0 1 -3 -3v-6a3 3 0 0 1 3 -3h6a3 3 0 0 1 3 3v4",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M9 18v3h3",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M9 6v-3h6v3",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M16 22l5 -5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M21 21.5v-4.5h-4.5",
      stroke: color
    })]
  });
}));
export { IconDeviceWatchShare };
