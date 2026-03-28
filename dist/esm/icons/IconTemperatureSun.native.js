import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconTemperatureSun = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M4 13.5a4 4 0 1 0 4 0v-8.5a2 2 0 1 0 -4 0v8.5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M4 9h4",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M13 16a4 4 0 1 0 0 -8a4.07 4.07 0 0 0 -1 .124",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M13 3v1",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M21 12h1",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M13 20v1",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M19.4 5.6l-.7 .7",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M18.7 17.7l.7 .7",
      stroke: color
    })]
  });
}));
export { IconTemperatureSun };
