import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconLockPassword = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2l0 -6",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M8 11v-4a4 4 0 1 1 8 0v4",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M15 16h.01",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M12.01 16h.01",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M9.02 16h.01",
      stroke: color
    })]
  });
}));
export { IconLockPassword };
