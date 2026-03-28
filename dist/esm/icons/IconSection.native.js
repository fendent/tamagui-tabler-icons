import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconSection = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M20 20h.01",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M4 20h.01",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M8 20h.01",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M12 20h.01",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M16 20h.01",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M20 4h.01",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M4 4h.01",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M8 4h.01",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M12 4h.01",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M16 4l0 .01",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M4 9a1 1 0 0 1 1 -1h14a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-14a1 1 0 0 1 -1 -1l0 -6",
      stroke: color
    })]
  });
}));
export { IconSection };
