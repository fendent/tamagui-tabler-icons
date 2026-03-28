import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconBarbell = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M2 12h1",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M6 8h-2a1 1 0 0 0 -1 1v6a1 1 0 0 0 1 1h2",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M6 7v10a1 1 0 0 0 1 1h1a1 1 0 0 0 1 -1v-10a1 1 0 0 0 -1 -1h-1a1 1 0 0 0 -1 1",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M9 12h6",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M15 7v10a1 1 0 0 0 1 1h1a1 1 0 0 0 1 -1v-10a1 1 0 0 0 -1 -1h-1a1 1 0 0 0 -1 1",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M18 8h2a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-2",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M22 12h-1",
      stroke: color
    })]
  });
}));
export { IconBarbell };
