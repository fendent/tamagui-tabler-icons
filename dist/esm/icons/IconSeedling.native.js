import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconSeedling = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M12 10a6 6 0 0 0 -6 -6h-3v2a6 6 0 0 0 6 6h3",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M12 14a6 6 0 0 1 6 -6h3v1a6 6 0 0 1 -6 6h-3",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M12 20l0 -10",
      stroke: color
    })]
  });
}));
export { IconSeedling };
