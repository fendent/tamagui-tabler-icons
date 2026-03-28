import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconSdk = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M7 8h-3a1 1 0 0 0 -1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-3",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M17 8v8",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M21 8l-3 4l3 4",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M17 12h1",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M10 8v8h2a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-2",
      stroke: color
    })]
  });
}));
export { IconSdk };
