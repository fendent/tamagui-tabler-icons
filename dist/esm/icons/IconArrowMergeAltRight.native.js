import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconArrowMergeAltRight = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M16 7l-4 -4l-4 4",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M6 21v.01",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M6 18.01v.01",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M7 15.02v.01",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M10 13.03v.01",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M12 3v5.394a6.737 6.737 0 0 0 3 5.606a6.737 6.737 0 0 1 3 5.606v1.394",
      stroke: color
    })]
  });
}));
export { IconArrowMergeAltRight };
