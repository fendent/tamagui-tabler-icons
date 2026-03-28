import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconTorii = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M4 4c5.333 1.333 10.667 1.333 16 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M4 8h16",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M12 5v3",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M18 4.5v15.5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M6 4.5v15.5",
      stroke: color
    })]
  });
}));
export { IconTorii };
