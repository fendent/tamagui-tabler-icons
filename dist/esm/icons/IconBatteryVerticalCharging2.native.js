import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconBatteryVerticalCharging2 = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M7 18v-11c0 -1.105 .895 -2 2 -2h.5c.276 0 .5 -.224 .5 -.5s.224 -.5 .5 -.5h3c.276 0 .5 .224 .5 .5s.224 .5 .5 .5h.5c1.105 0 2 .895 2 2v1m-10 10c0 1.105 .895 2 2 2h1",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M12 14h6v2a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2l0 -2",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M15 21v-3",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M13 14v-2.5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M17 14v-2.5",
      stroke: color
    })]
  });
}));
export { IconBatteryVerticalCharging2 };
