import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconReport = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M8 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h5.697",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M18 14v4h4",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M18 11v-4a2 2 0 0 0 -2 -2h-2",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M8 5a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M14 18a4 4 0 1 0 8 0a4 4 0 1 0 -8 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M8 11h4",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M8 15h3",
      stroke: color
    })]
  });
}));
export { IconReport };
