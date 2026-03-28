import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconParkingMeter = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M15 9a3 3 0 0 0 -6 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M12 19v3",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M10.938 19h2.122a4.04 4.04 0 0 0 3.868 -2.82l1.775 -5.68c1.082 -3.463 -.882 -7.138 -4.386 -8.208a6.7 6.7 0 0 0 -1.96 -.292h-.716c-3.668 0 -6.641 2.939 -6.641 6.563c0 .657 .1 1.31 .296 1.937l1.775 5.68a4.04 4.04 0 0 0 3.867 2.82",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M11 12h2",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M12 12v3",
      stroke: color
    })]
  });
}));
export { IconParkingMeter };
