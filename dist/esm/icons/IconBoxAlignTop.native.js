import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconBoxAlignTop = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M4 10.005h16v-5a1 1 0 0 0 -1 -1h-14a1 1 0 0 0 -1 1v5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M4 15.005v-.01",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M4 20.005v-.01",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M9 20.005v-.01",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M15 20.005v-.01",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M20 20.005v-.01",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M20 15.005v-.01",
      stroke: color
    })]
  });
}));
export { IconBoxAlignTop };
