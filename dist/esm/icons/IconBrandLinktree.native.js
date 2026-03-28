import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconBrandLinktree = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M4 10h16",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M6.5 4.5l11 11",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M6.5 15.5l11 -11",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M12 10v-8",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M12 15v7",
      stroke: color
    })]
  });
}));
export { IconBrandLinktree };
