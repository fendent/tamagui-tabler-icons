import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconSquareToggle = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M12 2l0 20",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M14 20h-8a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h8",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M20 6a2 2 0 0 0 -2 -2",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M18 20a2 2 0 0 0 2 -2",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M20 10l0 4",
      stroke: color
    })]
  });
}));
export { IconSquareToggle };
