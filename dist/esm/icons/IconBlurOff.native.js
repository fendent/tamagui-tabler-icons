import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconBlurOff = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M12 3v5m0 4v8",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M5.641 5.631a9 9 0 1 0 12.719 12.738m1.68 -2.318a9 9 0 0 0 -12.074 -12.098",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M16 12h5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M13 9h7",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M12 6h6",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M12 18h6",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M12 15h3m4 0h1",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M3 3l18 18",
      stroke: color
    })]
  });
}));
export { IconBlurOff };
