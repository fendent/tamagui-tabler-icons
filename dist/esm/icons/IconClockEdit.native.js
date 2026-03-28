import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconClockEdit = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M21 12a9 9 0 1 0 -9.972 8.948c.32 .034 .644 .052 .972 .052",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M12 7v5l2 2",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M18.42 15.61a2.1 2.1 0 0 1 2.97 2.97l-3.39 3.42h-3v-3l3.42 -3.39",
      stroke: color
    })]
  });
}));
export { IconClockEdit };
