import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconDesk = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M3 6h18",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M4 6v13",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M20 19v-13",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M4 10h16",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M15 6v8a2 2 0 0 0 2 2h3",
      stroke: color
    })]
  });
}));
export { IconDesk };
