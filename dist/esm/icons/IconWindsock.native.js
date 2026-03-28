import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconWindsock = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M6 3v18",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M6 11l12 -1v-4l-12 -1",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M10 5.5v5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M14 6v4",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M4 21h4",
      stroke: color
    })]
  });
}));
export { IconWindsock };
