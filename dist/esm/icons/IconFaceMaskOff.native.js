import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconFaceMaskOff = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M5 14.5h-.222c-1.535 0 -2.778 -1.12 -2.778 -2.5s1.243 -2.5 2.778 -2.5h.222",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M19 14.5h.222c1.534 0 2.778 -1.12 2.778 -2.5s-1.244 -2.5 -2.778 -2.5h-.222",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M9 10h1m4 0h1",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M9 14h5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M19 15v-6.49a2 2 0 0 0 -1.45 -1.923l-5 -1.429a2 2 0 0 0 -1.1 0l-1.788 .511m-3.118 .891l-.094 .027a2 2 0 0 0 -1.45 1.922v6.982a2 2 0 0 0 1.45 1.923l5 1.429a2 2 0 0 0 1.1 0l4.899 -1.4",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M3 3l18 18",
      stroke: color
    })]
  });
}));
export { IconFaceMaskOff };
