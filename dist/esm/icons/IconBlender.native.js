import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconBlender = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M9 10h-3a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h10.802a1 1 0 0 1 .984 1.179l-1.786 9.821",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M8 4l2 11",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M11 15h4a3 3 0 0 1 3 3v2a1 1 0 0 1 -1 1h-8a1 1 0 0 1 -1 -1v-2a3 3 0 0 1 3 -3",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M12 4v-1h2v1",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M13 18v.01",
      stroke: color
    })]
  });
}));
export { IconBlender };
