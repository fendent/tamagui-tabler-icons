import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconBedOff = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M7 7a2 2 0 1 0 2 2",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M22 17v-3h-4m-4 0h-12",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M2 8v9",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M12 12v2h2m4 0h4v-2a3 3 0 0 0 -3 -3h-6",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M3 3l18 18",
      stroke: color
    })]
  });
}));
export { IconBedOff };
