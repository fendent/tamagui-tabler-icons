import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconRecycle = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M12 17l-2 2l2 2",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M10 19h9a2 2 0 0 0 1.75 -2.75l-.55 -1",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M8.536 11l-.732 -2.732l-2.732 .732",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M7.804 8.268l-4.5 7.794a2 2 0 0 0 1.506 2.89l1.141 .024",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M15.464 11l2.732 .732l.732 -2.732",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M18.196 11.732l-4.5 -7.794a2 2 0 0 0 -3.256 -.14l-.591 .976",
      stroke: color
    })]
  });
}));
export { IconRecycle };
