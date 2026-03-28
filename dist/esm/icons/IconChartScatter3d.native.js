import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconChartScatter3d = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M3 20l9 -7",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M12 3v10l9 7",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M17 12v.015",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M17 4.015v.015",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M21 8.015v.015",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M12 19.015v.015",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M3 12.015v.015",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M7 8.015v.015",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M3 4.015v.015",
      stroke: color
    })]
  });
}));
export { IconChartScatter3d };
