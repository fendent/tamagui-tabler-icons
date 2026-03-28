import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconRoadOff = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M4 19l3.332 -11.661",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M16 5l2.806 9.823",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M12 8v-2",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M12 13v-1",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M12 18v-2",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M3 3l18 18",
      stroke: color
    })]
  });
}));
export { IconRoadOff };
