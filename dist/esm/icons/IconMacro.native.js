import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconMacro = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M6 15a6 6 0 1 0 12 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M18 15a6 6 0 0 0 -6 6",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M12 21a6 6 0 0 0 -6 -6",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M12 21v-10",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M12 11a5 5 0 0 1 -5 -5v-3l3 2l2 -2l2 2l3 -2v3a5 5 0 0 1 -5 5",
      stroke: color
    })]
  });
}));
export { IconMacro };
