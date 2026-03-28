import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconMatrix = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M8 16h.013",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M12.01 16h.005",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M16.015 16h.005",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M16.015 12h.005",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M8.01 12h.005",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M12.01 12h.005",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M16.02 8h.005",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M8.015 8h.005",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M12.015 8h.005",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M7 4h-1a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h1",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M17 4h1a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-1",
      stroke: color
    })]
  });
}));
export { IconMatrix };
