import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconCoffee = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M3 14c.83 .642 2.077 1.017 3.5 1c1.423 .017 2.67 -.358 3.5 -1c.83 -.642 2.077 -1.017 3.5 -1c1.423 -.017 2.67 .358 3.5 1",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M8 3a2.4 2.4 0 0 0 -1 2a2.4 2.4 0 0 0 1 2",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M12 3a2.4 2.4 0 0 0 -1 2a2.4 2.4 0 0 0 1 2",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M3 10h14v5a6 6 0 0 1 -6 6h-2a6 6 0 0 1 -6 -6v-5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M16.746 16.726a3 3 0 1 0 .252 -5.555",
      stroke: color
    })]
  });
}));
export { IconCoffee };
