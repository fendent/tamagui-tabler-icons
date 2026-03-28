import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconPresentation = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M3 4l18 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M4 4v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-10",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M12 16l0 4",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M9 20l6 0",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M8 12l3 -3l2 2l3 -3",
      stroke: color
    })]
  });
}));
export { IconPresentation };
