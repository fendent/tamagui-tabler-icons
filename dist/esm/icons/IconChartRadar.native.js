import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconChartRadar = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M12 3l9.5 7l-3.5 11h-12l-3.5 -11l9.5 -7",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M12 7.5l5.5 4l-2.5 5.5h-6.5l-2 -5.5l5.5 -4",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M2.5 10l9.5 3l9.5 -3",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M12 3v10l6 8",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M6 21l6 -8",
      stroke: color
    })]
  });
}));
export { IconChartRadar };
