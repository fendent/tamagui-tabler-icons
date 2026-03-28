import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconFoldUp = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M12 13v-8l-3 3m6 0l-3 -3",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M9 17l1 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M14 17l1 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M19 17l1 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M4 17l1 0",
      stroke: color
    })]
  });
}));
export { IconFoldUp };
