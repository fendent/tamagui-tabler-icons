import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconDog = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M11 5h2",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M19 12c-.667 5.333 -2.333 8 -5 8h-4c-2.667 0 -4.333 -2.667 -5 -8",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M11 16c0 .667 .333 1 1 1s1 -.333 1 -1h-2",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M12 18v2",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M10 11v.01",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M14 11v.01",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M5 4l6 .97l-6.238 6.688a1.021 1.021 0 0 1 -1.41 .111a.953 .953 0 0 1 -.327 -.954l1.975 -6.815",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M19 4l-6 .97l6.238 6.688c.358 .408 .989 .458 1.41 .111a.953 .953 0 0 0 .327 -.954l-1.975 -6.815",
      stroke: color
    })]
  });
}));
export { IconDog };
