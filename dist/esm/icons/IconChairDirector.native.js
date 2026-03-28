import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconChairDirector = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M6 21l12 -9",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M6 12l12 9",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M5 12h14",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M6 3v9",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M18 3v9",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M6 8h12",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M6 5h12",
      stroke: color
    })]
  });
}));
export { IconChairDirector };
