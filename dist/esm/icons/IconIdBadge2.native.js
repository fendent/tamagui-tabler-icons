import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconIdBadge2 = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M7 12h3v4h-3l0 -4",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M10 6h-6a1 1 0 0 0 -1 1v12a1 1 0 0 0 1 1h16a1 1 0 0 0 1 -1v-12a1 1 0 0 0 -1 -1h-6",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M10 4a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v3a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -3",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M14 16h2",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M14 12h4",
      stroke: color
    })]
  });
}));
export { IconIdBadge2 };
