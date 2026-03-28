import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconLemon = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M17.536 3.393c3.905 3.906 3.905 10.237 0 14.143c-3.906 3.905 -10.237 3.905 -14.143 0l14.143 -14.143",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M5.868 15.06a6.5 6.5 0 0 0 9.193 -9.192",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M10.464 10.464l4.597 4.597",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M10.464 10.464v6.364",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M10.464 10.464h6.364",
      stroke: color
    })]
  });
}));
export { IconLemon };
