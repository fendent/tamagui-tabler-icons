import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Svg, Path } from "react-native-svg";
import { themed } from "@tamagui/helpers-icon";
var IconBrandNexo = themed(/* @__PURE__ */memo(function (props) {
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
      d: "M17 3l5 3v12l-5 3l-10 -6v-6l10 6v-6l-5 -3l5 -3",
      stroke: color
    }), /* @__PURE__ */_jsx(Path, {
      d: "M12 6l-5 -3l-5 3v12l5 3l4.7 -3.13",
      stroke: color
    })]
  });
}));
export { IconBrandNexo };
