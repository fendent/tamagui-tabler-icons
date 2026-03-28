import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconCircleArrowRight = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0 -18",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M16 12l-4 -4",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M16 12h-8",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M12 16l4 -4",
      stroke: color
    })]
  });
}));
export { IconCircleArrowRight };
