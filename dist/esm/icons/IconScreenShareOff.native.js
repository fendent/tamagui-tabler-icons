import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconScreenShareOff = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M21 12v3a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-10a1 1 0 0 1 1 -1h9",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M7 20l10 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M9 16l0 4",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M15 16l0 4",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M17 8l4 -4m-4 0l4 4",
      stroke: color
    })]
  });
}));
export { IconScreenShareOff };
