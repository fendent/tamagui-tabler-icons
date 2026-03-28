import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconHaze = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M3 12h1",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M12 3v1",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M20 12h1",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M5.6 5.6l.7 .7",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M18.4 5.6l-.7 .7",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M8 12a4 4 0 1 1 8 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M3 16h18",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M3 20h18",
      stroke: color
    })]
  });
}));
export { IconHaze };
