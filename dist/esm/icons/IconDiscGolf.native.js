import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconDiscGolf = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M5 5h14",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M6 5c.32 6.744 2.74 9.246 6 10",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M18 5c-.32 6.744 -2.74 9.246 -6 10",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M10 5c0 4.915 .552 7.082 2 10",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M14 5c0 4.915 -.552 7.082 -2 10",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M12 15v6",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M12 3v2",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M7 16c.64 .64 1.509 1 2.414 1h5.172c.905 0 1.774 -.36 2.414 -1",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M11 21h2",
      stroke: color
    })]
  });
}));
export { IconDiscGolf };
