import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconBuildingSkyscraper = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M3 21l18 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M5 21v-14l8 -4v18",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M19 21v-10l-6 -4",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M9 9l0 .01",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M9 12l0 .01",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M9 15l0 .01",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M9 18l0 .01",
      stroke: color
    })]
  });
}));
export { IconBuildingSkyscraper };
