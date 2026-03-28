import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconCoins = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M9 14c0 1.657 2.686 3 6 3s6 -1.343 6 -3s-2.686 -3 -6 -3s-6 1.343 -6 3",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M9 14v4c0 1.656 2.686 3 6 3s6 -1.344 6 -3v-4",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M3 6c0 1.072 1.144 2.062 3 2.598s4.144 .536 6 0c1.856 -.536 3 -1.526 3 -2.598c0 -1.072 -1.144 -2.062 -3 -2.598s-4.144 -.536 -6 0c-1.856 .536 -3 1.526 -3 2.598",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M3 6v10c0 .888 .772 1.45 2 2",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M3 11c0 .888 .772 1.45 2 2",
      stroke: color
    })]
  });
}));
export { IconCoins };
