import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconPackageImport = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M12 21l-8 -4.5v-9l8 -4.5l8 4.5v4.5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M12 12l8 -4.5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M12 12v9",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M12 12l-8 -4.5",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M22 18h-7",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M18 15l-3 3l3 3",
      stroke: color
    })]
  });
}));
export { IconPackageImport };
