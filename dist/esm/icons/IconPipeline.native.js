import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconPipeline = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M3 4h8",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M4 4v5a6 6 0 0 0 6 6h3a1 1 0 0 1 1 1v4",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M10 4v4a1 1 0 0 0 1 1h3a6 6 0 0 1 6 6v5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M13 20h8",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M12 9v6",
      stroke: color
    })]
  });
}));
export { IconPipeline };
