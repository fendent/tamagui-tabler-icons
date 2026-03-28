import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconBotId = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M7 10.5c0 -.828 .746 -1.5 1.667 -1.5h6.666c.92 0 1.667 .672 1.667 1.5v3c0 .828 -.746 1.5 -1.667 1.5h-6.666c-.92 0 -1.667 -.672 -1.667 -1.5v-3",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M12 7v2",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M10 12v.01",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M14 12v.01",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M4 8v-2a2 2 0 0 1 2 -2h2",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M4 16v2a2 2 0 0 0 2 2h2",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M16 4h2a2 2 0 0 1 2 2v2",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M16 20h2a2 2 0 0 0 2 -2v-2",
      stroke: color
    })]
  });
}));
export { IconBotId };
