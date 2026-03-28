import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconWorldCheck = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M20.946 12.99a9 9 0 1 0 -9.46 7.995",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M3.6 9h16.8",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M3.6 15h13.9",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M11.5 3a17 17 0 0 0 0 18",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M12.5 3a16.997 16.997 0 0 1 2.311 12.001",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M15 19l2 2l4 -4",
      stroke: color
    })]
  });
}));
export { IconWorldCheck };
