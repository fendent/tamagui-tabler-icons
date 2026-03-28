import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconPhotoSensor = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M17 5h2a2 2 0 0 1 2 2v2",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M21 15v2a2 2 0 0 1 -2 2h-2",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M7 19h-2a2 2 0 0 1 -2 -2v-2",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M3 9v-2a2 2 0 0 1 2 -2h2",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M7 10a1 1 0 0 1 1 -1h8a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-8a1 1 0 0 1 -1 -1l0 -4",
      stroke: color
    })]
  });
}));
export { IconPhotoSensor };
