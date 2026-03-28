import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconBarrierBlock = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M4 8a1 1 0 0 1 1 -1h14a1 1 0 0 1 1 1v7a1 1 0 0 1 -1 1h-14a1 1 0 0 1 -1 -1l0 -7",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M7 16v4",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M7.5 16l9 -9",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M13.5 16l6.5 -6.5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M4 13.5l6.5 -6.5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M17 16v4",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M5 20h4",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M15 20h4",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M17 7v-2",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M7 7v-2",
      stroke: color
    })]
  });
}));
export { IconBarrierBlock };
