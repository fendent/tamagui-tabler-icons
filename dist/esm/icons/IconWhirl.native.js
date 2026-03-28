import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconWhirl = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M14 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M12 21c-3.314 0 -6 -2.462 -6 -5.5s2.686 -5.5 6 -5.5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M21 12c0 3.314 -2.462 6 -5.5 6s-5.5 -2.686 -5.5 -6",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M12 14c3.314 0 6 -2.462 6 -5.5s-2.686 -5.5 -6 -5.5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M14 12c0 -3.314 -2.462 -6 -5.5 -6s-5.5 2.686 -5.5 6",
      stroke: color
    })]
  });
}));
export { IconWhirl };
