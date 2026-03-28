import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconFileSearch = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M14 3v4a1 1 0 0 0 1 1h4",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M12 21h-5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v4.5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M14 17.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0 -5 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M18.5 19.5l2.5 2.5",
      stroke: color
    })]
  });
}));
export { IconFileSearch };
