import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconBrandStackoverflow = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M4 17v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-1",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M8 16h8",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M8.322 12.582l7.956 .836",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M8.787 9.168l7.826 1.664",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M10.096 5.764l7.608 2.472",
      stroke: color
    })]
  });
}));
export { IconBrandStackoverflow };
