import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconAtom2 = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M9 12a3 3 0 1 0 6 0a3 3 0 1 0 -6 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M12 21l0 .01",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M3 9l0 .01",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M21 9l0 .01",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M8 20.1a9 9 0 0 1 -5 -7.1",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M16 20.1a9 9 0 0 0 5 -7.1",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M6.2 5a9 9 0 0 1 11.4 0",
      stroke: color
    })]
  });
}));
export { IconAtom2 };
