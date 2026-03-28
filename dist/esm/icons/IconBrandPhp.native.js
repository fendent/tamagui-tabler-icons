import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconBrandPhp = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M2 12a10 9 0 1 0 20 0a10 9 0 1 0 -20 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M5.5 15l.395 -1.974l.605 -3.026h1.32a1 1 0 0 1 .986 1.164l-.167 1a1 1 0 0 1 -.986 .836h-1.653",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M15.5 15l.395 -1.974l.605 -3.026h1.32a1 1 0 0 1 .986 1.164l-.167 1a1 1 0 0 1 -.986 .836h-1.653",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M12 7.5l-1 5.5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M11.6 10h2.4l-.5 3",
      stroke: color
    })]
  });
}));
export { IconBrandPhp };
